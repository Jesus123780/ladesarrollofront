import styled from 'styled-components'
import { BGColor } from '../../assets/colors'
import TodoList from './TodoList'

export const Home = () => {
    return (
        <Container>
            <TodoList />
        </Container>
    )
}

/// Estilos loading
const Container = styled.div`
    height: 100%;
    background-color: ${ BGColor };
    padding: 30px;
`