import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Globe,
  Home,
  Languages,
  PawPrint,
  RotateCcw,
  Settings,
  Volume2,
  VolumeX,
} from "lucide-react";
import React from "react";
import "@/globals.css";

const languages = ["EN", "CS", "SK"];

export default function Navbar() {
  const [lang, setLang] = React.useState("EN");
  const [muted, setMuted] = React.useState(false);

  return (
    <header className={`sticky top-0 z-40 glass shadow-xl`}>
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl border border-white/15 bg-white/10">
            <PawPrint className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-tight">
              Animal Guesser
            </div>
            <div className="text-xs text-white/60">
              Think of an animal. We’ll find it.
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setScreen("home")}
          >
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => {
              setScreen("game");
              setProgress(0);
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Restart
          </Button>

          {/* Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
              >
                <Languages className="mr-2 h-4 w-4" /> {lang}{" "}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
              {languages.map((l) => (
                <DropdownMenuItem
                  key={l}
                  onClick={() => setLang(l)}
                  className={"cursor-pointer"}
                >
                  {l}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Globe className="mr-2 h-4 w-4" /> Manage languages…
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sound */}
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setMuted((s) => !s)}
          >
            {muted
              ? <VolumeX className="h-5 w-5" />
              : <Volume2 className="h-5 w-5" />}
          </Button>

          {/* Settings */}
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
