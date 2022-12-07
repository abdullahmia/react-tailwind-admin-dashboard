import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBarProgress from "react-topbar-progress-indicator";
import { routes } from "./routes/routes";

TopBarProgress.config({
  barColors: {
    "0": "#000",
    "1.0": "#fff"
  },
  shadowBlur: 5
});

const App = () => {
  const publicRoutes = routes.filter((route) => route.role.includes('*'));
  const privateRutes = routes.filter((route) => route.role.includes('user'));
  return (
    <div>

      <Suspense fallback={<TopBarProgress />}>
        <Routes>
          {
            publicRoutes?.map((route, key) => (
              <Route key={key} path={route.path} element={<route.element />} />
            ))
          }
          {
            privateRutes?.map((route, key) => (
              <Route key={key} path={route.path} element={<route.element />} />
            ))
          }
        </Routes>
      </Suspense>

    </div>
  )
}

export default App;