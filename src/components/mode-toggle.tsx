import { useTheme } from "@components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <section className="relative p-1 md:flex">
      <div className={`hidden w-full justify-between gap-2 md:flex`}>
        <div
          onClick={() => setTheme("dark")}
          className={`size-[30px] rounded-sm bg-gray-500 p-1 ${theme === "dark" ? "outline" : ""}`}
        />
        <div
          onClick={() => setTheme("orange")}
          className={`size-[30px] rounded-sm bg-orange-500 p-1 ${theme === "orange" ? "outline" : ""}`}
        />
        <div
          onClick={() => setTheme("blue")}
          className={`size-[30px] rounded-sm bg-blue-500 p-1 ${theme === "blue" ? "outline" : ""}`}
        />
        <div
          onClick={() => setTheme("red")}
          className={`size-[30px] rounded-sm bg-red-500 p-1 ${theme === "red" ? "outline" : ""}`}
        />
      </div>
      <select
        onChange={(e) => setTheme(e.target.value)}
        className={`absolute bottom-0 left-0 flex size-6 w-full appearance-none gap-4 rounded-sm border-2 md:hidden`}
        value={theme}
        style={{
          backgroundColor:
            theme === "dark"
              ? "#4a5568"
              : theme === "orange"
                ? "#ed8936"
                : theme === "blue"
                  ? "#4299e1"
                  : theme === "red"
                    ? "#f56565"
                    : "",
          color: theme === "dark" ? "#f7fafc" : "#1a202c",
          paddingRight: "1.5rem",
        }}
      >
        <option
          className={`rounded-lg bg-gray-500 p-1 hover:appearance-none`}
          value="dark"
        ></option>
        <option
          className={`rounded-lg bg-orange-500 p-1 hover:appearance-none`}
          value="orange"
        ></option>
        <option
          className={`rounded-lg bg-blue-500 p-1 hover:appearance-none`}
          value="blue"
        ></option>
        <option
          className={`rounded-lg bg-red-500 p-1 hover:appearance-none`}
          value="red"
        ></option>
      </select>
    </section>
  );
}
