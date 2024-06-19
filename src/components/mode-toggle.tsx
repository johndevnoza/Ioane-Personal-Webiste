import { useTheme } from "@components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <section className="hidden justify-between gap-2 p-1 md:flex">
      <div
        onClick={() => setTheme("dark")}
        className={`size-[30px] rounded-sm bg-gray-500 p-1 ${theme === "dark" && "outline"}`}
      />
      <div
        onClick={() => setTheme("orange")}
        className={`size-[30px] rounded-sm bg-orange-500 p-1 ${theme === "orange" && "outline"}`}
      />
      <div
        onClick={() => setTheme("blue")}
        className={`size-[30px] rounded-sm bg-blue-500 p-1 ${theme === "blue" && "outline"}`}
      />
      <div
        onClick={() => setTheme("red")}
        className="size-[30px] rounded-sm bg-red-500 p-1"
      />
    </section>
  );
}
