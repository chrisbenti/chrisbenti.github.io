import { useParams } from "react-router-dom";
import { useBackgroundColor } from "../hooks/useBackgroundColor";

export const BlackPage = () => {
    const { color } = useParams();
    console.log({ color });
    useBackgroundColor(color || "black");
    return null;
};
