import styled from "@emotion/styled";
import { COLORS } from "../colors";
import Div100vh from "react-div-100vh";

const RoyalFont = styled.div`
    font-family: "DM Sans", sans-serif;
`;

const WrappingBox = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    border: solid 20px ${COLORS.ROYAL_BLUE};
    color: ${COLORS.ROYAL_BLUE};
    background-color: ${COLORS.OFF_WHITE};

    padding: 0 3em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`;

const WrappingBoxNoBorder = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    color: ${COLORS.ROYAL_BLUE};
    background-color: ${COLORS.OFF_WHITE};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const BoringCenter = (props: { children?: React.ReactNode }) => (
    <RoyalFont>
        <WrappingBoxNoBorder {...props} />
    </RoyalFont>
);

export const NoPaddingNoBluePage = (props: { children?: React.ReactNode }) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <WrappingBoxNoBorder {...props} />
        </Div100vh>
    </RoyalFont>
);

export const RoyalBluePage = (props: { children?: React.ReactNode }) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <WrappingBox {...props} />
        </Div100vh>
    </RoyalFont>
);
