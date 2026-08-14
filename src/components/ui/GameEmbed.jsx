import React, { useState } from 'react';

/**
 * GameEmbed Component
 * Supports embedding Pygame / Pygbag WebAssembly builds or providing an external playable link.
 */
export default function GameEmbed({ gameConfig = {} }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    type = 'iframe', // 'iframe', 'canvas', or 'external'
    src = '',
    externalUrl = '',
    hasPlayableBuild = false,
    instructions = '[GAME CONTROLS PLACEHOLDER — Arrow keys to move, Space to action]'
  } = gameConfig;

  return (
    <div className="my-10 border-1.5 border-[#171515] bg-[#FAF4EB] p-6 sm:p-8">
      {/* Component Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#171515]/15">
        <div>
          <span className="inline-block bg-[#D7F23A] text-[#171515] text-[10px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 border border-[#171515] mb-1">
            PYGAME BROWSER EMBED ARCHITECTURE
          </span>
          <h3 className="font-heading font-bold text-xl uppercase text-[#171515]">
            PLAYABLE GAME CONTAINER
          </h3>
        </div>

        {hasPlayableBuild ? (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-primary text-xs"
          >
            {isPlaying ? 'PAUSE / CLOSE GAME' : '🎮 PLAY GAME IN BROWSER'}
          </button>
        ) : externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            🎮 PLAY GAME ON EXTERNAL SITE ↗
          </a>
        ) : (
          <span className="text-xs font-mono font-bold bg-[#E96F98] text-[#171515] px-3 py-1.5 border border-[#171515]">
            [PYGBAG / WASM BUILD READY FOR UPLOAD]
          </span>
        )}
      </div>

      {/* Embedded Game Area or Placeholder Banner */}
      {hasPlayableBuild && isPlaying ? (
        <div className="w-full aspect-[16/9] border-1.5 border-[#171515] bg-black overflow-hidden relative">
          <iframe 
            src={src} 
            title="Playable Pygame Embed" 
            className="w-full h-full border-none"
            allow="autoplay; keyboard"
          />
        </div>
      ) : (
        <div className="w-full aspect-[16/9] border-1.5 border-dashed border-[#171515] bg-[#EFECE4] p-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#D7F23A] border border-[#171515] flex items-center justify-center font-heading font-bold text-xl">
            🎮
          </div>
          <div>
            <h4 className="font-heading font-bold text-base uppercase text-[#171515] mb-1">
              PLAYABLE BROWSER EMBED READY (`public/games/`)
            </h4>
            <p className="text-xs font-body text-[#57534E] max-w-md">
              Upload your compiled Pygbag WebAssembly files to <code className="bg-[#FAF0F4] text-[#171515] px-1 py-0.5 border border-[#171515]">public/games/your-game-name/</code> and set <code className="bg-[#FAF0F4] text-[#171515] px-1 py-0.5 border border-[#171515]">hasPlayableBuild: true</code> in <code className="bg-[#FAF0F4] text-[#171515] px-1 py-0.5 border border-[#171515]">projects.js</code>.
            </p>
          </div>

          <div className="mt-2 text-xs font-mono text-[#57534E] bg-[#FFFFFF] px-3 py-2 border border-[#171515]">
            CONTROLS: {instructions}
          </div>
        </div>
      )}
    </div>
  );
}
