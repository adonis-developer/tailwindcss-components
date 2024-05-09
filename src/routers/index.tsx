import { lazy } from 'react';
import Modal from '../modules/modal';
import DropdownScreen from '../modules/dropdown';
// const PriceGasOfDay = lazy(() => import('../pages/price-gas-date'));

const publicRoutes: Array<{
    path: string;
    exact?: boolean;
    component: any;
    isShowNavigation?: boolean;
    layout?: string | null;
}> = [
    { path: '/modal', component: Modal },
    { path: '/dropdown', component: DropdownScreen },
];

export { publicRoutes };
