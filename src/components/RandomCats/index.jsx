import styled from 'styled-components'
import { BGColor } from '../../assets/colors'
import { SvgComponent } from './svg'
export const RandomCats = data => {
    return (
        <Container>
            <Text>{data?.data?.fact ? data?.data?.fact : 'Dates Random'}</Text>
            <ContainerSvg>
                <SvgComponent />
            </ContainerSvg>
        </Container>
    )
}

/// Estilos loading
const Container = styled.div`
    height: 100%;
    background-color: ${ BGColor };
    margin: auto;
    display: flex;
    flex-direction: column;
`
const ContainerSvg = styled.div`
    height: 100%;
    background-color: ${ BGColor };
    margin: auto;
    display: flex;
    justify-content: center;
`
const Text = styled.h3`
  font-size: 50px;
  text-align: center;
  @media only screen and (max-width: 960px){
      font-size: 20px;
    }
`