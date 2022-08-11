import { RoyalBluePage } from "../components/royalBluePage";
import styled from "@emotion/styled";
import { VscFilePdf } from "react-icons/vsc";
import { COLORS } from "../colors";

const ResumeLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ResumeA = styled.a`
    text-decoration: none;
    color: ${COLORS.ROYAL_BLUE};
    padding: 2em;
    &:hover {
        border: dashed 1px ${COLORS.ROYAL_BLUE};
    }
`;

const ResumeText = styled.div`
    margin-top: 0.3em;
    font-size: 1.5em;
    font-weight: semi-bold;
`;

const ResumeIcon = styled(VscFilePdf)`
    font-size: 5em;
`;

export const ResumePage = () => (
    <RoyalBluePage>
        <ResumeLink>
            <ResumeA href="https://www.chrisbenti.com/resume-content/chris-bentivenga-resume.pdf">
                <ResumeIcon />
                <ResumeText>(Click Me)</ResumeText>
            </ResumeA>
        </ResumeLink>
    </RoyalBluePage>
);
