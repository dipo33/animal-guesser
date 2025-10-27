import { Switch } from '@/components/ui/switch.tsx';
import '@/globals.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="glass">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col sm:flex-row items-center gap-3 justify-between text-white/60 text-xs">
        <div>© {new Date().getFullYear()} Animal Guesser • v0.1</div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-white" to="/privacy">
            {t('section.privacy')}
          </Link>
          <Link className="hover:text-white" to="/about">
            {t('section.about')}
          </Link>
          <div className="flex items-center gap-2">
            {t('button.dark_mode')}{' '}
            <Switch
              className="ml-1
             data-[state=unchecked]:bg-white/15
             data-[state=checked]:bg-cyan-400/90
             hover:data-[state=unchecked]:bg-white/25
             hover:data-[state=checked]:bg-cyan-300/90
             data-[state=checked]:shadow-[0_8px_24px_rgba(34,211,238,0.35)]
             transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
