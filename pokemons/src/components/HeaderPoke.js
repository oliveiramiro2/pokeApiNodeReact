import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'


const HeaderBlog = (props) => {
    return (
        <div className='header-blog'>
            <Navbar
                alignLinks="right"
                brand={<p className="brand-logo">Pokedex</p>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                search
            >
                <NavItem href="">
                    Getting started
                </NavItem>
                <NavItem href="">
                    Components
                </NavItem>
            </Navbar>
        </div>
    )
    
}

export default HeaderBlog