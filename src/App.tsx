import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ReactRoutes, RedirectRoutes } from "./routes";
import { RedirectPage } from "./pages/RedirectPage";
import { IndexPage } from "./pages/IndexPage";
import { Helmet } from "react-helmet";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
    return (
        <Router basename="/">
            <Routes>
                {[
                    Object.entries(RedirectRoutes).map(([url, location]) => (
                        <Route
                            path={url}
                            key={url}
                            element={<RedirectPage href={location} />}
                        ></Route>
                    )),
                    Object.entries(ReactRoutes).map(([url, details]) => (
                        <Route
                            key={url}
                            path={url}
                            element={
                                <>
                                    <Helmet>
                                        <title>{details.title}</title>
                                    </Helmet>
                                    {details.component}
                                </>
                            }
                        ></Route>
                    )),
                    <Route
                        path="/"
                        key="/"
                        element={
                            <>
                                <Helmet>
                                    <title>Chris Bentivenga</title>
                                </Helmet>
                                <IndexPage />
                            </>
                        }
                    ></Route>,
                    <Route key="notfound" element={<NotFoundPage />}></Route>
                ].flat()}
            </Routes>
        </Router>
    );
}

export default App;
