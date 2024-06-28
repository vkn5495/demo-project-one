import React, { createContext, useState } from 'react'
import { servicesDoc } from '../data/service/ServiceDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { Doctors } from '../data/doctor/doctor';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const location = useLocation()
    const navigator = useNavigate()
    const [serviceMainHead, setMainServiceHead] = useState(servicesDoc[0])
    const [servicePerDetail, setServicePerDeatil] = useState(servicesDoc[0].subTitle[0])
    const [doctor, setDoctor] = useState(Doctors[0])

    const handleServiceDeatil = (main, product) => {
        if (location.pathname !== 'service') {
            navigator('service')
        }
        if (product === null) {
            if (main === serviceMainHead) {
                setMainServiceHead(null)
            }
            else {
                setMainServiceHead(main)
            }
        }
        else if (main === null) {
            setServicePerDeatil(product)
        }
        else {
            setMainServiceHead(main)
            setServicePerDeatil(product)
        }
    }

    const handleClickDoctor = (item) => {
        if (location.pathname !== 'meet') {
            navigator('meet')
        }
        setDoctor(item)
    }


    const contextValue = {
        servicePerDetail,
        serviceMainHead,
        handleServiceDeatil,
        doctor,
        handleClickDoctor

    }
    console.log(serviceMainHead)
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
