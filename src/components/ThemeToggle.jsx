import { useTheme } from "../theme/ThemeContext";

export function ThemeToggle({ className }) {
  const { dark, setDark } = useTheme();
  return (
    <button onClick={() => setDark((prev) => !prev)} className={className}>
      {dark ? "Light" : "Dark"}
    </button>
  );
}
