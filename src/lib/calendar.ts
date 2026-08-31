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
    
    // Extract all VEVENT blocks
    const veventRegex = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
    
    let match;
    while ((match = veventRegex.exec(icalData)) !== null) {
      const block = match[1];
      
      const startMatch = block.match(/DTSTART(?:;VALUE=DATE)?:(\d{8})/);
      const endMatch = block.match(/DTEND(?:;VALUE=DATE)?:(\d{8})/);
      
      if (startMatch && endMatch) {
        const startStr = startMatch[1];
        const endStr = endMatch[1];
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
