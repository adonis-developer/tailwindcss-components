import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
// import AppLoading from '~/core/components/common/app-loading';
// import HeaderUI from '../components/header';
// import Navigation from '../components/navigation';
// import FooterUI from '../components/footer';
const DefaultLayout = ({ isShowNavigation = true }) => {
    return (
        <>
            {/* <HeaderUI /> */}

            <div className="mt-[120px]">
                {/* {isShowNavigation && <Navigation />} */}
                <Suspense fallback={<div>loading....</div>}>
                    <Outlet></Outlet>
                </Suspense>
            </div>
            {/* <FooterUI /> */}
        </>
    );
};

export default DefaultLayout;
