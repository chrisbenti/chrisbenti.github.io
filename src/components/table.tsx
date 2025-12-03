import styled from "@emotion/styled";
import { useThemedColors } from "../hooks/useThemedColors";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Table = styled.table`
    border-collapse: collapse;
`;
export const THead = styled.thead``;
export const TBody = styled.tbody``;
export const TR = styled.tr``;

const StyledTH = styled.th<{ borderColor: string }>`
    border: 1px solid ${(props) => props.borderColor};
    padding: 0.5em;
`;

export const TH = (
    props: DetailedHTMLProps<
        HTMLAttributes<HTMLTableCellElement>,
        HTMLTableCellElement
    >
) => {
    const { foreground } = useThemedColors();
    return <StyledTH borderColor={foreground} {...props} />;
};

const StyledTD = styled.td<{ borderColor: string }>`
    border: 1px solid ${(props) => props.borderColor};
    padding: 0.25em 0.5em;
`;

export const TD = (
    props: DetailedHTMLProps<
        HTMLAttributes<HTMLTableCellElement>,
        HTMLTableCellElement
    >
) => {
    const { foreground } = useThemedColors();
    return <StyledTD borderColor={foreground} {...props} />;
};
