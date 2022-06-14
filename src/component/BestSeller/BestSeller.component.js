// import PropTypes from 'prop-types';
import SliderCard from 'Component/SliderCard';
import { PureComponent } from 'react';


import './BestSeller.style';

export class BestSeller extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };


    BestcardSlider() {
        const v = [1,2,3,4,5,6,7,8]
        return (
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
            <div block="BestSeller" elem="Wrapper">
                <div block="bestsale" elem="lable">
                    <span block="lable" elem="txt">
                        {"Best Seller"}
                    </span>
                </div>
                <div block="bestSlider">
                    { /* TODO: Implement render method */}
                    {this.BestcardSlider()}
                </div>

            </div>
        );
    }
}

export default BestSeller;
