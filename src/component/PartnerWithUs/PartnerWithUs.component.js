// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './PartnerWithUs.style';

import B2 from 'src/util/media/HomePageUnregisterd/Image/B2.png'
import svg1 from 'src/util/media/HomePageUnregisterd/icons/icParnter.svg';
import svg2 from 'src/util/media/HomePageUnregisterd/icons/icLeading.svg';
import svg3 from 'src/util/media/HomePageUnregisterd/icons/icCustServ.svg';
export class PartnerWithUs extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };
    partnerContent() {
        return (
            <>
                <div block="partnerUsWrapper">
                    <div block="top-content">
                        <div block="PartnerUs" elem="Heading">
                            <span block="Heading" elem="text">
                                {"Why Partner with Us?"}
                            </span>
                        </div>
                        <div block="PartnerUs" elem="desc">
                            <p block="para">
                                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."}
                            </p>
                            <p block="para">
                                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."}
                            </p>
                        </div>
                        <div block="openAccTgr">
                            <input type="button" value={"Open A Tiger One Account"} block="openAcc" elem="btn" />
                        </div>
                        <div block="partnerUsimg">
                            <span block="img-cnt">
                                <img src={B2} alt="PartnersUsImg" />
                            </span>
                        </div>
                    </div>
                </div>
                <div block="cards-us">
                    <div block="cards-wrapper">
                        <div block="card">
                            <span block="card" elem="icon-holder">
                                <img src={svg1} alt="icon" block="icon-img" />
                            </span>
                            <span block="card" elem="card-txt">
                                {"Trusted Global Partner"}
                            </span>
                        </div>
                        <div block="card">
                            <span block="card" elem="icon-holder">
                                <img src={svg2} alt="icon" block="icon-img" />
                            </span>
                            <span block="card" elem="card-txt">
                                {"Leading Brands Stocklists"}
                            </span>
                        </div>
                        <div block="card">
                            <span block="card" elem="icon-holder">
                                <img src={svg3} alt="icon" block="icon-img" />
                            </span>
                            <span block="card" elem="card-txt">
                                {"Unrivalled Customer Care"}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div block="PartnerWithUs">
                { /* TODO: Implement render method */}
                {this.partnerContent()}
            </div>
        );
    }
}

export default PartnerWithUs;
