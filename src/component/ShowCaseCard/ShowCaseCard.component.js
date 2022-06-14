// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import svg1 from '../../util/media/HomePageUnregisterd/icons/icPartners.svg';
import svg2 from '../../util/media/HomePageUnregisterd/icons/icShipping.svg';
import svg3 from '../../util/media/HomePageUnregisterd/icons/icProduct.svg';
import svg4 from '../../util/media/HomePageUnregisterd/icons/icCustomerService.svg';

import './ShowCaseCard.style';

export class ShowCaseCard extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };
    cardRender() {
        const showcasedata = [
            {
                svg: svg1,
                txt: "Trusted Global Partner"
            },
            {
                svg: svg2,
                txt: "Swift & Discreet Shipping"
            },
            {
                svg: svg3,
                txt: "Large Selection of Products"
            },
            {
                svg: svg4,
                txt: "Exceptional Customer Service"
            }
        ];
        return (
            <>
                <div block="showcase" elem="context" >
                    {
                        showcasedata.map((card) => {
                            return (
                                <div block="show" elem="cards">
                                    <span block="icon-holder">
                                        <img block="icon-svg" src={card.svg} />
                                    </span>
                                    <span block="txt-holder">{card.txt}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </>
        );
    }

    render() {
        return (
            <>
                { /* TODO: Implement render method */}
                {this.cardRender()}
            </>
        );
    }
}

export default ShowCaseCard;