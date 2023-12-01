import React from "react";
import styled, {css} from "styled-components";
import image from './Rectangle 1.svg'


export const HomePage: React.FC = () => {
    return (
        <>
            <h1 style={{color: 'gray'}}> My testing component </h1>
            <Box>
                <Img src={image} alt="image"/>
                <Title> Headline </Title>
                <Paragraph>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </Paragraph>
                <Button primary> See more </Button>
                <Button outline> Save </Button>
            </Box>
        </>

    )
};


const Box = styled.div`
  width: 300px;
  height: 350px;
  background-color: #e7ecef;
  border-radius: 15px;

`

const Img = styled.img`
    width: 280px;
    height: 170px;
    margin: 10px;
`

const Title = styled.h1`
  font-size: 16px;
  font-family: Inter, serif;
  font-weight: 700;
  line-height: 20px;
  margin-left: 20px;
`

const Paragraph = styled.p`
  font-family: Inter, serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ABB3BA;
  margin: 20px 0 20px 20px;
`

type ButtonProps = {
    primary?: boolean
    outline?: boolean
}

const Button = styled.button<ButtonProps>`
  width: 86px;
  height: 30px;
  margin-left: 20px;
  border-radius: 5px;
  font-size: 10px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: rgba(63, 47, 79, 0.34);
  }
  
  ${props => props.primary && css<ButtonProps>`
    color: #FFFFFF;
    background-color: #4E71FE;
    border: none;
  `};

  ${props => props.outline && css<ButtonProps>`
    color: #4E71FE;
    background-color: transparent;
    border: 2px solid #4E71FE;
  `};
`