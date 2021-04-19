import React from 'react';
import styled from 'styled-components';
import BgImg from '../images/bg-image.jpg';
//import Gifts from '../assets/gifts.png';


// This is the background:
// Is a png image
const Background = styled.section`
  background-image: url(${BgImg});
  height: 100vh;
  width : 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// A space for the "portfolio" at top of the page
const Top = styled.div`
    font-size: 60px;
    color: white;
    font-weight: 400;
    padding-left: 865px;
`;

// margin so that text isn't at the left most of page
const Left = styled.div`
    padding-left: 220px;
    padding-top: 135px;
`;

//Title for who are we descrip
const Title = styled.p`
    font-size: 45px;
    color: #9ea0ac;
    font-weight: 400;
    padding-left: 450px;
`;

//Body for who are we
// can be changed at anytime. copy/pasted from srs
const Desc = styled.p`
    font-size: 25px;
    width: 1220px;
    color: #fff;
    line-height: 35px;
    font-weight: 400;
    margin-top: 30px;
   
`;

//Title for what we do
const Title1 = styled.p`
    font-size: 45px;
    color: #9ea0ac;
    font-weight: 400;
    padding-left: 500px;
    margin-top: 50px;
`;

// description for what we do
// can be changed at anytime. copy/pasted from srs
const Desc1 = styled.p`
    width: 1220px;
    color: #9ea0ac;
    font-size: 25px;
    line-height: 35px;
    margin-top: 30px;
    
`;

/* ojb for image....unavail currently
const ImgPad = styled.p`
    background-image: url(${Gifts});
    margin-left: 865px;
    padding-left: 100px;
    padding-top: 550px;
    background-position: left;
    background-repeat: no-repeat;
`;
*/

const Landing = () => {
  return (
    <Background>
    
            <Title>
            Who Are We?
            </Title>
            <Desc>
            We are a group of college students at the University of Pittsburgh,
            mostly studying Computer Science and Computer Engineering. The majority
            of us are juniors and seniors who have completed most of the curriculum.
            We have a passion for helping those in need, especially considering the
            events of 2020.
            </Desc>
            <br />

          <Title1>
          Purpose
          </Title1>
            <Desc1>
            The goal for this project is to make an impact in the world with the
            help of everyone that is willing. CharityDrop's purpose is to eliminate
            as much cost of donating as possible through the use of direct deposit.
            Our audience will be those who are charitable and those in need all over
            the world with availability to a bank and internet access.
            </Desc1>
       
    </Background>
  );
};

export default Landing;
