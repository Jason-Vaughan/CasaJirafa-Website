import { describe, it, expect } from 'vitest';
import { getDictionary } from './dictionaries';

describe('i18n Dictionaries', () => {
  it('should load English dictionary properly', async () => {
    const dict = await getDictionary('en');
    expect(dict.navbar.title).toBe('Casa Jirafa');
    expect(dict.hosts.title).toBe('Meet Your Hosts');
    expect(dict.condoIntro.spacious.title).toBe('Spacious Layout');
  });

  it('should load Spanish dictionary properly', async () => {
    const dict = await getDictionary('es');
    expect(dict.navbar.title).toBe('Casa Jirafa');
    expect(dict.hosts.title).toBe('Conoce a tus Anfitriones');
    expect(dict.condoIntro.spacious.title).toBe('Distribución Espaciosa');
  });

  it('should load French dictionary properly', async () => {
    const dict = await getDictionary('fr');
    expect(dict.hosts.title).toBe('Rencontrez vos Hôtes');
  });

  it('should fallback to English for unknown locale', async () => {
    // We cast to any to simulate invalid input at runtime
    const dict = await getDictionary('de' as any);
    expect(dict.hosts.title).toBe('Meet Your Hosts');
  });
});
