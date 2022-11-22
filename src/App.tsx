import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ReactRoutes, RedirectRoutes, IFramePages } from "./routes";
import { RedirectPage } from "./pages/RedirectPage";
import { IndexPage } from "./pages/IndexPage";
import { Helmet } from "react-helmet";
import { NotFoundPage } from "./pages/NotFoundPage";
import { IFramePage } from "./components/iFramePage";

function App() {
    return (
        <Router>
            <Routes>
                {[
                    Object.entries(RedirectRoutes).map(([url, details]) => (
                        <Route
                            path={url}
                            key={url}
                            element={
                                <RedirectPage href={details.destination} />
                            }
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
                    Object.entries(IFramePages).map(([url, details]) => (
                        <Route
                            key={url}
                            path={url}
                            element={
                                <>
                                    <IFramePage url={details.destination} />
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
