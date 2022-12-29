import React from 'react'
import { LayoutProps } from '../../models/LayoutPropsInterface'
import NavigationBar from '../navigation_bar'
import Herobanner from '../herobanner/Herobanner'
import Footer from '../footer/Footer'

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <>
            <NavigationBar items={props.items} />
            <Herobanner />
            <main>
                {props.children}
            </main>
            <Footer />
        </>

    )
}

export default Layout