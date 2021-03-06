import React from 'react';
import { Lightning } from 'phosphor-react';

export default function BotaoAzul() {
  return (
    <div>
      <a
        href=""
        className="p-4 text-sm border border-blue-500 text-blue-500 flex 
              items-center rounded font-bold uppercase gap-2 justify-center
              hover:bg-blue-500 hover:text-gray-900 transition-colors"
      >
        <Lightning size={24} />
        Acesse o desafio
      </a>
    </div>
  );
}
