import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Languages } from "lucide-react";

type Language = {
  code: string;
  fullName: string;
  shortLabel: string;
};

const LANGUAGES: Language[] = [
  { code: "en-US", fullName: "English (US)", shortLabel: "ENG" },
  { code: "cs", fullName: "Čeština", shortLabel: "CZE" },
  { code: "sk", fullName: "Slovenčina", shortLabel: "SVK" },
];

type LanguageSelectorProps = {
  value?: string;
  onChange?: (code: string) => void;
  defaultCode?: string;
};

export default function LanguageSelector({
  value,
  onChange,
  defaultCode = "en-US",
}: LanguageSelectorProps) {
  const [internalCode, setInternalCode] = React.useState(defaultCode);
  const selectedCode = value ?? internalCode;

  const selected = React.useMemo(
    () => LANGUAGES.find((l) => l.code === selectedCode) ?? LANGUAGES[0],
    [selectedCode],
  );

  const handleChange = (code: string) => {
    setInternalCode(code);
    onChange?.(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white cursor-pointer"
        >
          <Languages className="mr-2 h-4 w-4" />
          <span className="inline-block w-7 text-left truncate align-middle">
            {selected.shortLabel}
          </span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-44">
        <DropdownMenuRadioGroup
          value={selected.code}
          onValueChange={handleChange}
        >
          {LANGUAGES.map((l) => (
            <DropdownMenuRadioItem key={l.code} value={l.code}>
              {l.fullName}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
