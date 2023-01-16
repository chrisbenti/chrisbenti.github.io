import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";
import { ResumePage } from "./pages/ResumePage";
import { ResourcesPage } from "./pages/ResourcesPage";

import React from "react";

type IReactRoutes = {
    [url: string]: {
        component: React.ReactElement;
        title: string;
        description: string;
    };
};
export const ReactRoutes: IReactRoutes = {
    "/clock": {
        component: <Clock />,
        title: "Clock",
        description: "A web clock, clear ripoff of Fliqlo"
    },
    "/black": {
        component: <BlackPage />,
        title: "Black Page",
        description:
            "Just a black web page. Useful if you want to black out a monitor, but not turn it off."
    },
    "/black/:color": {
        component: <BlackPage />,
        title: "Black Page",
        description:
            "Just a black web page. Useful if you want to black out a monitor, but not turn it off."
    },
    "/sparrow": {
        component: <SparrowPage />,
        title: "JACK SPARROW",
        description: "For when you're leaving a sinking ship in style."
    },
    "/resume": {
        component: <ResumePage />,
        title: "Resume | Chris Bentivenga",
        description: "My Resume"
    },
    "/ls": {
        component: <ResourcesPage />,
        title: "Available Resources | Chris Bentivenga",
        description:
            "This page. Just descriptions of all of the pages on this site."
    }
};

type IRedirectRoutes = {
    [url: string]: { destination: string; description: string };
};
export const RedirectRoutes: IRedirectRoutes = {
    "/pc": {
        destination: "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ",
        description: "All of the stuff I put into my 2018 PC build"
    },
    "/how-it-works": {
        destination:
            "https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing",
        description: "Quick arch document explaining how this site works."
    },
    "/drop": {
        destination: "https://www.dropbox.com/request/N24zVQFjrYVEGzYLQw2B",
        description:
            "Drop site, if you want to send me a file but not via email/messages"
    },
    "/meet": {
        destination: "https://calendly.com/chrisbenti",
        description: "Calendly link, make a meeting with me."
    },
    "/find-time": {
        destination: "https://calendly.com/chrisbenti",
        description: "Calendly link, make a meeting with me."
    },
    "/headshot": { destination: "/headshot.png", description: "My headshot." },
    "/linkedin": {
        destination: "https://www.linkedin.com/in/chrisbenti/",
        description: "My LinkedIn"
    },
    "/intro": {
        destination:
            "https://chrisbenti.notion.site/Chris-Bentivenga-Introduction-14b2e6f29df2478b9078e825dc74d8aa",
        description: "An intro document to me as part of my job search."
    },
    "/send-money": {
        destination:
            "https://chrisbenti.notion.site/Send-Money-cdf683da5d0b4607aa53ad9119f3fc9c",
        description: "Ways to send me money"
    },
    "/resume-content": {
        destination: "https://resume.chrisbenti.com",
        description: "backcompat of old resume link"
    },
    "/resume-content/*": {
        destination: "https://resume.chrisbenti.com",
        description: "backcompat of old resume link"
    }
};

type IIFramePages = {
    [url: string]: { destination: string; description: string };
};
export const IFramePages: IIFramePages = {};
