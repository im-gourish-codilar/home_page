// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import BestSeller from './BestSeller.component';

class BestSellerContainer extends PureComponent {
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
            <BestSeller
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default BestSellerContainer;
