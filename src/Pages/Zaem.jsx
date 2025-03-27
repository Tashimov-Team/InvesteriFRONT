import React from 'react'
import Hero2 from '../Sections/Hero2'
import Zaim from '../Sections/Zaim'
import SwiperX from '../Sections/SwiperX'
import HelpSection from '../Sections/HelpSection'
import Calculator from '../Sections/Calculator'
import Empty from '../Sections/Empty'
import RequestResetCode from '../Sections/CheckMail'
import ResetPassword from '../Sections/ResetPassword'

const Zaem = () => {
  return (
    <>
        <Hero2 />
        <Empty />
        <Zaim />
        <SwiperX />
        <HelpSection />
        <Calculator />
        <Empty />
        <RequestResetCode />
        <ResetPassword />
    </>
  )
}

export default Zaem