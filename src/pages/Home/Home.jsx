import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import './Home.css'
import docImage from '../../images/new/DSC07973 copy (1).png'

import serviceOne from '../../images/icon-wisdom.webp'
import serviceTwo from '../../images/icon-implant.webp'
import serviceFour from '../../images/icon-sedation.webp'
import serviceThree from '../../images/icon-ortho.webp'


// import serviceOne from '../../images/services/Screenshot (39).png'
// import serviceTwo from '../../images/services/Screenshot (39).png'
// import serviceThree from '../../images/services/Screenshot (37).png'
// import serviceFour from '../../images/services/Screenshot (38).png'

import { FaBusinessTime } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { TbToolsOff } from "react-icons/tb";
import drSthita from '../../images/new/DSC07973 copy (1).png'
import drSatyajith from '../../images/new/Picsart_24-06-16_23-08-52-110.jpg'
import { FaWhatsapp, FaInstagram, FaGoogle, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import checkList from '../../images/services/Screenshot (40).png'
import { FaAngleDown } from "react-icons/fa6";
import demoImage from '../../images/services/icon-implant.webp'
import Slider from 'react-slick'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { AppContext } from '../../Context/Context';
import { servicesDoc } from '../../data/service/ServiceDetails';
import { BiSolidQuoteAltRight } from "react-icons/bi";

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

const HeadingDesign = ({ part1, part2, big }) => {
  return (
    <div className="doc_heading">
      <div className="doc_heading_content">
        <span>{part1}</span>
        <span className={`${big ? "big_one" : ''}`}>{part2}</span>
      </div>
    </div>
  )
}

const OurStory = () => {

  const docSer = [
    {
      logo: <FaBusinessTime />,
      title: '24 hours service',
      des: 'providing unwavering support around the clock.our 24 hours services ensure'
    },
    {
      logo: <FaUserDoctor />,
      title: 'qualified doctor',
      des: 'a qualified doctor prossesses comprehensive understanding the medical services'
    },
    {
      logo: <FaSuitcaseMedical />,
      title: 'emergency care',
      des: 'it is timily intervetion plays a crucial role in stabling patients saving lives'
    },
    {
      logo: <TbToolsOff />,
      title: 'operation treater',
      des: 'it is equipped with specialized tools and technology to ensure the safety'
    }
  ]

  return (
    <div className="bio_of_doc container">
      <div className="bio_of_doc_content">
        {/* <div className="header_design">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
        <HeadingDesign part1={"our"} part2={"story"} />
        <div className="bio_of_doc_details">
          <div className="bio_of_doc_details_content">
            <div className="bio_of_doc_details_sub_title">
              <span>{i18n.t("dr")} {i18n.t("Sthita Gurrala")}</span>
              <span>BDS, MDS, AOCMF Fellow (Germany)</span>
            </div>
            <div className="bio_of_doc_details_title">Oral & Maxillofacial Surgeon</div>
            <div className="bio_of_doc_details_text">{i18n.t("bio_doc_text")}</div>
            <div className="bio_of_doc_details_des">{i18n.t("bio_doc_des")}</div>
            <div className="bio_of_doc_details_des">Since 2018, Dr Gurrala has worked as a visiting consultant in Goa. She collaborates with a team of specialized
              professionals at her multispecialty clinic to address a wide range of concerns about the facial region, including
              dental, maxillofacial, cosmetic, skin, and hair issues.</div>
          </div>
          <div className="bio_of_doc_img">
            <img src={docImage} alt="" />
            {/* <span></span> */}

            <div className="liquid_shape">
              <svg viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%" id="blobSvg">
                <path>
                  <animate attributeName='d'
                    dur="30000ms"
                    repeatCount="indefinite"
                    values='
                    M426,279Q379,308,394,367.5Q409,427,352,407Q295,387,260,437.5Q225,488,186.5,457Q148,426,129.5,388.5Q111,351,71.5,323.5Q32,296,70,258Q108,220,124.5,195.5Q141,171,162,153Q183,135,208.5,116.5Q234,98,268,94.5Q302,91,335.5,104.5Q369,118,413.5,137.5Q458,157,465.5,203.5Q473,250,426,279Z;
                    M424,293.5Q446,337,409,361.5Q372,386,346,425Q320,464,276,443.5Q232,423,199,409Q166,395,118,388Q70,381,72.5,334Q75,287,89.5,253Q104,219,103,180.5Q102,142,119,97.5Q136,53,181,37.5Q226,22,261.5,64Q297,106,345.5,98Q394,90,423,125Q452,160,427,205Q402,250,424,293.5Z;
                    M431,288.5Q424,327,380.5,336.5Q337,346,326,398Q315,450,271.5,454Q228,458,198.5,424Q169,390,158.5,357Q148,324,110.5,306Q73,288,42.5,243.5Q12,199,64,175.5Q116,152,141,128Q166,104,200,99Q234,94,276.5,66.5Q319,39,333.5,90Q348,141,410,146Q472,151,455,200.5Q438,250,431,288.5Z;
                    M437.5,296.5Q459,343,405.5,353Q352,363,321.5,369Q291,375,263,385.5Q235,396,200,396.5Q165,397,151,364.5Q137,332,81,315Q25,298,59.5,257.5Q94,217,88.5,173Q83,129,119.5,108.5Q156,88,191,53Q226,18,271,32Q316,46,352,71.5Q388,97,407,134.5Q426,172,421,211Q416,250,437.5,296.5Z;
                    M446.5,290Q430,330,388,343.5Q346,357,327.5,394Q309,431,271.5,415Q234,399,193,409.5Q152,420,114.5,398Q77,376,90,328.5Q103,281,91,247.5Q79,214,107.5,190.5Q136,167,143.5,123Q151,79,192,84.5Q233,90,277.5,59.5Q322,29,355,62.5Q388,96,416,130Q444,164,453.5,207Q463,250,446.5,290Z;
                    M420,276Q367,302,350.5,322.5Q334,343,323,391.5Q312,440,272,430.5Q232,421,186.5,429.5Q141,438,139,385Q137,332,83.5,314.5Q30,297,41.5,252.5Q53,208,90.5,185Q128,162,130.5,104.5Q133,47,182,56.5Q231,66,278,42.5Q325,19,364,49.5Q403,80,437.5,115.5Q472,151,472.5,200.5Q473,250,420,276Z;
                    M442.5,296Q457,342,421.5,371.5Q386,401,337.5,385.5Q289,370,261.5,384.5Q234,399,207.5,384Q181,369,153,355Q125,341,73,320Q21,299,30,252Q39,205,46.5,156.5Q54,108,112.5,111Q171,114,200.5,86Q230,58,270,62.5Q310,67,347,84Q384,101,402.5,137.5Q421,174,424.5,212Q428,250,442.5,296Z;
                    M426,279Q379,308,394,367.5Q409,427,352,407Q295,387,260,437.5Q225,488,186.5,457Q148,426,129.5,388.5Q111,351,71.5,323.5Q32,296,70,258Q108,220,124.5,195.5Q141,171,162,153Q183,135,208.5,116.5Q234,98,268,94.5Q302,91,335.5,104.5Q369,118,413.5,137.5Q458,157,465.5,203.5Q473,250,426,279Z;
                    '
                  >
                  </animate>
                </path>

              </svg>
            </div>
            <div className="liquid_shape"
              style={{ filter: 'blur(50px)' }}>
              <svg viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%" id="blobSvg">
                <path fill="#1f378f80">
                  <animate attributeName='d'
                    dur="30000ms"
                    repeatCount="indefinite"
                    values='
                    M426,279Q379,308,394,367.5Q409,427,352,407Q295,387,260,437.5Q225,488,186.5,457Q148,426,129.5,388.5Q111,351,71.5,323.5Q32,296,70,258Q108,220,124.5,195.5Q141,171,162,153Q183,135,208.5,116.5Q234,98,268,94.5Q302,91,335.5,104.5Q369,118,413.5,137.5Q458,157,465.5,203.5Q473,250,426,279Z;
                    M424,293.5Q446,337,409,361.5Q372,386,346,425Q320,464,276,443.5Q232,423,199,409Q166,395,118,388Q70,381,72.5,334Q75,287,89.5,253Q104,219,103,180.5Q102,142,119,97.5Q136,53,181,37.5Q226,22,261.5,64Q297,106,345.5,98Q394,90,423,125Q452,160,427,205Q402,250,424,293.5Z;
                    M431,288.5Q424,327,380.5,336.5Q337,346,326,398Q315,450,271.5,454Q228,458,198.5,424Q169,390,158.5,357Q148,324,110.5,306Q73,288,42.5,243.5Q12,199,64,175.5Q116,152,141,128Q166,104,200,99Q234,94,276.5,66.5Q319,39,333.5,90Q348,141,410,146Q472,151,455,200.5Q438,250,431,288.5Z;
                    M437.5,296.5Q459,343,405.5,353Q352,363,321.5,369Q291,375,263,385.5Q235,396,200,396.5Q165,397,151,364.5Q137,332,81,315Q25,298,59.5,257.5Q94,217,88.5,173Q83,129,119.5,108.5Q156,88,191,53Q226,18,271,32Q316,46,352,71.5Q388,97,407,134.5Q426,172,421,211Q416,250,437.5,296.5Z;
                    M446.5,290Q430,330,388,343.5Q346,357,327.5,394Q309,431,271.5,415Q234,399,193,409.5Q152,420,114.5,398Q77,376,90,328.5Q103,281,91,247.5Q79,214,107.5,190.5Q136,167,143.5,123Q151,79,192,84.5Q233,90,277.5,59.5Q322,29,355,62.5Q388,96,416,130Q444,164,453.5,207Q463,250,446.5,290Z;
                    M420,276Q367,302,350.5,322.5Q334,343,323,391.5Q312,440,272,430.5Q232,421,186.5,429.5Q141,438,139,385Q137,332,83.5,314.5Q30,297,41.5,252.5Q53,208,90.5,185Q128,162,130.5,104.5Q133,47,182,56.5Q231,66,278,42.5Q325,19,364,49.5Q403,80,437.5,115.5Q472,151,472.5,200.5Q473,250,420,276Z;
                    M442.5,296Q457,342,421.5,371.5Q386,401,337.5,385.5Q289,370,261.5,384.5Q234,399,207.5,384Q181,369,153,355Q125,341,73,320Q21,299,30,252Q39,205,46.5,156.5Q54,108,112.5,111Q171,114,200.5,86Q230,58,270,62.5Q310,67,347,84Q384,101,402.5,137.5Q421,174,424.5,212Q428,250,442.5,296Z;
                    M426,279Q379,308,394,367.5Q409,427,352,407Q295,387,260,437.5Q225,488,186.5,457Q148,426,129.5,388.5Q111,351,71.5,323.5Q32,296,70,258Q108,220,124.5,195.5Q141,171,162,153Q183,135,208.5,116.5Q234,98,268,94.5Q302,91,335.5,104.5Q369,118,413.5,137.5Q458,157,465.5,203.5Q473,250,426,279Z;
                    '
                  >
                  </animate>
                </path>

              </svg>
            </div>
          </div>
        </div>
        {/* <div className="bio_of_doc_services">
          <div className="bio_of_doc_services_content">
            {
              servicesDoc.map((item, id) => {
                return (
                  <div key={id} className="bio_of_doc_services_box">
                    <div className="bio_of_doc_services_box_icon">{item?.logo}</div>
                    <div className="bio_of_doc_services_box_title">{item?.title}</div>
                    <div className="bio_of_doc_services_box_des">providing unwavering support around the clock.our 24 hours services ensure</div>
                  </div>
                )
              })
            }
          </div>
        </div> */}
        {/* <div className="footer_design">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
      </div>
    </div>
  )
}

const ServiceSectionOne = (props) => {
  const [click, setClick] = useState(null)
  const { servicesDoc } = props
  const handleClick = (id) => {
    if (click === id) {
      setClick(null)
    }
    else {
      setClick(id)
    }
  }
  var settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 700,
    // arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const SliderCom = ({ item, head }) => {
    const context = useContext(AppContext)
    console.log(context.serviceDetail)
    const secondProps = () => head?.title === "Dental Implants & Oral Surgery" ? head : item
    return (
      <>
        {
          <Slider {...settings}>
            {
              item?.subTitle?.map((product, idx) => {
                return (
                  <div className="service_details_des_box"
                    key={idx}
                    onClick={() => context.handleServiceDeatil(secondProps, product)}>
                    <img src={product?.img} className='product_img' alt="" />
                    <div className="service_details_des_box_name">{product?.name}</div>
                  </div>
                )
              })
            }
          </Slider>
        }
      </>
    )
  }
  return (
    <div className="service_section container">
      <div className="service_section_content accordion" id="accordionExample">
        <HeadingDesign part1={"our"} part2={"services"} />
        <div className="service_details">
          <div className="service_details_content">
            {
              servicesDoc?.map((item, id) => {
                const backImage = id === 0 ? "one" : id === 1 ? 'two' : id === 2 ? "three" : "four"
                return (
                  <div className="service_details_box">
                    <div className={`service_details_title  ${id === click ? "take_height" : ""}`}
                      onClick={() => handleClick(id)}>
                      <div className={`service_details_box_title_name `}>
                        <img src={item?.img} className='icon_img' alt="" />
                        <span>{item?.title}</span>
                      </div>
                      <span className={`service_details_icon ${id === click ? "turn_icon" : ''}`}><FaAngleDown /></span>
                    </div>
                    <div className={`service_details_des hello ${click === id ? "new_style" : ""} ${item?.subHead ? "take_double_height" : ''}`}>
                      <>
                        {
                          item?.subHead ?
                            <>
                              {
                                item?.subHead?.map((u, i) => {
                                  return (
                                    <div key={i} className="service_details_des_sub_title">
                                      <div className="service_details_des_sub_title_name">{u?.name}</div>
                                      <SliderCom item={u} head={item} />
                                    </div>
                                  )
                                })
                              }
                            </> :
                            <>
                              <SliderCom item={item} />
                            </>
                        }
                      </>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceSectionTwo = (props) => {
  const { servicesDoc } = props
  return (
    <div className="service_section">
      <div className="service_section_content">
        <HeadingDesign part1={"our"} part2={"services"} />
        <div className="service_section_types">
          {
            servicesDoc.map((item, id) => {
              return (
                <div className="service_section_type_box" key={id}>
                  <div className="service_section_type_box_img">
                    <img src={item?.img} alt="" />
                    <div className="take_dark"></div>
                  </div>
                  {/* <img src={item?.img} alt="" /> */}
                  <div className="service_section_types_details">
                    <div className="service_section_types_details_title">{item?.title}</div>
                    <div className="service_section_types_details_des">
                      {
                        id !== 1 ?
                          <>
                            {
                              item?.subTitle?.map((cont, ir) => {
                                return (
                                  <li key={ir} className="service_section_types_details_des_content">{cont?.name}</li>
                                )
                              })
                            }
                          </> :
                          <>
                            {
                              item?.subHead?.map((cont, it) => {
                                return (
                                  <>
                                    <div key={it} className="service_section_types_details_des_head">{cont?.name}</div>
                                    {
                                      cont?.subTitle?.map((iop, i) => {
                                        console.log(iop)
                                        return (
                                          <li key={i} className="service_section_types_details_des_content">{iop?.name}</li>
                                        )
                                      }
                                      )
                                    }
                                  </>
                                )
                              })
                            }
                          </>
                      }
                    </div>
                    <div className="service_section_types_details_button">more details</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const OurTeam = (props) => {
  const { doctorDetails } = props
  return (
    <div className="our_teams">
      <div className="our_teams_content">
        <HeadingDesign part1={"meet"} part2={"our teams"} />
        <div className="our_teams_body">
          {
            doctorDetails.map((item, id) => {
              return (
                <div className="our_teams_box" key={id}>
                  <div className="our_teams_box_img">
                    <img src={item?.img} alt="" />
                  </div>
                  <div className="our_teams_box_content">
                    <div className="our_teams_box_name">{item?.docName}</div>
                    <div className="our_teams_box_post">{item?.post}</div>
                    <div className="our_teams_box_des">{item?.docDes}</div>
                    <div className="our_teams_box_button">read more</div>
                    <div className="our_teams_box_social_media">
                      <div className="box">
                        {
                          item?.socialMedia.map((icon, idx) => {
                            return (
                              <div key={idx} className="our_teams_box_social_media_icon">{icon}</div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const CheckList = () => {
  const subPoint = [
    "List of Current Medications",
    "Known Allergies",
    "Medical History",
    "Recent Medical Records",
    "Specific Conditions Related to Oral Health",
    "Special Considerations",
    "Contact Information for Healthcare Providers"
  ]
  return (
    <div className="check_list container">
      <div className="check_list_content ">
        <HeadingDesign part1={"During your visit"} part2={"checklist"} big />
        <div className="check_list_heading">Medical Information</div>
        <div className="check_list_details">
          <div className="check_list_des">
            <div className="check_list_des_details">While visiting the clinic carry all medical document. An
              accurate medical/dental health history is vital since it
              may provide valuable information for the clinicians prior
              to beginning treatment, especially since certain
              medications can influence treatment decisions or may
              impact post-operative care instructions
            </div>
            <div className="check_list_des_ponts">
              {
                subPoint?.map((item, id) => {
                  return (
                    <li key={id} className="check_list_des_ponts_box">{item}</li>
                  )
                })
              }
            </div>
          </div>

          <img src={checkList} alt="" />
        </div>
      </div>
    </div>
  )
}

const PatientSpeak = () => {
  const reviews = [
    {
      des: 'I would highly recommend Dr Ashima Chugh for Dental Braces treatment. I just got my braces removed today and I am delighted with the results. Dr Ashima is quite informative and assisted me well throughout the process. She is very understanding and explained me about all the procedures very well and was quite proactive in reverting to all my queries during the treatment.',
      doc: "vivek naik"
    },
    {
      des: 'I got my mother for her root canal treatment as she was complaining for severe tooth pain, I got an emergency appointment and Dr. Indu Yadav and the staff was really helpful in every possible way. The appointments were on time, there was never a delay and every procedure went smoothly! Cheers to Clove dental to make this a hassle-free, hygienic and yet a pleasant experience.',
      doc: "nikhil mahale"
    },
    {
      des: "I am very pleased with the dental services offered by Clove Dental clinic. The dentists are very friendly, have a sense of empathy and always look to give their best. A good place for treatment.",
      doc: "vinayak"
    },
    {
      des: "The dentists are very friendly, have a sense of empathy and always look to give their best. A good place for treatment.",
      doc: "yogendra patgar"
    },
    {
      des: "I just got my braces removed today and I am delighted with the results. Dr Ashima is quite informative and assisted me well throughout the process. She is very understanding and explained me about all the procedures very well and was quite proactive in reverting to all my queries during the treatment.",
      doc: "pavitra naik"
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 700,
    // arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="patient_speak">
      <div className="patient_speak_content container">
        <div className="patient_speak_title">patient speak</div>
        <div className="patient_speak_details">
          <Slider {...settings}>
            {
              reviews?.map((item, id) => {
                return (
                  <div key={id} className="patient_speak_box">
                    <div className="patient_speak_box_des">{item?.des}</div>
                    <div className="patient_speak_box_doc">{item?.doc}</div>
                    <div className="patient_speak_box_icon">
                      <span><BiSolidQuoteAltRight /></span>
                      <span><BiSolidQuoteAltRight /></span>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}
const Home = () => {


  const doctorDetails = [
    {
      docName: 'Dr Sthita Gurrala',
      img: drSthita,
      res: "Proprietor & Owner",
      post: "BDS, MDS(OMFS)",
      socialMedia: [
        <FaInstagram />,
        <FaWhatsapp />,
        <FaGoogle />,
        <FaLinkedinIn />,
        <FaFacebookF />
      ],
      docDes: 'Dr. Gurrala received her Bachelor of Dental Surgery degree from Goa Dental College & Hospital, Goa University scoring the highest marks in Oral & Maxillofacial Surgery. '
    },
    {
      docName: 'Dr Satyajit',
      res: "Associate Dentist",
      img: drSatyajith,
      post: "BDS",
      socialMedia: [
        <FaInstagram />,
        <FaWhatsapp />,
        <FaGoogle />,
        <FaLinkedinIn />,
        <FaFacebookF />
      ],
      docDes: 'Dr. Satyajit holds a Bachelor of Dental Surgery degree from Goa Dental College & Hospital, Goa University. He worked as a junior resident for a year in the Department of Oral & Maxillofacial Surgery at Goa Dental College & Hospital after completing his studies.  '
    },

  ]

  const { t } = useTranslation();


  return (
    <div className='home_page'>
      <div className="bg"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: '0',
          zIndex: '-3'
        }}></div>
      <div className="home_page_content">

        {/* our story sectoiin  */}
        <OurStory />

        {/* service section  */}
        <ServiceSectionOne servicesDoc={servicesDoc} />
        {/* <ServiceSectionTwo servicesDoc={servicesDoc} /> */}

        {/* doctors details section  */}
        {/* <OurTeam doctorDetails={doctorDetails} /> */}

        {/* check list  */}
        <CheckList />

        <PatientSpeak />
      </div>
    </div>
  )
}

export default Home
