import { useTheme } from "../contexts/ThemeContext";
import { COLORS } from "../colors";

export const useThemedColors = () => {
    const { theme } = useTheme();

    const isDarkMode = theme === "dark";

    // Light mode: OFF_WHITE text on ROYAL_BLUE background.
    // Dark mode: ROYAL_BLUE text on OFF_WHITE background.
    return {
        background: isDarkMode ? COLORS.ROYAL_BLUE : COLORS.OFF_WHITE,
        foreground: isDarkMode ? COLORS.OFF_WHITE : COLORS.ROYAL_BLUE
    };
};
