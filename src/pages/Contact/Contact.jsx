import React from 'react'
import './Contact.css'
import Photo from '../../images/new/IMG_1358.jpg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Contact = () => {
  const contact = [
    {
      head: "Clinic Address:",
      text: [
        "H. No. 1574, Shop no. CGS 13. ",
        "Chinu Appts, B. B. Borkar road,",
        "Alto-Porvorim Goa, 403521"
      ]
    },
    {
      head: "Landmarks:",
      text: [
        "Near O’ Coqueiro",
        "Next to Biryani Palace"
      ]
    },
    {
      head: "Clinic timings:",
      text: [
        "9.00 am - 1.00 pm & 4.00 pm – 8.00 pm"
      ]
    },
    {
      head: "Telephone",
      text: [
        "+91 9021594170"
      ]
    }
  ]
  return (
    <>
      <div className="contact_page">
        <div className="contact_page_content">
          <div className='bg_design'>hi</div>
          <div className="contact_page_details container">
            <div className="contact_page_title">face multispecialty clinic ,oral surgery office</div>
            <div className="contact_page_des">
              <div className="first_row">
                <div className="first_row_details">
                  {
                    contact?.map((item, id) => {
                      return (
                        <div key={id} className="first_row_details_box">
                          <div className="first_row_details_box_head">{item?.head}</div>
                          <div className="first_row_details_box_des">
                            {
                              item?.text?.map((u, i) => {
                                return (
                                  <div key={i} className="first_row_details_box_des_item">{u}</div>
                                )
                              })
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="second_row">
                <img src={Photo} alt="" />
              </div>
            </div>
            <div className="productDeatils_map">
              <div style={{ borderRadius: '4px' }}>
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '600px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
