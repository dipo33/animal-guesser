import type { components } from '@/api/schema';

export type GameMode = components['schemas']['GameMode'];
const GAME_MODES: GameMode[] = ['classic', 'expert'];

export type Answer = components['schemas']['Answer'];
export type I18nToken = components['schemas']['I18nToken'];
export type QuestionDto = components['schemas']['QuestionDto'];
export type AnimalDto = components['schemas']['AnimalDto'];

export function isGameMode(value: string): value is GameMode {
  return GAME_MODES.includes(value);
}
