// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import HomePageUnregistered from './HomePageUnregistered.component';

class HomePageUnregisteredContainer extends PureComponent {
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
            <HomePageUnregistered
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default HomePageUnregisteredContainer;
