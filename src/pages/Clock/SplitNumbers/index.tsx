export default function SplitNumbers({
    num1,
    num2
}: {
    num1: number;
    num2?: number;
}) {
    return (
        <div style={{ display: "flex", textAlign: "center" }}>
            {typeof num1 === "number" && (
                <div style={{ flexGrow: 1 }}>{num1}</div>
            )}
            {typeof num2 === "number" && (
                <div style={{ flexGrow: 1 }}>{num2}</div>
            )}
        </div>
    );
}
