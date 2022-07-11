import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ReactRoutes, RedirectRoutes } from "./routes";
import { RedirectPage } from "./pages/RedirectPage";
import { IndexPage } from "./pages/IndexPage";
import { Helmet } from "react-helmet";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
    return (
        <Router basename="/">
            <Switch>
                {[
                    Object.entries(RedirectRoutes).map(([url, location]) => (
                        <Route path={url} key={url}>
                            <RedirectPage href={location} />
                        </Route>
                    )),
                    Object.entries(ReactRoutes).map(([url, details]) => (
                        <Route key={url} path={url}>
                            <Helmet>
                                <title>{details.title}</title>
                            </Helmet>
                            {details.component}
                        </Route>
                    )),
                    <Route exact path="/">
                        <Helmet>
                            <title>Chris Bentivenga</title>
                        </Helmet>
                        <IndexPage />
                    </Route>,
                    <Route>
                        <NotFoundPage />
                    </Route>
                ].flat()}
            </Switch>
        </Router>
    );
}

export default App;
