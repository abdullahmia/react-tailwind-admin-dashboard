import { lazy } from 'react';

// import public page
const Login = lazy(() => import('../pages/auth/Login'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));

// import private page
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Permissions = lazy(() => import('../pages/Permissions'));



export const routes = [
    {
        path: '/',
        element: Dashboard,
        role: ['user']
    },
    {
        path: '/permissions',
        element: Permissions,
        role: ['user']
    },
    {
        path: "/login",
        element: Login,
        role: ['*']
    },
    {
        path: "/forgot-password",
        element: ForgotPassword,
        role: ['*']
    }
]