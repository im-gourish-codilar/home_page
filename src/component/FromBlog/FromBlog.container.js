// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import FromBlog from './FromBlog.component';

class FromBlogContainer extends PureComponent {
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
            <FromBlog
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default FromBlogContainer;
