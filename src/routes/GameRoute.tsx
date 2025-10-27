import { isGameMode } from '@/model/data.ts';
import GamePage from '@/pages/GamePage.tsx';
import { Navigate, useParams } from 'react-router-dom';

export default function GameRoute() {
  const { mode } = useParams();

  if (!isGameMode(mode)) {
    return <Navigate to="/game/classic" replace />;
  }

  return <GamePage gameMode={mode} />;
}
