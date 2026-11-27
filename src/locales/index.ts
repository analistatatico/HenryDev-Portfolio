import { pt } from './pt';
import { en } from './en';
import type { Translation } from './pt';

export type Language = 'pt' | 'en';

export const translations: Record<Language, Translation> = { pt, en };

export const LANGUAGES: Language[] = ['pt', 'en'];

export const DEFAULT_LANGUAGE: Language = 'pt';

export type { Translation };
export { pt, en };
