import { Moon, Sun } from "lucide-react";

import { useTheme } from "@components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="h-min">
      <button onClick={() => setTheme("light")}>
        Light <Sun />
      </button>
      <button onClick={() => setTheme("dark")}>
        Dark <Moon />
      </button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
