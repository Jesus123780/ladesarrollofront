import styled, { css } from 'styled-components';

export const Input = styled.input`
    padding: 10px;
    outline: none;
    border: 1px solid #dcdcdc;
    font-family: PFont-Light;
`
export const ContainerTask = styled.div`
    display: flex;
    flex-direction: space-between;
    border-radius: 8px;
    border: 1px solid #e9e9e9;
    width: 100%;
    min-height: 40px;
    padding: 15px;
    background: transparent;
    overflow: hidden;
    text-decoration: none;
    height: auto;
    opacity: 1;
    cursor: pointer;
    margin: 20px;
    &:hover{
        color: #3e3e3e;
        box-shadow: 0px 4px 10px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 8%);
        border-color: transparent;
    }
    
`
export const Button = styled.button`
    outline: none;
    background: transparent;
    cursor: pointer;
`
export const ContainInputs = styled.div`
    display: flex;
`
export const ContainInput = styled.div`
    display: flex;
    flex-direction: space-between;
    border-radius: 8px;
    width: 100%;
    min-height: 40px;
    padding: 15px;
    background: transparent;
    overflow: hidden;
    text-decoration: none;
    height: auto;
    opacity: 1;
    cursor: pointer;
    margin: 20px;
        box-shadow: 0px 4px 10px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 8%);
        border-color: transparent;
    
`
export const Options = styled.div`
    position: absolute;
    display: grid;
    transition: all 200ms ease-in-out;
    display: flex;
  ${ ({ show }) => !show
        ? css`
                  visibility: visible;
                  opacity: 1;
                  transform: translateX(0);
              `
        : css`
                
                  margin: 0;
                  visibility: hidden;
                  opacity: 0;
                  transform: translateX(-50px);
              ` }
    @media only screen and (min-width: 960px){
    }
`
export const ListTask = styled.div`
    transition: all 200ms ease-in-out;
  ${ ({ show }) => show
        ? css`
        margin-left: 200px;
        `
        : css`
                
                margin-left: 30px;
              ` }
    @media only screen and (min-width: 960px){
    }
`
export const ContentNodata = styled.div`
    display: flex;
    /* justify-content: center; */
    /* min-width: 300px; */
    margin: auto;
    max-width: 40%;
`