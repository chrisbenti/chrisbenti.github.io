import { BoringCenter } from "../components/royalBluePage";
import { Table, THead, TH, TBody, TR, TD } from "../components/table";
import { ReactRoutes, RedirectRoutes, IFramePages } from "../routes";
import { useMemo } from "react";
import { HiClipboardCopy } from "react-icons/hi";

export const ResourcesPage = () => {
    const resources = useMemo(
        () =>
            [ReactRoutes, RedirectRoutes, IFramePages]
                .map((x) => Object.entries(x))
                .flat()
                .map(([path, { description }]) => ({
                    path,
                    description,
                    full: `http://chrisbenti.com${path}`
                }))
                .sort((a, b) => (a.path > b.path ? 1 : -1)),
        []
    );
    return (
        <BoringCenter>
            <Table style={{ margin: "1em" }}>
                <THead>
                    <TH></TH>
                    <TH>Path</TH>
                    <TH>Description</TH>
                </THead>
                <TBody>
                    {resources.map(({ path, description, full }, id) => (
                        <TR key={id}>
                            <TD>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(full);
                                    }}
                                >
                                    <HiClipboardCopy
                                        size={20}
                                    ></HiClipboardCopy>
                                </button>
                            </TD>
                            <TD>
                                <a href={full}>{path}</a>
                            </TD>
                            <TD>{description}</TD>
                        </TR>
                    ))}
                </TBody>
            </Table>
        </BoringCenter>
    );
};
