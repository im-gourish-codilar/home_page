// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Slider from "react-slick";

import './CategoryCard.style';

import Images from '../../util/media/HomePageUnregisterd/images';
export class CategoryCard extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    CategoryRender() {
        return (

            <>
                {
                    Images.map((val) => {
                        return (
                            <div block="category"
                                elem="cart-card">
                                <div block="category"
                                    elem="card-holder">
                                    <div block="card-img">
                                        <img block='cardImg' src={val.src} alt="Cat1" />
                                    </div>
                                    <div block="card-lable">
                                        <span block="c-card-lable">
                                            {val.txt}
                                        </span>
                                    </div>
                                    <div block="card-desc">
                                        <span block="c-card-desc">
                                            {val.desc}
                                        </span>
                                    </div>
                                    <div block="card-btn">
                                        <input block="card-button" type="button" value="Shop Now" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    render() {

        return (
            <>
                <div block="CategoryCard">
                    <div block="category-section">
                        <div block="category-container">
                            <div block="category-lable">
                                <span block="our-category">
                                    Our Category
                                </span>
                            </div>
                            <div block="category"
                                elem="grid-container">
                                <div block="category-grid">

                                    {this.CategoryRender()}

                                </div>
                                {/* <div block="category-slider">
                                    
                                    {this.CategoryRender()}
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='Desktop '>{this.renderDesktopSlider()}</div>
                <div className='MObile'>{this.renderMobileSlider()}</div> */}
            </>
        );
    }
}

export default CategoryCard;
