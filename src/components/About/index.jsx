import React from 'react'
import styled from 'styled-components'
import { BGColor } from '../../assets/colors'
import { RippleButton } from '../Ripple'
import { Link } from 'react-router-dom'
export const About = () => {
    return (
        <div>
            <Container>
                <Table>
                    <tbody>
                        <tr>
                            <th className="andes-table">Nombre de usuario</th>
                            <td><span>Jesus Juvinao</span></td>
                        </tr>
                        <tr>
                            <th className="andes-table">Email</th>
                            <td><span>Juvinaojesusd@gmail.com</span></td>
                        </tr>
                        <tr>
                            <th className="andes-table">Telefono</th>
                            <td><span>3983945</span></td>
                        </tr>
                        <tr>
                            <th className="andes-table">Description</th>
                            <td><span>Lorem lorem</span></td>
                        </tr>
                    </tbody>
                </Table>
                <Link to='/'>
                    <RippleButton label='Home' />
                </Link>
            </Container>
        </div>
    )
}

const Container = styled.div`
    top: 0;
    left: 0;
    z-index: 9999999;
    height: 100vh;
    width: 100%;
    background-color: ${ BGColor };
    height: 100vh;
    max-width: 100vw !important;
    display: grid;
    padding: 70px;
    margin: auto;
 
`
const Table = styled.table`
tbody tr:nth-child(2n) .andes-table:first-child,
tbody tr:nth-child(2n) .andes-table:first-child,
tbody tr:nth-child(odd),

tbody tr:nth-child(odd):hover {
    padding: 13px;
    background: #f5f5f5
}

tbody tr:nth-child(odd) .andes-table:first-child,
tbody tr:nth-child(odd) .andes-table:first-child {
    background: #ebebeb;
    padding: 13px;
}
`