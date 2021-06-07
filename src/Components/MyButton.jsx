import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  & {
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    z-index: 1;
    color: ${(props) => (props.textColor ? props.textColor : 'black')};
  }
  &:after {
    z-index: -1;
    content: '';
    background-color: ${(props) => (props.color ? props.color : '#ffe54c')};
    width: 100%;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  &:hover::after {
    top: 0px;
    left: 0px;
  }
`

const MyButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default MyButton
