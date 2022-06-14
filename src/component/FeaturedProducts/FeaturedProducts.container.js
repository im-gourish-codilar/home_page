// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import FeaturedProducts from './FeaturedProducts.component';

class FeaturedProductsContainer extends PureComponent {
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
            <FeaturedProducts
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default FeaturedProductsContainer;
