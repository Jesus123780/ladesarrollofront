import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PColor } from '../../../assets/colors'
import logo from '../../../assets/img/logo.png'

export const Header = () => {
    return (
        <Container>
            <HeaderC>
                <div>
                    <Link to='/'>
                        <img style={{ maxWidth: '300px' }} src={logo} />
                    </Link>
                </div>
                <div>
                    <Anchor to='/'>
                        Home
                    </Anchor>
                    <Anchor to='/randomapi'>
                        Random Cats
                    </Anchor>
                    <Anchor to='/about'>
                        About me
                    </Anchor>

                </div>
            </HeaderC>
        </Container>
    )
}

/// Estilos CONTENEDOR
const Container = styled.div`
    box-shadow: inset 0 -1px 0 #dcdcdc;
`
const HeaderC = styled.div`
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 9997;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    max-width: 1366px !important;
    margin: auto;
    padding: 0 30px;
    @media only screen and (min-width: 960px){
        display: flex;
    }
`
const Anchor = styled(Link)`
    margin: 0px 20px;
    font-family: PFont-Regular;
    color: ${ PColor };
`