import { Button } from "@/components/ui/button.tsx";
import { Volume2, VolumeX } from "lucide-react";
import React from "react";

type SoundControlProps = {
  value?: boolean;
  onChange?: (muted: boolean) => void;
};

export default function SoundControl({
  value,
  onChange,
}: SoundControlProps) {
  const [internalMuted, setInternalMuted] = React.useState(false);
  const muted = value ?? internalMuted;

  const handleChange = () => {
    const new_value = !muted;

    setInternalMuted(new_value);
    onChange?.(new_value);
  };

  return (
    <Button
      variant="ghost"
      className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
      onClick={handleChange}
    >
      {muted
        ? <VolumeX className="h-5 w-5" />
        : <Volume2 className="h-5 w-5" />}
    </Button>
  );
}
