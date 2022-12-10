import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBarProgress from "react-topbar-progress-indicator";
import Header from '../components/ui/Header';
import Sidebar from '../components/ui/Sidebar';
import { routes } from "../routes/routes";


TopBarProgress.config({
    barColors: {
        "0": "#000",
        "1.0": "#fff"
    },
    shadowBlur: 5
});
const Main = () => {
    const user = true;
    const privateRutes = routes.filter((route) => route.role.includes('user'));
    return (
        <div>
            {
                user && <>
                    <Header />
                    <div className="flex overflow-hidden pt-16">
                        <Sidebar />
                        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                            <main>
                                <div className="pt-6 px-4">
                                    <Suspense fallback={<TopBarProgress />}>
                                        <Routes>
                                            {
                                                privateRutes?.map((route, key) => (
                                                    <Route key={key} path={route.path}>
                                                        {
                                                            route.children ? (
                                                                route?.children?.map((subRoute, i) => (
                                                                    subRoute.path === '/' ? (
                                                                        <Route key={i} index={true} element={<subRoute.element />} />
                                                                    ) : (
                                                                        <Route key={i} index={false} path={subRoute.path} element={<subRoute.element />} />
                                                                    )
                                                                ))
                                                            ) : (
                                                                <Route path={route.path} element={<route.element />} />
                                                            )
                                                        }
                                                    </Route>
                                                ))
                                            }
                                        </Routes>
                                    </Suspense>
                                </div>
                            </main>
                        </div>
                    </div>
                </>
            }


        </div>
    )
}

export default Main