import React, { useEffect, useState } from 'react'
import { PColor } from '../../../assets/colors'
import { Container, Enlace, Content, Copyright, CopyrightInformation, ContainerLogo, ContainerSocial, ContentSocial, Title } from './styled'
import { IconLogo, Facebook, IconInstagram, IconYoutube } from '../../../assets/icons/icons'

export const Footer = () => {
    const [year, setYear] = useState(false)

    useEffect(() => {
        const fecha = new Date()
        setYear(fecha.getFullYear())
    }, [])
    return (<>
        <ContainerSocial>
            <ContentSocial>
                <Title>Me</Title>
                <Enlace to='/'>Quien soy</Enlace>
            </ContentSocial>
            <ContentSocial>
                <Title>Descrubre</Title>
                <Enlace to=''>Best Design</Enlace>
                <Enlace to='/'> Contacto</Enlace>
                <Enlace to='/'> Example</Enlace>
            </ContentSocial>
            <ContentSocial>
                <Title>Social</Title>
                <a style={{ margin: '0px 10px' }} href='https://www.facebook.com/profile.php?id=100007812216161' >
                    <Facebook size='40px' color={PColor} />
                </a>
                <a style={{ margin: '0px 10px' }} href='https://www.instagram.com/jesusdavidjuvinao/' >
                    <IconInstagram size='40px' color={PColor} />
                </a>
                <a style={{ margin: '0px 10px' }} href='https://www.youtube.com/channel/UC284WxkQxCsQr9a5GHjX0oQ' >
                    <IconYoutube size='40px' color={PColor} />
                </a>
            </ContentSocial>
        </ContainerSocial>
        <Container grid >
            <Content grid>
                <ContainerLogo>
                    <IconLogo size='40px' color={PColor} />
                </ContainerLogo>
                <Copyright>{year} © Copyright - COME YA S.A.S. sociedad comercial identificada con NIT No. 900.666.435-</Copyright>
                <CopyrightInformation>Carrera 51B Nº 80-58 , Oficina 601, Barranquilla, Atlántico 080020, CO. </CopyrightInformation>
            </Content>
            <Content>
                {/* <button onClick={onClickTop}>TOP</button> */}
                <Enlace to='/terminos-y-condiciones'> Términos y condiciones</Enlace>
                <Enlace to='/seguridad'> Seguridad</Enlace>
                <Enlace to='/aviso-de-privacidad'> Aviso de privacidad</Enlace>
            </Content>
        </Container>
    </>
    )
}