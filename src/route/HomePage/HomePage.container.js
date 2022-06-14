/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { connect } from 'react-redux';

import Footer from 'Component/Footer';
import InstallPrompt from 'Component/InstallPrompt';
import { changeNavigationState } from 'Store/Navigation/Navigation.action';
import { TOP_NAVIGATION_TYPE } from 'Store/Navigation/Navigation.reducer';

/*Overriten file */

import { HomePageContainer as SourceHomePageContainer } from 'SourceRoute/HomePage/HomePage.container';

/* My Components */

import HomePageUnregistered from 'Component/HomePageUnregistered';


/* styles */

import './HomePage.style';


/** @namespace Route/HomePage/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    pageIdentifiers: state.ConfigReducer.cms_home_page
});

/** @namespace Route/HomePage/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    changeHeaderState: (state) => dispatch(changeNavigationState(TOP_NAVIGATION_TYPE, state))
});

/** @namespace Route/HomePage/Container */


export class HomePageContainer extends SourceHomePageContainer {

    render() {
        return (
            <div block="HomePage">
                <InstallPrompt />
                <HomePageUnregistered/>
                {/* <CmsPage {...this.containerProps()} /> */}
                <Footer isVisibleOnMobile />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
