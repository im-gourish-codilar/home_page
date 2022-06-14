// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Banner from './Banner.component';

class BannerContainer extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    containerFunctions = {
        // getData: this.getData.bind(this)
    };

    containerProps() {
        // isDisabled: this._getIsDisabled()
    };

    render() {
        return (
            <Banner
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default BannerContainer;
