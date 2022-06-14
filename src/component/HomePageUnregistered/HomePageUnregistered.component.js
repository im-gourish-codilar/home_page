// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Banner from 'Component/Banner';
import TrustedPartners from 'Component/TrustedPartners';
import CategoryCard from 'Component/CategoryCard';
import FeaturedProducts from 'Component/FeaturedProducts';
import PartnerWithUs from 'Component/PartnerWithUs';
import FromBlog from 'Component/FromBlog';

import './HomePageUnregistered.style';
import BestSeller from 'Component/BestSeller';

export class HomePageUnregistered extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="HomePageUnregistered">
                { /* TODO: Implement render method */}
                <Banner />
                <TrustedPartners />
                <CategoryCard />
                <FeaturedProducts />
                <PartnerWithUs />
                <BestSeller/>
                <FromBlog/>
            </div>
        );
    }
}

export default HomePageUnregistered;
