import { Switch } from "@/components/ui/switch.tsx";
import "@/globals.css";
import React from "react";


export default function Footer() {
  return (
    <footer className="mt-auto glass">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col sm:flex-row items-center gap-3 justify-between text-white/60 text-xs">
        <div>© {new Date().getFullYear()} Animal Guesser • v0.1</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">
            Privacy
          </a>
          <a className="hover:text-white" href="#">
            About
          </a>
          <div className="flex items-center gap-2">
            Dark Mode{' '}
            <Switch
              className="ml-1
             data-[state=unchecked]:bg-white/15
             data-[state=checked]:bg-blue-500
             hover:data-[state=unchecked]:bg-white/25
             hover:data-[state=checked]:bg-blue-600
             transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
