import React from 'react'
import CallToAction from '../components/cta/CallToAction'
import Layout from '../components/layout'
import SliderSection from '../components/slider/SliderSection'
import { NavigationItems } from '../models/NavigationItems'

const HomeViews = () => {
    return (
        <Layout items={NavigationItems}>
            <CallToAction />
            <SliderSection />
        </Layout>
    )
}

export default HomeViews