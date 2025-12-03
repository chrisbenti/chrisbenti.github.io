import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";
import { useThemedColors } from "../hooks/useThemedColors";

const RoyalFont = styled.div`
    font-family: "DM Sans", sans-serif;
`;

const PHONE_SIZE = "768px";
const PageFrame = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const NextGenPageContainer = styled.div`
    @media (max-width: ${PHONE_SIZE}) {
        margin: 1.25rem;
    }
    display: flex;
    flex-direction: column;
`;

export const NextGenPage = (props: { children?: React.ReactNode }) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <PageFrame>
                <NextGenPageContainer {...props} />
            </PageFrame>
        </Div100vh>
    </RoyalFont>
);

const WrappingBox = styled.div<{
    color: string;
    backgroundColor: string;
}>`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    padding: 0 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`;

const WrappingBoxNoBorder = styled.div<{
    color: string;
    backgroundColor: string;
}>`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const BoringCenter = (props: { children?: React.ReactNode }) => {
    const { foreground, background } = useThemedColors();
    return (
        <RoyalFont>
            <WrappingBoxNoBorder
                color={foreground}
                backgroundColor={background}
                {...props}
            />
        </RoyalFont>
    );
};

export const NoPaddingNoBluePage = (props: { children?: React.ReactNode }) => {
    const { foreground, background } = useThemedColors();
    return (
        <RoyalFont>
            <Div100vh style={{ width: "100vw" }}>
                <WrappingBoxNoBorder
                    color={foreground}
                    backgroundColor={background}
                    {...props}
                />
            </Div100vh>
        </RoyalFont>
    );
};

export const RoyalBluePage = (props: { children?: React.ReactNode }) => {
    const { foreground, background } = useThemedColors();
    return (
        <RoyalFont>
            <Div100vh style={{ width: "100vw" }}>
                <WrappingBox
                    color={foreground}
                    backgroundColor={background}
                    {...props}
                />
            </Div100vh>
        </RoyalFont>
    );
};
