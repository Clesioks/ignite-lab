import React from 'react';
import { DiscordLogo } from 'phosphor-react';

export default function BotaoVerde() {
  return (
    <div>
      <a
        href=""
        className="p-4 text-sm bg-green-500 flex items-center 
              rounded font-bold uppercase gap-2 justify-center
              hover:bg-green-700 transition-colors"
      >
        <DiscordLogo size={24} />
        Comunidade do Discord
      </a>
    </div>
  );
}
