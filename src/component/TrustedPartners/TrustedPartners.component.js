// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ShowCaseCard from 'Component/ShowCaseCard';

import './TrustedPartners.style';

export class TrustedPartners extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="TrustedPartners">
                <div block="Showcase"
                elem="section">
                    <ShowCaseCard/>
                    {/* showcase-Cards goes here  */}
                </div>
            </div>
        );
    }
}

export default TrustedPartners;
