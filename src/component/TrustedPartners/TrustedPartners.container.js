// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import TrustedPartners from './TrustedPartners.component';

class TrustedPartnersContainer extends PureComponent {
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
            <TrustedPartners
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default TrustedPartnersContainer;
