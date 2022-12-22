import styled from "@emotion/styled";
import { COLORS } from "../colors";

export const LinkContainer = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    align-items: flex-start;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${COLORS.ROYAL_BLUE};
    display: inline-block;
    position: relative;

    &:not(:first-child) {
        margin-top: 0.3em;
    }

    &:before {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 3px;
        left: 50%;
        position: absolute;
        background: ${COLORS.ROYAL_BLUE};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover:before {
        // Media query to prevent hover effects on mobile (collides with presses and makes it v ugly)
        @media (hover: hover) and (pointer: fine) {
            width: 100%;
            left: 0;
        }
    }
`;

export const LinkWithArrow = styled(Link)`
    :after {
        top: calc(50% - 0.6em / 2);
        content: "⮕";
        padding-left: 0.4em;
        font-size: 0.6em;
        vertical-align: middle;
    }
`;

export const Name = styled.div`
    font-weight: 700;
    font-size: 2.5em;
    margin-top: 0.25em;
    @media (max-width: 470px) {
        font-size: 2.35em;
    }
    text-align: left;
    color: ${COLORS.ROYAL_BLUE};
`;
