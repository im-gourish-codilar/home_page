// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './SliderCard.style';

import cardImg from 'src/util/media/HomePageUnregisterd/Image/Card.png'
import brandIcon from 'src/util/media/HomePageUnregisterd/icons/Brand.svg'
import like from "src/util/media/HomePageUnregisterd/icons/icFav.svg"
import checksvg from 'src/util/media/HomePageUnregisterd/icons/icAttribute.svg';

export class SliderCard extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };
    slidecardsRender() {
        return (
            <div className="f-card">
                <div className="f-card-top">
                    <div className="c-top">
                        <span className="c-lable">Best Seller</span>
                        <span block="c-fav1">
                            <img src={like} block="fav1Icon" />
                        </span>
                        <span block="c-fav2">
                            <img src={brandIcon} block="fav2Icon" />
                        </span>
                    </div>
                    <div className="f-card-img">
                        <span className="c-img">
                            <img src={cardImg} alt="img" />
                        </span>
                    </div>
                </div>
                <div className="f-card-bottom">
                    <div className="c-bottom">
                        <div className="c-content">
                            <span className="sku-txt">SKU : sku</span>
                            <span className="f-card-item-txt">
                                item-text product name carasdfasdf
                            </span>
                            <span className="item-by">item by</span>
                            <span block="quality-check">
                                {/* text followed by icon  */}
                                <span block="qualityCheck" elem="check-svg">
                                    <img src={checksvg} alt="check-svg" block="qualityCheck" elem="svg-holder" />
                                </span>
                                <span block="qualityCheck" elem="check-text">
                                    {"Photoperiod Flowering"}
                                </span>
                            </span>
                            <span block="quality-check">
                                {/* text followed by icon  */}
                                <span block="qualityCheck" elem="check-svg">
                                    <img src={checksvg} alt="check-svg" block="qualityCheck" elem="svg-holder" />
                                </span>
                                <span block="qualityCheck" elem="check-text">
                                    {"Feminised"}
                                </span>
                            </span>
                        </div>
                        <div className="price-stock">
                            <span className="show-price">
                                <span className="price-from">From</span>
                                <span className="actual-price">$9.90</span>
                            </span>
                            <span className="hide-price">Login to view price</span>
                            <span className="stock in-stk out-stk">{"Out of Stock"}</span>
                        </div>
                        <div className="f-s-btn">
                            <input
                                type="button"
                                defaultValue="View Product"
                                className="fs-button"
                            />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    render() {
        return (
            <div block="SliderCard">
                {this.slidecardsRender()}
            </div>
        );
    }
}

export default SliderCard;
