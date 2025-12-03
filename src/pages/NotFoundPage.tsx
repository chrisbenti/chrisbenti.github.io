import { RoyalBluePage } from "../components/royalBluePage";
import styled from "@emotion/styled";
import { GrDocumentMissing } from "react-icons/gr";
import { useThemedColors } from "../hooks/useThemedColors";

const MissingPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MissingIcon = styled(GrDocumentMissing)`
    font-size: 3em;
`;

const MissingText = styled.div`
    padding-top: 0.5em;
    font-size: 1em;
`;

const StyledMissingSubtext = styled.a<{
    color: string;
    backgroundColor: string;
}>`
    margin-top: 1em;
    padding: 0.5em 1em;
    border-radius: 10px;
    font-size: 0.75em;
    text-decoration: none;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    &:hover {
        opacity: 0.9;
    }
`;

const MissingSubtext = (props: { href: string; children: React.ReactNode }) => {
    const { foreground, background } = useThemedColors();
    return (
        <StyledMissingSubtext
            color={background}
            backgroundColor={foreground}
            {...props}
        />
    );
};

export const NotFoundPage = () => (
    <RoyalBluePage>
        <MissingPage>
            <MissingIcon />
            <MissingText>Page not found.</MissingText>
            <MissingSubtext href="/">Try here instead.</MissingSubtext>
        </MissingPage>
    </RoyalBluePage>
);
