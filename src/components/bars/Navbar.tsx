import { Button } from '@/components/ui/button';
import { Home, PawPrint, RotateCcw, Settings } from 'lucide-react';
import '@/globals.css';
import LanguageSelector from '@/components/controls/LanguageSelector.tsx';
import SoundControl from '@/components/controls/SoundControl.tsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className={`sticky top-0 z-40 glass shadow-xl`}>
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center gap-4">
        <Link to="/">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl border border-white/15 bg-white/10">
              <PawPrint className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-tight">
                Animal Guesser
              </div>
              <div className="text-xs text-white/60">{t('app.motto')}</div>
            </div>
          </div>
        </Link>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> {t('button.home')}
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
            onClick={() => {
              /* TODO: Restart the game */
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> {t('button.restart')}
          </Button>

          <LanguageSelector></LanguageSelector>
          <SoundControl />

          {/* Settings */}
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
