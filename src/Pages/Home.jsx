import React from 'react'
import Main from '../Sections/Main'
import Mainswiper from '../Sections/MainSwiper'
import MainChoose from '../Sections/MainChoose'
import Working from '../Sections/Working'
import Comments from '../Sections/Comments'
import PredFinal from '../Sections/PredFinal'
import Empty from '../Sections/Empty'

const Home = () => {
  return (
    <>
        <Main />
        <Mainswiper />
        <Empty />
        <MainChoose />
        <Working />
        <Comments />
        <PredFinal />
        <Empty />
    </>

  )
}

export default Home