import React from 'react'
import './FooterTwo.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterTwo = () => {
    const footer = [
        {
            heading: "our team",
            sub_head: [
                {
                    name: "Sthita Gurrala",
                    // link:"/"
                },
                {
                    name: "Satyajit",
                },
            ]
        },
        {
            heading: "our services",
            sub_head: [
                {
                    name: "Dental treatment",
                },
                {
                    name: "Dental Implants & Oral Surgery",
                },
                {
                    name: "Maxillofacial Surgery",
                },
                {
                    name: "Cosmetology, Skin, Hair",
                },
            ]
        },
        {
            heading: "Connect With Us!",
            sub_head: [
                {
                    name: "9552399760",
                    icon: <FaWhatsapp />
                },
                {
                    name: " 9021594170",
                    icon: <IoCall />
                }, {
                    name: "7972749303",
                    icon: <IoCall />
                },
                {
                    name: "facemultispecialtyclinic@gmail.com",
                    icon: <IoIosMail />
                },
            ]
        },
        {
            heading: "social media",
            sub_head: [
                {
                    name: "YouTube",
                    icon: <FaYoutube />
                },
                {
                    name: "FaceBook",
                    icon: <FaFacebook />
                },
                {
                    name: "Twitter",
                    icon: <FaTwitter />
                },
                {
                    name: "Instagram",
                    icon: <FaInstagram />
                },
                {
                    name: "LinkedIn",
                    icon: <FaLinkedin />
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
                                                    return (
                                                        <div key={i} className="FooterTwo_des_box">
                                                            <span>{prodt?.icon}</span>
                                                            <span>{prodt?.name}</span>
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
