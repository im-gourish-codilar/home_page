// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import PartnerWithUs from './PartnerWithUs.component';

class PartnerWithUsContainer extends PureComponent {
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
            <PartnerWithUs
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default PartnerWithUsContainer;
