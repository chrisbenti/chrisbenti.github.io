import styled from "@emotion/styled";

import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { COLORS } from "../colors";
import { NextGenPage } from "../components/royalBluePage";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
    }
`;

const Name = styled.div`
    font-weight: 700;
    font-size: 2.5em;
    margin-top: 0.25em;
    @media (max-width: 470px) {
        font-size: 2.35em;
    }
    text-align: left;
    color: ${COLORS.ROYAL_BLUE};
`;

const Details = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    align-items: flex-start;
`;

const DetailLink = styled.a`
    text-decoration: none;
    color: ${COLORS.ROYAL_BLUE};
    display: inline-block;
    position: relative;

    &:not(:first-child) {
        margin-top: 0.3em;
    }

    &:after {
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
    &:hover:after {
        // Media query to prevent hover effects on mobile (collides with presses and makes it v ugly)
        @media (hover: hover) and (pointer: fine) {
            width: 100%;
            left: 0;
        }
    }

    // ::after {
    //     content: "⮕";
    //     padding-left: 0.4em;
    //     font-size: 0.6em;
    //     vertical-align: middle;
    // }
`;

export const IndexPage = () => {
    useBackgroundColor(COLORS.OFF_WHITE);
    return (
        <NextGenPage>
            <Content>
                <Details>
                    <DetailLink href="//chrisbenti.com">
                        chrisbenti.com
                    </DetailLink>

                    <DetailLink href="mailto:chris@chrisbenti.com">
                        chris@chrisbenti.com
                    </DetailLink>

                    <DetailLink href="https://www.linkedin.com/in/chrisbenti/">
                        linkedin.com/in/chrisbenti
                    </DetailLink>
                </Details>
                <Name>Chris Bentivenga</Name>
            </Content>
        </NextGenPage>
    );
};
