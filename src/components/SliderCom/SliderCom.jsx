import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context';
import Slider from 'react-slick';

const SliderCom = ({ subTitle }) => {

    const context = useContext(AppContext)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };

    return (
        <div className="service_page_list_sub_title_two">
            {
                <Slider {...settings}>
                    {
                        subTitle?.map((u, i) => {
                            return (
                                <div className={`service_page_list_sub_title_two_box 
                                     ${context.servicePerDetail?.name === u?.name ? "active" : ""}`}
                                    onClick={() => context.handleServiceDeatil(null, u)} key={i}>
                                    <div className="service_page_list_sub_title_two_img">
                                        <img src={u?.img}
                                            className={`${context.servicePerDetail?.name === u?.name ? "active" : ""}`} alt="" />
                                    </div>
                                    <div className={`service_page_list_sub_title_two_box_content 
                                         ${context.servicePerDetail?.name === u?.name ? "active" : ""}`}>
                                        <div className="service_page_list_sub_title_two_name"
                                        >{u?.name}</div>
                                        <div className={`service_page_list_sub_title_two_des 
                                             `}>
                                            {
                                                u?.mainDes?.map((item, id) => {
                                                    return (
                                                        <div key={id} className="service_page_list_sub_title_two_des_box">{item}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            }
        </div>
    )
}

export default SliderCom
