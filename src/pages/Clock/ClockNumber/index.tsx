import SplitNumbers from "../SplitNumbers";

export default function ClockNumber({
    num1,
    num2
}: {
    num1: number;
    num2?: number;
}) {
    const size = 80;
    const borderRadius = "10vmin";

    const commonStyle = {
        height: `${size / 2}vmin`,
        width: `${size}vmin`,
        color: "#BABABA",
        overflow: "hidden",
        fontSize: "70vmin",
        fontWeight: "bold",
        lineHeight: 1,
        textAlign: "center",
        backgroundColor: "#121212",
        border: "solid 5px #151515"
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
