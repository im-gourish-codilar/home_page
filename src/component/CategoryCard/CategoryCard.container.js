// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CategoryCard from './CategoryCard.component';

class CategoryCardContainer extends PureComponent {
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
            <CategoryCard
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default CategoryCardContainer;
