import React from "react";
import ClockNumber from "./ClockNumber";
import { useBackgroundColor } from "../../hooks/useBackgroundColor";
import { useThemedColors } from "../../hooks/useThemedColors";

export const Clock = () => {
    const { background } = useThemedColors();
    useBackgroundColor(background);
    return <OldClock></OldClock>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export class OldClock extends React.Component<{}, { time: Date }> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(props: any) {
        super(props);

        const time = new Date();
        this.state = {
            time
        };
        setInterval(() => {
            const time = new Date();
            this.setState({ time });
        }, 1000);
    }

    render() {
        const style = {
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            alignItems: "center"
        };

        const { time } = this.state;

        const hours =
            time.getHours() > 12 ? time.getHours() % 12 : time.getHours();
        const minutes = time.getMinutes();

        return (
            <div style={style}>
                {hours < 10 ? (
                    <ClockNumber num1={hours} />
                ) : (
                    <ClockNumber
                        num1={Math.floor(hours / 10)}
                        num2={hours % 10}
                    />
                )}
                <div style={{ width: "10vmin" }} />
                {minutes < 10 ? (
                    <ClockNumber num1={0} num2={minutes} />
                ) : (
                    <ClockNumber
                        num1={Math.floor(minutes / 10)}
                        num2={minutes % 10}
                    />
                )}
            </div>
        );
    }
}
