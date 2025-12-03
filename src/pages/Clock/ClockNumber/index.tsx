import SplitNumbers from "../SplitNumbers";
import { useTheme } from "../../../contexts/ThemeContext";

export default function ClockNumber({
    num1,
    num2
}: {
    num1: number;
    num2?: number;
}) {
    const { theme } = useTheme();

    const isDarkMode = theme === "dark";

    const CLOCK_BACKGROUND_DARK = "#121212";
    const CLOCK_BORDER_DARK = "#151515";
    const CLOCK_TEXT_DARK = "#BABABA";
    const CLOCK_BACKGROUND_LIGHT = "#EAEAEA";
    const CLOCK_BORDER_LIGHT = "#E0E0E0";
    const CLOCK_TEXT_LIGHT = "#333333";

    const backgroundColor = isDarkMode
        ? CLOCK_BACKGROUND_DARK
        : CLOCK_BACKGROUND_LIGHT;
    const borderColor = isDarkMode ? CLOCK_BORDER_DARK : CLOCK_BORDER_LIGHT;
    const textColor = isDarkMode ? CLOCK_TEXT_DARK : CLOCK_TEXT_LIGHT;

    const size = 80;
    const borderRadius = "10vmin";

    const commonStyle = {
        height: `${size / 2}vmin`,
        width: `${size}vmin`,
        color: textColor,
        overflow: "hidden",
        fontSize: "70vmin",
        fontWeight: "bold",
        lineHeight: 1,
        textAlign: "center",
        backgroundColor: backgroundColor,
        border: `solid 5px ${borderColor}`
    };

    const topStyle = {
        ...commonStyle,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
    };

    const bottomStyle = {
        ...commonStyle,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        marginTop: "1vmin"
    };

    return (
        <div style={{ fontFamily: "Helvetica" }}>
            <div style={topStyle as never}>
                <div
                    style={{
                        position: "relative",
                        top: `7vmin`
                    }}
                >
                    {<SplitNumbers num1={num1} num2={num2} />}
                </div>
            </div>
            <div style={bottomStyle as never}>
                <div
                    style={{
                        position: "relative",
                        top: `-34vmin`
                    }}
                >
                    {<SplitNumbers num1={num1} num2={num2} />}
                </div>
            </div>
        </div>
    );
}
