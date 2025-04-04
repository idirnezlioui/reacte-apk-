import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Voir les Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Revenus",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Dépences",
        icon: expenses,
        link: "/dashboard",
    },
]