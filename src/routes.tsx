import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";
import { ResumePage } from "./pages/ResumePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { SendMoney } from "./pages/SendMoney";
import { LinksPage } from "./pages/Links";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" },
    "/black": { component: <BlackPage />, title: "Black Page" },
    "/sparrow": { component: <SparrowPage />, title: "JACK SPARROW" },
    "/resume": {
        component: <ResumePage />,
        title: "Resume | Chris Bentivenga"
    },
    "/ls": {
        component: <ResourcesPage />,
        title: "Available Resources | Chris Bentivenga"
    },
    "/links": {
        component: <LinksPage />,
        title: "Links | Chris Bentivenga"
    }
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ",
    "/how-it-works":
        "https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing",
    "/drop": "https://www.dropbox.com/request/N24zVQFjrYVEGzYLQw2B",
    "/meet": "https://calendly.com/chrisbenti",
    "/find-time": "https://calendly.com/chrisbenti",
    "/headshot": "/headshot.png",
    "/linkedin": "https://www.linkedin.com/in/chrisbenti/",
    "/intro":
        "https://docs.google.com/document/d/1OtgIkY-jbDCSHzjHS6JXMUsjbMYQFZ2xQM0EXP0N6bw",
    "/send-money":
        "https://chrisbenti.notion.site/Send-Money-cdf683da5d0b4607aa53ad9119f3fc9c"
};

export const IFramePages = {
    "/cal": "https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=Y2hyaXMuYmVudGl2ZW5nYUBnbWFpbC5jb20&amp;src=OHRpczk1bW5rcGY2N2E4c2d0djdhZmJzaXM0ajhwdXZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2hyaXNiZW50aUBzdHJpcGUuY29t&amp;color=%234285F4&amp;color=%234285F4&amp;color=%234285F4&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK"
};
