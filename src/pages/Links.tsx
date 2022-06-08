import styled from "styled-components";
import importLinks from "../data/links.json";

import { COLORS } from "../colors";
import { Sans } from "../components/sans";

const links = importLinks as any;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Link = styled.a`
    display: block;
    padding: 1em;
    margin: 0.5em;
    width: 750px;
    max-width: 75vw;
    background: ${COLORS.ROYAL_BLUE};
    color: white;
    text-decoration: none;
    text-align: center;
`;

const Title = styled.div`
    margin: 0.5em;
    font-size: 1.25em;
    font-weight: bold;
`;

const Section = styled.div`
    text-align: center;
    margin: 1em;
`;

export const LinksPage = () => {
    return (
        <Content>
            {Object.keys(links).map((title) => (
                <Section>
                    <Title>{title}</Title>

                    {Object.keys(links[title]).map((name) => (
                        <Sans>
                            <Link href={links[title][name]}>{name}</Link>
                        </Sans>
                    ))}
                </Section>
            ))}
        </Content>
    );
};