import React, { useContext, useState } from 'react'
import './header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Logo from '../images/53f86fd3-d9f2-44d6-8f6b-3b4679ad0d00.jpg'
import vedio from '../images/videoplayback.mp4_1719339727358 (online-video-cutter.com).mp4'
import image from '../images/53f86fd3-d9f2-44d6-8f6b-3b4679ad0d00-removebg.png'
import { useEffect } from 'react';
import { useRef } from 'react';
import india from '../images/flag/in.png'
import russia from '../images/flag/ru.png'
import france from '../images/flag/fr.png'
import china from '../images/flag/cn.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaWhatsappSquare } from 'react-icons/fa';
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { servicesDoc } from '../data/service/ServiceDetails';
import { AppContext } from '../Context/Context';

import { FaCog } from 'react-icons/fa'
import { Doctors } from '../data/doctor/doctor';



const ThemeColor = () => {
    const themes = [
        {
            id: 1,
            color: '#6856ae',
            secondColor: '#a69acf'
        },

        {
            id: 2,
            color: '#f72b1d',
            secondColor: '#ea6866'
        },

        {
            id: 3,
            color: '#8a2ce2',
            secondColor: '#af75ed'
        },

        {
            id: 4,
            color: '#4169e1',
            secondColor: '#98a8ed'
        },

        {
            id: 5,
            color: '#d9a520',
            secondColor: '#debc36'
        },

        {
            id: 6,
            color: '#ef6293',
            secondColor: '#F38FB2'
        },

        {
            id: 7,
            color: '#99cd32',
            secondColor: '#badd76'
        },

        {
            id: 8,
            color: '#fa5a0f',
            secondColor: '#fc8a5d'
        },

        {
            id: 9,
            color: '#72b526',
            secondColor: '#96ce51'
        },

        {
            id: 10,
            color: '#ffb300',
            secondColor: '#ffc928'
        },
        {
            color: "#F44336",
            secondColor: "#E57373"
        },
        {
            color: "#673AB7",
            secondColor: "#9575CD"
        },
        {
            color: "#4CAF50",
            secondColor: "#81C784"
        },
        {
            color: "#FF5722",
            secondColor: "#FF8A65"
        },
        {
            color: "#E91E63",
            secondColor: "#F06292"
        },
        {
            color: "#3F51B5",
            secondColor: "#7986CB"
        },
        {
            color: "#00ACC1",
            secondColor: "#00BCD4"
        },

        {
            color: "#9C27B0",
            secondColor: "#BA68C8"
        },
        {
            color: "#2196F3",
            secondColor: "#64B5F6"
        },
        {
            color: "#26A69A",
            secondColor: "#80CBC4"
        },
        {
            color: "#FF4081",
            secondColor: "#F48FB1"
        },
        {
            color: "#FF9800",
            secondColor: "#FFB74D"
        },
        {
            color: "#D500F9",
            secondColor: "#EA80FC"
        },
        {
            color: "#651FFF",
            secondColor: "#B388FF"
        },
        {
            color: "#3D5AFE",
            secondColor: "#8C9EFF"
        },
        {
            color: "#2979FF",
            secondColor: "#82B1FF"
        },

        {
            color: "#FF6E40",
            secondColor: "#FF9E80"
        },

    ]

    // const getStorageColor = () => {
    //     let color = '#4169e1';
    //     if (localStorage.getItem('color')) {
    //         color = localStorage.getItem('color')
    //     }
    //     return color
    // }

    const [showSwitch, seyShowSwitch] = useState(false)
    const [color, setColor] = useState('#4169e1')
    const [secondColor, setSecondColor] = useState('#98a8ed')

    const changeColor = (color) => {
        setColor(color.color)
        setSecondColor(color.secondColor)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--main-color', color);
        document.documentElement.style.setProperty('--secondary-color', secondColor);
        // localStorage.setItem('color', color)
    }, [color, secondColor]);

    return (
        <>
            <div>
                <div className={showSwitch ? 'style_switcher show_switcher' : "style_switcher"}>
                    <div className="style_switcher_toggler" onClick={() => seyShowSwitch(!showSwitch)}>
                        <FaCog />
                    </div>

                    <h3 className="style_switcher_title">style switcher</h3>
                    <div className="style_switcher_item">
                        {
                            themes.map((theme, ix) => {
                                return (
                                    <div key={ix} onClick={() => changeColor(theme)}
                                        className="color_box"
                                        style={{
                                            background: theme.color,
                                            width: '2rem',
                                            height: '2rem',
                                            borderRadius: "50%",
                                            cursor: "pointer"
                                        }}>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="style_switcher_close"
                        onClick={() => seyShowSwitch(!showSwitch)}>&times;</div>
                </div>
            </div>
        </>
    )
}

const SocialIcon = () => {
    const socialMedia = [
        // {
        //     name: "YouTube",
        //     icon: <FaYoutube />
        // },
        {
            name: "whatApp",
            link: 'https://api.whatsapp.com/send?phone=9021594170',
            icon: <IoLogoWhatsapp />,
        },
        {
            name: "Gmail",
            link: 'mailto:facemultispecialtyclinic@gmail.com',
            icon: <IoIosMail />
        },
        // {
        //     name: "FaceBook",
        //     icon: <FaFacebook />
        // },
        // {
        //     name: "Twitter",
        //     icon: <FaTwitter />
        // },
        {
            name: "Instagram",
            link: 'https://www.instagram.com/facemultispecialtyclinic',
            target: '_blank',
            icon: <RiInstagramFill />
        },
        {
            name: "LinkedIn",
            link: 'https://www.linkedin.com/in/dr-sthita-gurrala',
            target: '_blank',
            icon: <FaLinkedin />
        },

    ]

    const handleClick = (item) => {
        window.location.href = item
    };
    return (
        <div className="social_icon">
            <div className="social_icon_content">
                <div className="box">
                    {
                        socialMedia.map((item, idx) => {
                            return (
                                <div key={idx} className="social_media_icon_box"
                                    onClick={() => handleClick(item?.link)}
                                >{item?.icon}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
const Branding = () => {
    const navigate = useNavigate()
    const doctorName = [`${i18n.t("dr")} ${i18n.t("Sthita Gurrala")}`, 'dr Satyajit']

    return (
        <>
            <div className="branding">
                <div className="branding_content container">
                    <div className="branding_left"
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => navigate('/')
                        }
                    >
                        <div className="logo_img">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="logo_content">
                            <div className="logo_name">face</div>
                            <div className="logo_name_two">
                                <span>{i18n.t("hospital_type")}</span>
                            </div>
                        </div>
                    </div>
                    <div className="branding_right">
                        {
                            doctorName.map((doc, id) => {
                                return (
                                    <React.Fragment key={id}>
                                        <div className="branding_doc_name">{doc}</div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
const HeroBanner = () => {
    const location = useLocation()
    return (
        <>
            <div className={`hero_banner ${location.pathname !== '/' ? "not_homa_page" : ''}`}>
                <video width="100%" autoPlay muted loop className={`dark-video ${location.pathname === "/" ? "" : "new_design"}`}>
                    <source src={vedio} type="video/mp4" />
                </video>
            </div>
            <div
                // className="hero_banner_content"
                className={`hero_banner_content ${location.pathname === "/" ? "" : "new_design"}`}>
                <img src={image} alt=""
                    className={`color-filter ${location.pathname === "/" ? "" : "new_design"}`} />
                {
                    location.pathname === "/" &&
                    <>
                        <div className="hero_banner_hospital_name">face</div>
                        <div className="hero_banner_des">{i18n.t("hospital_type")}</div>
                    </>
                }

            </div>
        </>
    )
}
const Navbar = () => {
    const context = useContext(AppContext)
    const stickyDivRef = useRef(null);
    const [stickyHeader, setStickyHeader] = useState(false)
    const navigator = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const stickyDiv = stickyDivRef.current;
            if (window.scrollY > 125) {
                setStickyHeader(true)
            } else {
                setStickyHeader(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { t } = useTranslation();

    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage)
    }
    const [click, setClick] = useState(null)
    const handleSetClick = (id) => {
        setClick(id)
        if (id === 1) {
            navigator("/")
        }
        if (id === 3) {
            navigator("contact")
        }
    }
    return (
        <div className={`navabar ${stickyHeader ? "active" : ""}`} ref={stickyDivRef}>
            <div className={`nav-links container ${stickyHeader ? "p-0" : "margin_bottom"}`}>
                {
                    stickyHeader && <div className="navbar_logo"
                        onClick={() => navigator('/')}>
                        <div className="logo_img">
                            <img src={image} className='color-filter' alt="" />
                        </div>
                        <div className="logo_content_two">
                            <div className="logo_name">face</div>
                            <div className="logo_name_two">
                                <span>multispecialty clinic</span>
                            </div>
                        </div>
                    </div>
                }
                {/* <ul>
                    <li><Link to='/'>{i18n.t("Home")}</Link></li>
                    <li><Link to='/about'>{i18n.t("Service")}</Link></li>
                    <li><Link to='/meet'>{i18n.t("MeetUs")}</Link></li>
                    <li><Link to='/contact'>{i18n.t("ContactUs")}</Link></li>
                </ul> */}
                <nav className="nav main-menu">
                    <ul className={`navigation ${stickyHeader ? "item_gap" : ""}`} id="navbar">
                        <Link to={"/"}>
                            <li
                                className={`${click === 1 ? "current" : ""} dropdown`}>
                                <span onClick={() => handleSetClick(1)}
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none'
                                    }}>{i18n.t("Home")}</span>
                            </li>
                        </Link>
                        <li
                            className={`${click === 2 ? "current" : ""} dropdown mega-menu`}
                            id="mega-menu">
                            <span onClick={() => setClick(2)}>{i18n.t("Service")}</span>
                            <div className="mega-menu">
                                <div className="mega-menu-bar row">
                                    <ul>
                                        {
                                            servicesDoc?.map((item, id) => {
                                                const setUp = () => id === 1 ? item?.subHead[0]?.subTitle[0] : item?.subTitle[0]
                                                return (
                                                    <>
                                                        <li key={id}
                                                            onClick={() => context.handleServiceDeatil(item, setUp)}>{item?.title}</li>
                                                    </>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            className={`${click === 3 ? "current" : ""} dropdown`}>
                            <span onClick={() => setClick(2)}>{i18n.t("MeetUs")}</span>
                            <div className="mega-menu">
                                <div className="mega-menu-bar row">
                                    <ul>
                                        {
                                            Doctors?.map((item, id) => {
                                                return (
                                                    <li key={id}
                                                        onClick={() => context.handleClickDoctor(item)}>{item?.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            className={`${click === 3 ? "current" : ""} dropdown`}>
                            <span onClick={() => handleSetClick(3)}>{i18n.t("ContactUs")}</span>
                            {/* <div className="mega-menu">
                                <div className="mega-menu-bar row">
                                    <ul>
                                        <li style={{ color: "#000" }}>contact information</li>
                                    </ul>
                                </div>
                            </div> */}
                        </li>
                    </ul>
                </nav>

                {/* <div className="lang">
                    <select onChange={handleChangeLanguage} className='select-lang'>
                        <option value="en">
                            <span>English</span>
                            <span>
                                <img src={india} alt="" />
                            </span>
                        </option>
                        <option value="hi">
                            <span>Hindi</span>
                            <span>
                                <img src={india} alt="" />
                            </span>
                        </option>
                        <option value="ru">
                            <span>Russian</span>
                            <span>
                                <img src={russia} alt="" />
                            </span>
                        </option>
                        <option value="fr">
                            <span>French</span>
                            <span>
                                <img src={france} alt="" />
                            </span>
                        </option>
                        <option value="ch">
                            <span>Chinese</span>
                            <span>
                                <img src={china} alt="" />
                            </span>
                        </option>
                    </select>
                </div> */}

            </div>
        </div>
    )
}

const Header = () => {
    const { t } = useTranslation(); 

    return (
        <>
            <ThemeColor />
            <SocialIcon />
            <Branding />
            <Navbar />
            <HeroBanner />
        </>
    )
}

export default Header
