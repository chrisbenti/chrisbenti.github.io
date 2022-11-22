import { NoPaddingNoBluePage } from "../components/royalBluePage";
import IframeResizer from "iframe-resizer-react";

export const IFramePage = ({ url }: { url: string }) => (
    <NoPaddingNoBluePage>
        <IframeResizer
            src={url}
            style={{ width: "100%", height: "100%", border: 0 }}
        />
    </NoPaddingNoBluePage>
);
