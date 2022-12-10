import { lazy } from 'react';

// import public page
const Login = lazy(() => import('../pages/auth/Login'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));

// import private page
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Permissions = lazy(() => import('../pages/Permissions'));
const Products = lazy(() => import('../pages/products/Products'));
const NewProduct = lazy(() => import('../pages/products/NewProduct'));
const Category = lazy(() => import('../pages/category/Categories'));
const NewCategory = lazy(() => import('../pages/category/NewCategory'));
const Orders = lazy(() => import('../pages/order/OrdersList'));
const OrderDetail = lazy(() => import('../pages/order/OrderDetail'));

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
        path: '/product',
        role: ['user'],
        children: [
            {
                path: '',
                element: Products
            },
            {
                path: 'new',
                element: NewProduct
            },
        ]
    },
    {
        path: '/category',
        role: ['user'],
        children: [
            {
                path: '',
                element: Category
            },
            {
                path: 'new',
                element: NewCategory
            },
        ]
    },
    {
        path: '/order',
        role: ['user'],
        children: [
            {
                path: '/',
                element: Orders
            },
            {
                path: ':id',
                element: OrderDetail
            }
        ]
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