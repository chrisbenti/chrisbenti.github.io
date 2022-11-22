import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";
import { ResumePage } from "./pages/ResumePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { LinksPage } from "./pages/Links";
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
    },
    "/links": {
        component: <LinksPage />,
        title: "Links | Chris Bentivenga",
        description: "My 'link tree'"
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
            "https://docs.google.com/document/d/1OtgIkY-jbDCSHzjHS6JXMUsjbMYQFZ2xQM0EXP0N6bw",
        description: "An intro document to me as part of my job search."
    },
    "/send-money": {
        destination:
            "https://chrisbenti.notion.site/Send-Money-cdf683da5d0b4607aa53ad9119f3fc9c",
        description: "Ways to send me money"
    }
};

type IIFramePages = {
    [url: string]: { destination: string; description: string };
};
export const IFramePages: IIFramePages = {
    "/cal": {
        destination:
            "https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=Y2hyaXMuYmVudGl2ZW5nYUBnbWFpbC5jb20&amp;src=OHRpczk1bW5rcGY2N2E4c2d0djdhZmJzaXM0ajhwdXZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2hyaXNiZW50aUBzdHJpcGUuY29t&amp;color=%234285F4&amp;color=%234285F4&amp;color=%234285F4&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK",
        description:
            "Ever wanted to see my calendar? Well, this at least lets you see the busy parts of it."
    }
};
