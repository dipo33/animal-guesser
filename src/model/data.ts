import type { components } from '@/api/schema';

export type GameMode = components['schemas']['GameMode'];
const GAME_MODES: GameMode[] = ['classic', 'expert'];

export function isGameMode(value: string): value is GameMode {
  return GAME_MODES.includes(value);
}
