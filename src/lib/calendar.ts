export interface BlockedDateRange {
  start: Date;
  end: Date;
}

export async function getBlockedDates(): Promise<BlockedDateRange[]> {
  try {
    const icalUrl = 'https://www.airbnb.com/calendar/ical/1332252891308414751.ics?t=6df95cb85bae45f9a75ca00ba595f367';
    // Add a cache-busting timestamp or revalidate setting to ensure we get fresh data
    const response = await fetch(icalUrl, { next: { revalidate: 3600 } }); 
    const icalData = await response.text();

    const blockedRanges: BlockedDateRange[] = [];
    
    // Quick and simple regex to extract start and end dates from standard VEVENT blocks
    const eventRegex = /BEGIN:VEVENT[\s\S]*?DTSTART(?:;VALUE=DATE)?:(\d{8})[\s\S]*?DTEND(?:;VALUE=DATE)?:(\d{8})[\s\S]*?END:VEVENT/g;
    
    let match;
    while ((match = eventRegex.exec(icalData)) !== null) {
      const startStr = match[1];
      const endStr = match[2];

      if (startStr && endStr) {
        // Parse YYYYMMDD string to Date
        const start = new Date(
          parseInt(startStr.substring(0, 4)),
          parseInt(startStr.substring(4, 6)) - 1,
          parseInt(startStr.substring(6, 8))
        );
        const end = new Date(
          parseInt(endStr.substring(0, 4)),
          parseInt(endStr.substring(4, 6)) - 1,
          parseInt(endStr.substring(6, 8))
        );
        
        blockedRanges.push({ start, end });
      }
    }

    return blockedRanges;
  } catch (error) {
    console.error('Failed to fetch calendar:', error);
    return [];
  }
}
