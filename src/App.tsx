import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { publicRoutes } from './routers';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.addEventListener('beforeunload', () => setLoading(true));
        window.addEventListener('load', () => setLoading(false));

        return () => {
            window.removeEventListener('beforeunload', () => setLoading(true));
            window.removeEventListener('load', () => setLoading(false));
        };
    }, []);
    return loading ? (
        <div>loading....</div>
    ) : (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.component;
                        switch (route.layout) {
                            case null:
                                // return (
                                //     <Route key={route.path} path="/" element={<EmptyLayout />}>
                                //         <Route path={route.path} element={<Page />}></Route>
                                //     </Route>
                                // );
                                return (
                                    <Route
                                        key={route.path}
                                        path="/"
                                        element={<DefaultLayout isShowNavigation={route.isShowNavigation} />}
                                    >
                                        <Route path={route.path} element={<Page />}></Route>;
                                    </Route>
                                );
                            default:
                                return (
                                    <Route
                                        key={route.path}
                                        path="/"
                                        element={<DefaultLayout isShowNavigation={route.isShowNavigation} />}
                                    >
                                        <Route path={route.path} element={<Page />}></Route>;
                                    </Route>
                                );
                        }
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
