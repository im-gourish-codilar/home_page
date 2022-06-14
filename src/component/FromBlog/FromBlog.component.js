// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import B1 from 'src/util/media/HomePageUnregisterd/Image/Blog1.png'
import B2 from 'src/util/media/HomePageUnregisterd/Image/Blog2.png'
import B3 from 'src/util/media/HomePageUnregisterd/Image/Blog3.png'


import './FromBlog.style';

export class FromBlog extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    blogCardRender() {
        const imgArr = [
            {
                img: B1,
                txt: "Top 10 Feminised Cannabis Seeds on TigerOne"
            }, 
            {
                img:B2,
                txt:"Top 10 Feminised Cannabis Seeds on TigerOne"
            },
            {
                img:B3,
                txt:"Brand New Strain - KUSH MINTZ™ from Barney’s Farm"
            }
            
        ];

        return (
            <div block="Blog" elem="Wrapper">
                {
                    imgArr.map((val, k) => {
                        return (
                            <div block="innerWrapper">
                                <div block='BlogCard' elem="pic-cnt">
                                    <span block="blogImg" elem="holder">
                                        <img src={val.img} alt={val + k} />
                                    </span>
                                </div>
                                <div block="BlogCard" elem="b-content">
                                    <div block="content-read">
                                        <span block="blog-txt" elem="date">
                                            {"Feburary 17, 2022"}
                                        </span>
                                        <span block="blog-txt" elem="headline">
                                            {val.txt}
                                        </span>
                                        <span block="blog-txt" elem="desc">
                                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore…"}
                                        </span>
                                    </div>
                                    <div block="moreBlog">
                                        <span block="blogRead">
                                            <a  block="more" href='#'>
                                                {"Read More"}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <>
                <div block="BlogCnt" elem="lable">
                    <span block="lable" elem="txt">
                        {"From The Blog"}
                    </span>
                </div>
                <div block="FromBlog">
                    {this.blogCardRender()}
                    <div block="showMore">
                       <input type="button" block="show-btn" value={"View All"}/>
                    </div>
                </div>
            </>
        );
    }
}

export default FromBlog;
