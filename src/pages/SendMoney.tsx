import { RoyalBluePage } from "../components/royalBluePage";
import { Table, THead, TH, TBody, TR, TD } from "../components/table";

const PROVIDERS = [
    ["Venmo", "https://venmo.com/u/ChrisBenti91"],
    ["CashApp", "https://cash.app/$chrisbenti"],
    ["PayPal", "https://paypal.me/ChrisBentivenga"],
    ["Zelle", "chris@chrisbenti.com"],
    ["Apple Cash", "chris@chrisbenti.com"]
];
export const SendMoney = () => {
    return (
        <RoyalBluePage>
            <Table>
                <THead>
                    <TH>Provider</TH>
                    <TH>URL</TH>
                </THead>
                <TBody>
                    {PROVIDERS.map(([provider, link], id) => (
                        <TR key={id}>
                            <TD>{provider}</TD>
                            <TD>
                                {link.startsWith("http") ? (
                                    <a href={link}>{link}</a>
                                ) : (
                                    link
                                )}
                            </TD>
                        </TR>
                    ))}
                </TBody>
            </Table>
        </RoyalBluePage>
    );
};
