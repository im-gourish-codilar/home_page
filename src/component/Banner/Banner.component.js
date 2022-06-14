// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './Banner.style';
import bannerImg from 'src/util/media/HomePageUnregisterd/HeroBanner.png';
export class Banner extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="Banner" >
                <div block="BannerimgContainer">
                    <span block="BannerSpan">
                        <img block="BannerImg"
                            src={bannerImg || ''}
                            alt={ bannerImg }
                            loading="lazy" />
                    </span>
                </div>
            </div>
        );
    }
}

export default Banner;
