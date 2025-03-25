import React from 'react'
import Hero from '../Sections/Hero'
import Adventages from '../Sections/Adventages'
import Fifth from '../Sections/Fifth'
import Choose from '../Sections/Choose'
import Text from './../Sections/Text';
import Investment from '../Sections/Investment'
import StatisticsBlock from '../Sections/Stats'
import Empty from '../Sections/Empty'



const Investors = () => {
  return (
    <>
        <Hero />
        <Empty />
        <StatisticsBlock />
        <Empty />
        <Text />
        <Investment />
        <Adventages />
        <Fifth />
        <Choose />
        <Empty />

    </>
    
  )
}

export default Investors