/**
 * Game Player Component
 * Oyun oynatıcı bileşeni
 */

import React from 'react';

interface GamePlayerProps {
  gameId: string;
  onExit: () => void;
  children: React.ReactNode;
}

export function GamePlayer({ gameId, onExit, children }: GamePlayerProps) {
  return (
    <div className="game-player">
      <div className="game-player-header">
        <button onClick={onExit} className="exit-button">
          ← Geri
        </button>
      </div>

      <div className="game-player-content">{children}</div>
    </div>
  );
}
