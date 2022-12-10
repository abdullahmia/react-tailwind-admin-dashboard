import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { routes } from "./routes/routes";


const App = () => {
  const publicRoutes = routes.filter((route) => route.role.includes('*'));
  return (
    <div>
      <Routes>
        {
          publicRoutes?.map((route, key) => (
            <Route key={key} path={route.path} element={<route.element />} />
          ))
        }

      </Routes>

      <Main />
    </div>
  )
}

export default App;