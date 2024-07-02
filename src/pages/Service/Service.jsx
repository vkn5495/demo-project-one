import React, { useContext, useEffect, useRef } from 'react'
import './Service.css'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import { servicesDoc } from '../../data/service/ServiceDetails';
import Slider from 'react-slick'
import SliderCom from '../../components/SliderCom/SliderCom';
import { GrNext, GrPrevious } from 'react-icons/gr';

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="contral-btn" onClick={onClick}>
            <button className="next">
                <i><GrNext /></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="contral-btn" onClick={onClick}>
            <button className="prev">
                <i><GrPrevious /></i>
            </button>
        </div>
    )
}

const ComOne = (props) => {
    const { item, sub } = props
    return (
        <div className="com_one">
            <div className="com_one_content des_style">
                <div className={`${sub ? "sub_title_style_two" : "title_style"}`}>{item?.heading}</div>
                <div className="des_style">
                    {
                        item?.des?.map((product, id) => {
                            return (
                                <li key={id} className="des_style_box_disc">{product}</li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
const ComTwo = (props) => {
    const { item, main } = props
    return (
        <div className="com_one">
            <div className="com_one_content">
                {
                    (item?.name || item?.heading) ?
                        null
                        :
                        <>
                            {
                                main?.materials &&
                                <div className="title_style">{main?.name} Materials:</div>
                            }
                            {
                                main?.type &&
                                <div className="title_style">{main?.name} Types :</div>
                            }
                            {
                                main?.treatment &&
                                <div className="title_style">{main?.name} Treatment :</div>
                            }
                            <div className="des_style">
                                {
                                    item?.map((product, i) => {
                                        return (
                                            <div key={i} className="des_style_box" >
                                                {
                                                    product?.heading &&
                                                    <li className="sub_title_style">{i + 1}. {product?.heading}</li>
                                                }

                                                {
                                                    Array.isArray(product?.des) ?
                                                        product?.des?.map((u, ix) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        product?.des?.length > 2 ?
                                                                            <li key={ix} className="des_style_box_disc">{u}</li>
                                                                            :
                                                                            <div key={ix} className="normal_text">{u}</div>
                                                                    }
                                                                </>
                                                            )
                                                        }) :
                                                        <div className="des_style_box_normal">{product?.des}</div>
                                                }
                                                {
                                                    product?.sub?.map((u, ix) => {
                                                        return (
                                                            <div key={ix} className="des_style">
                                                                <ComOne item={u} sub />
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    )

}
const ComThree = (props) => {
    const { item, main, purpose } = props
    return (
        <div className="com_three">
            <div className="com_three_content">
                {purpose ? <div className="title_style">{main?.name} Purpose:</div>
                    : <div className="title_style">{main?.name} Procedure:</div>}
                <div className="des_style">
                    {
                        item?.map((product, id) => {
                            return (
                                <React.Fragment key={id}>
                                    {product?.heading ?
                                        <ComFour item={product} main={main} /> :
                                        <li key={id} className="des_style_box_disc">{product}</li>}
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
const ComFour = (props) => {
    const { item, main } = props
    return (
        <div className="com_Four">
            <div className="com_Four_content">
                <div className="des_style_box" >
                    <li className="sub_title_style">{item?.heading}</li>
                    <div className="des_style_box_normal">
                        {
                            item?.des?.map((product, id) => {
                                return (
                                    <li key={id} className="des_style_box_disc">{product}</li>
                                )
                            })
                        }
                        <div className="subdes">{item?.subDes}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
const ComFive = (props) => {
    const { item } = props
    return (
        <div className="com_five">
            <div className="com_five_content">
                <div className="title_style">{item?.heading}</div>
                {Array.isArray(item.des) ?
                    <>
                        {
                            item?.des?.map((product, i) => {
                                return (
                                    <li key={i} className="des_style_box_disc">{product}</li>
                                )
                            })
                        }
                    </>
                    : <div className="normal_text">{item?.des}</div>}

            </div>
        </div>
    )
}
const SubTitleCom = ({ subTitle, main }) => {
    const context = useContext(AppContext)
    return (
        <>
            {
                main?.title === "Dental treatment" ?
                    <>
                        <div className={`service_page_list_sub_title_name ${main?.subHead ? "" : "two_coloum"}`}>
                            {
                                subTitle?.slice(0, 7).map((u, i) => {
                                    return (
                                        <li className={`service_page_list_sub_title_name_box 
                                `}
                                            onClick={() => context.handleServiceDeatil(null, u)} key={i}>
                                            {/* <a href={`#${u?.img}`}>{u?.name}</a> */}
                                            {u?.name}{u?.subName}
                                        </li>
                                    )
                                })
                            }
                        </div>
                        <div className={`service_page_list_sub_title_name ${main?.subHead ? "" : "two_coloum"}`}>
                            {
                                subTitle?.slice(7).map((u, i) => {
                                    return (
                                        <li className={`service_page_list_sub_title_name_box 
                                `}
                                            onClick={() => context.handleServiceDeatil(null, u)} key={i}>
                                            {/* <a href={`#${u?.img}`}>{u?.name}</a> */}
                                            {u?.name}{u?.subName}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </> :
                    <>
                        <div className={`service_page_list_sub_title_name ${main?.subHead ? "" : "two_coloum"}`}>
                            {
                                subTitle?.map((u, i) => {
                                    return (
                                        <li className={`service_page_list_sub_title_name_box 
                                `}
                                            onClick={() => context.handleServiceDeatil(null, u)} key={i}>
                                            {/* <a href={`#${u?.img}`}>{u?.name}</a> */}
                                            {u?.name}{u?.subName}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </>
            }
        </>

    )
}

const SubTitleComTwo = ({ subTitle }) => {
    const context = useContext(AppContext)
    // let sliderRef1 = useRef(null);

    // useEffect(() => {
    //     const findIndextwo = context.serviceMainHead?.subHead ? context.serviceMainHead?.subHead?.subTitle : context.serviceMainHead?.subTitle
    //     const index = findIndextwo.findIndex(child => child.name === context.servicePerDetail?.name);
    //     if (index !== -1 && sliderRef1.current) {
    //         sliderRef1.current.slickGoTo(index);
    //     }
    // }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // className: "center",
        // centerMode: true,
    };
    // console.log(sliderRef1)
    console.log(subTitle.length)
    return (
        <div className="service_page_list_sub_title_two">
            <>
                {
                    subTitle?.length > 1 ?
                        <>
                            {
                                <Slider {...settings} >
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
                        </>
                        :
                        <>
                            {
                                subTitle?.map((u, i) => {
                                    return (
                                        <div className={`service_page_list_sub_title_two_box 
                                     ${context.servicePerDetail?.name === u?.name ? "active" : ""}`}
                                            style={{
                                                maxWidth: "16rem"
                                            }}
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

                        </>
                }
            </>
        </div>
    )
}

// const SubTitleCom = ({ subTitle }) => {
//     const context = useContext(AppContext)
//     return (
//         <div className="service_page_list_sub_title_name">
//             {
//                 subTitle?.map((u, i) => {
//                     return (
//                         <li className={`service_page_list_sub_title_name_box 
//                             ${context.servicePerDetail.name === u.name ? "active" : ""}
//                             `}
//                             onClick={() => context.handleServiceDeatil(null, u)} key={i}>{u?.name}</li>
//                     )
//                 })
//             }
//         </div>
//     )
// }

const Service = () => {
    const context = useContext(AppContext)
    const service = context.servicePerDetail



    return (
        <>
            <div className="service_page">
                <div className="service_page_content">
                    <div className='bg_design'>hi</div>

                    <div className="service_page_details">
                        <div className="service_page_list">

                            {
                                servicesDoc?.map((item, id) => {
                                    const child = (id === 0 ? "one" : id === 1 ? "two" : id === 2 ? "three" : "four")
                                    const setUp = () => (id === 1 || id === 4) ? item?.subHead[0]?.subTitle[0] : item?.subTitle[0]
                                    return (
                                        <div className="service_page_list_box" key={id}>
                                            <div className={`service_page_list_name ${context.serviceMainHead?.title === item?.title ? "active" : ""}`}
                                                onClick={() => context.handleServiceDeatil(item, null)}>{item?.title}</div>


                                            {/* <div className={`service_page_list_sub_title hello ${child} ${context.serviceMainHead?.title === item?.title ? "drop_down" : ""}`}>
                                                {
                                                    item?.subHead ?
                                                        <>
                                                            {
                                                                item?.subHead?.map((product, idx) => {
                                                                    return (
                                                                        <React.Fragment key={idx}>
                                                                            <div className="service_page_list_sub_head">{product?.name}</div>
                                                                            <SubTitleCom subTitle={product?.subTitle} />
                                                                        </React.Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </> :
                                                        <>
                                                            <SubTitleCom subTitle={item?.subTitle} />
                                                        </>
                                                }
                                            </div> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="service_page_des">

                            <div className="service_page_des_content">
                                <div className="service_page_des_title">{context.serviceMainHead?.title}</div>
                                <div className="service_page_des_content_details">

                                    <div className="first_col">
                                        {/* <div className='service_page_des_content_details_heading'>{context.servicePerDetail?.head?.heading}</div> */}
                                        <div className="service_page_des_content_details_des">
                                            <div>
                                                <div className="service_page_des_content_details_des_details">{context.serviceMainHead?.mainDes}</div>
                                                <div className="service_page_des_content_details_des_sub_details_two">
                                                    {
                                                        context.serviceMainHead?.mainSubDes?.map((item, id) => {
                                                            return (
                                                                <li className="box" key={id}>{item}</li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className={`service_page_des_content_details_des_sub_details ${context?.serviceMainHead?.subHead ? "flex" : ""}`}>
                                                {
                                                    context.serviceMainHead?.subHead ?
                                                        <>
                                                            {
                                                                context.serviceMainHead?.subHead?.map((product, idx) => {
                                                                    return (
                                                                        <div key={idx}>
                                                                            <div className="service_page_list_sub_head">{product?.name}</div>
                                                                            <SubTitleCom subTitle={product?.subTitle} main={context.serviceMainHead} />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                        :

                                                        <>
                                                            <SubTitleCom subTitle={context.serviceMainHead?.subTitle} main={context.serviceMainHead} />
                                                        </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="second_col">

                                        <div className="second_col_content">
                                            <img src={context.servicePerDetail?.img} alt="" />
                                            <div className="second_col_name">{context.servicePerDetail?.name}</div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="service_page_des_content_sub_details">
                                    <div className="service_page_des_content_sub_details_box">
                                        {
                                            service?.need &&
                                            <ComFive item={service?.need} />
                                        }
                                        {
                                            service?.reason &&
                                            (
                                                // service?.reason?.heading ? null :
                                                <ComOne item={service?.reason} />

                                            )
                                        }
                                        {
                                            service?.purpose &&
                                            <ComThree item={service?.purpose} main={service} purpose />
                                        }
                                        {
                                            service?.materials && (
                                                (service?.materials?.heading && service?.materials?.name) ?
                                                    null :
                                                    <ComTwo item={service?.materials} main={service} />
                                            )
                                        }
                                        {
                                            service?.type &&
                                            <ComTwo item={service?.type} main={service} />
                                        }
                                        {
                                            (service?.procedure) ?
                                                (service?.procedure?.name || service?.procedure?.heading || service?.procedure?.des) ?
                                                    null :
                                                    <ComThree item={service?.procedure} main={service} /> : null
                                        }
                                        {
                                            service?.treatment &&
                                            <ComTwo item={service?.treatment} main={service} />
                                        }
                                        {
                                            service?.post &&
                                            <ComOne item={service?.post} />
                                        }
                                    </div>
                                </div> */}
                                <div className="second_row">
                                    <div className="service_page_des_all_service">
                                        <div className="service_page_des_all_service_content">
                                            {
                                                context.serviceMainHead?.subHead ?
                                                    <>
                                                        {
                                                            context?.serviceMainHead?.subHead?.map((item, id) => {
                                                                return (
                                                                    <div key={id} className="service_page_des_all_service_content_sub_head">
                                                                        <div className="service_page_des_all_service_content_sub_head_name">{item?.name}</div>
                                                                        <SubTitleComTwo subTitle={item?.subTitle} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </> : <>
                                                        <SubTitleComTwo subTitle={context?.serviceMainHead?.subTitle} />
                                                    </>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
