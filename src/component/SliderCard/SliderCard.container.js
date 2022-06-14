// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import SliderCard from './SliderCard.component';

class SliderCardContainer extends PureComponent {
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
            <SliderCard
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default SliderCardContainer;
