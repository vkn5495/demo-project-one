import React, { useContext } from 'react'
import './FooterTwo.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { servicesDoc } from '../../data/service/ServiceDetails';
import { Doctors } from '../../data/doctor/doctor';
import { AppContext } from '../../Context/Context';

const FooterTwo = () => {
    const context = useContext(AppContext)
    const handleClick = (item) => {
        window.location.href = item
    };
    const footer = [
        {
            heading: "our team",
            sub_head: Doctors
        },
        {
            heading: "our services",
            sub_head: servicesDoc
        },
        {
            heading: "Connect With Us!",
            sub_head: [
                {
                    name: "9021594170",
                    link: 'https://api.whatsapp.com/send?phone=9021594170',
                    icon: <FaWhatsapp />
                },
                {
                    name: " 9021594170",
                    icon: <IoCall />
                },
                //  {
                //     name: "7972749303",
                //     icon: <IoCall />
                // },

            ]
        },
        {
            heading: "social media",
            sub_head: [
                // {
                //     name: "FaceBook",
                //     icon: <FaFacebook />
                // },
                {
                    name: "Instagram",
                    link: 'https://www.instagram.com/facemultispecialtyclinic',
                    target: '_blank',
                    icon: <FaInstagram />
                },
                {
                    name: "LinkedIn",
                    link: 'https://www.linkedin.com/in/dr-sthita-gurrala',
                    target: '_blank',
                    icon: <FaLinkedin />
                },
                {
                    name: "facemultispecialtyclinic@gmail.com",
                    link: 'mailto:facemultispecialtyclinic@gmail.com',
                    icon: <IoIosMail />
                },
            ]
        }
    ]
    return (
        <>
            <div className="FooterTwo">
                <div className="FooterTwo_content container">
                    {
                        footer?.map((item, id) => {
                            return (
                                <div key={id} className="FooterTwo_box">
                                    <div className="FooterTwo_box_content">
                                        <div className="FooterTwo_title">{item?.heading}</div>
                                        <div className={`FooterTwo_des ${id === 1 ? "two" : ""}`}>
                                            {
                                                item?.sub_head?.map((prodt, i) => {
                                                    // const setUp = () => i === 1 ? prodt?.subHead[0]?.subTitle[0] : prodt?.subTitle[0]
                                                    return (
                                                        <div key={i} className="FooterTwo_des_box"
                                                            onClick={id === 0 ? () => context.handleClickDoctor(prodt) :
                                                                (id === 1 || id === 4) ? () => context.handleServiceDeatil(prodt, null) :
                                                                    prodt?.link ? () => handleClick(prodt?.link) : null
                                                            }>
                                                            <span>{prodt?.icon}</span>
                                                            <span>{prodt?.name}</span>
                                                            <span>{prodt?.title}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FooterTwo
