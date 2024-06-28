import React from 'react'
import logo from '../../images/53f86fd3-d9f2-44d6-8f6b-3b4679ad0d00-removebg.png'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Footer.css'

const Footer = () => {
    const footerDoc =
    {
        doctors: [
            "Sthita Gurrala",
            "Vikas Dhupar",
            "Praveen Kumar S"
        ],
        surgery_details: 'Board Certified Oral and Maxillofacial Surgeons, Diplomates of the American Board of Oral and Maxillofacial Surgery',
        hospital_name: 'Tribeca Oral and Maxillofacial Surgery, PLLC',
        address: 'Porvorim, Goa,,india 403521',
        mob: [
            +919552399760, +917972749303
        ],
        office_hours: [
            {
                day: 'monday',
                timings: '8:45am–5:00pm'
            },
            {
                day: 'tuesday',
                timings: '9:00am–4:00pm'
            },
            {
                day: 'wednesday',
                timings: '8:45am–5:00pm'
            },
            {
                day: 'thursday',
                timings: '8:45am–5:00pm'
            },
            {
                day: 'friday',
                timings: '8:30am–3:00pm'
            }
        ],
        services: [
            "Dental Implants",
            "Orthodontic Surgical",
            "Wisdom Teeth"
        ],
        social_media_icon: [
            <FaFacebookF />,
            <FaGoogle />,
            <FaXTwitter />,
            <FaInstagram />
        ]
    }


    return (
        <>
            <div className="footer">
                <div className="footer_content container">
                    <div className="footer_header">
                        <div className="footer_header_logo">
                            <img src={logo} alt="" className="color-filter" />
                            <div className="footer_header_logo_name">
                                <span>asdfg</span>
                                <span>oral & maxillofacial surgery</span>
                            </div>
                        </div>
                        <div className="footer_header_contact">
                            <span>call today to schedule your appointment:</span>
                            <span>212-267-3300</span>
                        </div>
                    </div>
                    <div className="footer_des">
                        <div className="footer_des_col">
                            <div className="footer_des_col_row">
                                {
                                    footerDoc.doctors.map((item, id) => {
                                        return (
                                            <div key={id}
                                                className="footer_des_title link"
                                            >{item}</div>
                                        )
                                    })
                                }
                                <div className="footer_des_text">{footerDoc.surgery_details}</div>
                            </div>
                            <div className="footer_des_col_row">
                                <div className="footer_des_text link">{footerDoc.hospital_name}</div>
                                <div className="footer_des_text link">{footerDoc.address}</div>
                                {
                                    footerDoc.mob.map((item, id) => (
                                        <div key={id} className="footer_des_text">Mob : {item}</div>
                                    ))
                                }
                            </div>
                            <div className="footer_des_col_row">
                                <div className="footer_des_title">office hours</div>
                                {
                                    footerDoc.office_hours.map((item, id) => {
                                        return (
                                            <div key={id} className="footer_des_text"
                                                style={{
                                                    display: 'flex',
                                                    gap: '1rem',
                                                    justifyContent: 'space-between',
                                                    maxWidth: '18rem'
                                                }}>
                                                <span>{item.day}</span>
                                                <span>{item.timings}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="footer_des_col">
                            <div className="footer_des_col_row">
                                <div className="footer_des_text">If you have pain or an emergency situation, every attempt will be made to see you that day.</div>
                            </div>
                            <div className="footer_des_col_row">
                                <div className="footer_des_title">PROCEDURES OFFERED INCLUDE:</div>
                                {
                                    footerDoc.services.map((item, id) => {
                                        return (
                                            <div key={id} className="footer_des_text link">{item}</div>
                                        )
                                    })
                                }
                            </div>
                            <div className="footer_des_col_row">
                                <div className="footer_des_search_bar">
                                    <span>search for:</span>
                                    <input type="text" />
                                    <button className='footer_des_search_bar_button'>search</button>
                                </div>
                            </div>
                        </div>
                        <div className="footer_des_col">
                            <div className="footer_des_col_row">
                                <div className="productDeatils_map">
                                    <div style={{ borderRadius: '4px' }}>
                                        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                                            <TileLayer
                                                style={{
                                                    borderRadius: '4px'
                                                }}
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker position={[51.505, -0.09]}>
                                                <Popup>
                                                    A pretty CSS3 popup. <br /> Easily customizable.
                                                </Popup>
                                            </Marker>
                                        </MapContainer>
                                    </div>
                                </div>
                                <div className="footer_des_text">Enjoy the ease of our convenient location, with a PATH station and almost all subways within blocks of our modern and comfortable office.</div>

                            </div>
                            <div className="footer_des_col_row">
                                <div className="footer_des_social_media">
                                    {
                                        footerDoc.social_media_icon.map((item, id) => (
                                            <div
                                                className="footer_des_social_media_icon"
                                                key={id}>{item}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer_bottom">
                    <div className="footer_bottom_content container">
                        <div className="all_links">
                            <span>home</span>
                            <span>services</span>
                            <span>Meet us</span>
                            <span>contact us</span>
                        </div>
                        <div className="web_designer">Oral Surgery Website Design by CTL © 2024</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
