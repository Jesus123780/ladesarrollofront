import React from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = props => {
    return (
        <Container>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Main = styled.main`
    width: 100%;
    margin: auto auto 40px;
    max-width: 1200px;
`