import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { COLORS } from "../colors";
import { NextGenPage } from "../components/royalBluePage";
import { Link, Name, LinkContainer } from "../components/text";

export const IndexPage = () => {
    useBackgroundColor(COLORS.OFF_WHITE);
    return (
        <NextGenPage>
            <LinkContainer>
                <Link href="//chrisbenti.com">chrisbenti.com</Link>

                <Link href="mailto:chris@chrisbenti.com">
                    chris@chrisbenti.com
                </Link>

                <Link href="https://www.linkedin.com/in/chrisbenti/">
                    linkedin.com/in/chrisbenti
                </Link>
            </LinkContainer>
            <Name>Chris Bentivenga</Name>
        </NextGenPage>
    );
};
