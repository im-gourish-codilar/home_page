// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './FeaturedProducts.style';
import SliderCard from 'Component/SliderCard';

export class FeaturedProducts extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };
    featuredslider(){
        const v = [1,2,3,4,5,6,7,8]
        return(
            <>{
                v.map((k,v)=>{
                    return(
                        <SliderCard key={k}/>
                    )
                })
            }
            </>
        )
    }
    render() {
        return (
            <>
                <div block="feature" elem="lable">
                    <span block="lable" elem="txt">
                        FeaturedProducts
                    </span>
                </div>
                <div block="FeaturedProducts">
                    { this.featuredslider()}
                </div>
            </>
        );
    }
}

export default FeaturedProducts;
