import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";
import { ResumePage } from "./pages/ResumePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { Calendar } from "./pages/Calendar";
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
    "/cal": {
        component: <Calendar />,
        title: "Calendar | Chris Bentivenga"
    },
    "/send-money": {
        component: <SendMoney />,
        title: "Send Money | Chris Bentivenga"
    },
    "/links": {
        component: <LinksPage />,
        title: "Links | Chris Bentivenga"
    }
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ",
    "/zoom":
        "https://us04web.zoom.us/j/4894814721?pwd=T05md1JJaUFGNG9oZ09vRHJ3RlQ5QT09",
    "/how-it-works":
        "https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing",
    "/drop": "https://www.dropbox.com/request/N24zVQFjrYVEGzYLQw2B",
    "/find-time": "https://fantastical.app/chrisbenti/30min/",
    "/30min": "https://fantastical.app/chrisbenti/30min/",
    "/60min": "https://fantastical.app/chrisbenti/60min",
    "/1hour": "https://fantastical.app/chrisbenti/60min",
    "/headshot": "/headshot.png",
    "/linkedin": "https://www.linkedin.com/in/chrisbenti/"
};
