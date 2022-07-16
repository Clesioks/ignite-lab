import { CaretRight, FileArrowDown } from 'phosphor-react';
import BotaoAzul from './BotaoAzul';
import BotaoVerde from './BotaoVerde';
import FooterLogo from './FooterLogo';

export default function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Instalando TailwindCSS{' '}
            </h1>
            {/* leading-relaxed texto espaçado */}
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nesta aula vamos iníciar nosso canal com a instalação do
              TailwindCss.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/clesioks.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Clésio K. da Silva
                </strong>
                <span className="text-gray-200 text-sm block">
                  Análista de Sistema
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg">
            <BotaoVerde />
            <BotaoAzul />
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2 ">
          <a
            href=""
            className="bg-gray-700 rounded 
            overflow-hidden flex items-stretch
            gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl>">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href=""
            className="bg-gray-700 rounded 
            overflow-hidden flex items-stretch
            gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl>">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
      <footer className="flex border-t-2 mb-3 mt-10">
        <div className="mt-2">
          <FooterLogo />
        </div>
        <p className="ml-5 mt-2 text-gray-300">
          Lótus Software - Todos diretos reservados - 2022
        </p>
      </footer>
    </div>
  );
}
