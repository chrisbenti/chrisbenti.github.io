import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { COLORS } from "../colors";
import { NextGenPage } from "../components/royalBluePage";
import { Link, Name, LinkContainer } from "../components/text";
import { motion } from "motion/react";

export const IndexPage = () => {
    useBackgroundColor(COLORS.OFF_WHITE);
    return (
        <NextGenPage>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: "easeOut"
                }}
            >
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
            </motion.div>
        </NextGenPage>
    );
};
