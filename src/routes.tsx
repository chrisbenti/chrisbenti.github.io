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
        destination: "https://cal.com/chrisbenti",
        description: "Meeting link, make a meeting with me."
    },
    "/find-time": {
        destination: "https://cal.com/chrisbenti",
        description: "Meeting link, make a meeting with me."
    },
    "/headshot": { destination: "/headshot.png", description: "My headshot." },
    "/linkedin": {
        destination: "https://www.linkedin.com/in/chrisbenti/",
        description: "My LinkedIn"
    },
    "/send-money": {
        destination: "https://notes.chrisbenti.com/send-money",
        description: "Ways to send me money"
    },
    "/resume-content": {
        destination: "https://resume.chrisbenti.com",
        description: "backcompat of old resume link"
    },
    "/resume-content/*": {
        destination: "https://resume.chrisbenti.com",
        description: "backcompat of old resume link"
    },
    "/calendly": {
        destination: "https://calendly.com/chrisbenti",
        description: "Calendly link"
    },
    "/cal": {
        destination: "https://cal.com/chrisbenti",
        description: "Meeting link, make a meeting with me."
    },
    "/cal2": {
        destination: "https://calendly.com/chrisbenti",
        description: "Calendly link"
    },
    "/cv": {
        destination: "https://notes.chrisbenti.com/cv",
        description: "full work history in CV format"
    },
    "/umikot": {
        destination: "https://notes.chrisbenti.com/umikot",
        description: "umikot instructions to share with people I give them too."
    },
    "/discord": {
        destination: "discord://discord.com/users/361710258915246081",
        description: "My discord profile"
    }
};

type IIFramePages = {
    [url: string]: { destination: string; description: string };
};
export const IFramePages: IIFramePages = {
    "/see-cal": {
        destination:
            "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&mode=WEEK&title=Chris's%20Calendar&showPrint=0&showTabs=0&showCalendars=0&src=Y2hyaXMuYmVudGl2ZW5nYUBnbWFpbC5jb20&src=NzlrcWtucmQydnFubjlibG9tNTI5c3R2MG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWM3NjUxZmI2ZTI2MzIwODM0YjAwODQyNmM3YjlhZTk2NWE2ZDY4YjQ2YzUxYmUzZmU5YTMxMTVkMWYyMDAwM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=OHRpczk1bW5rcGY2N2E4c2d0djdhZmJzaXM0ajhwdXZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=M244dmRrbzFqYzEyanRocW01dnRyOGpta3JocjN0NThAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19tdTdqanFyZGFpazZhbjlwZ3VuODc0bmRoY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2hyaXNiZW50aXZlbmdhQHNxdWFyZXVwLmNvbQ&color=%230B8043&color=%2333B679&color=%23009688&color=%236326c5&color=%23009688&color=%23F09300&color=%23616161",
        description: "Google Calendar iframe"
    }
};
