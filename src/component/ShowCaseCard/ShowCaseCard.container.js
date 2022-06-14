// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ShowCaseCard from './ShowCaseCard.component';

class ShowCaseCardContainer extends PureComponent {
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
            <ShowCaseCard
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default ShowCaseCardContainer;
