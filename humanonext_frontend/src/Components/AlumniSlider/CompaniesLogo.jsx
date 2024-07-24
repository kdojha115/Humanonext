import React from "react";
import styled, { keyframes, css } from "styled-components";
import { AlumniSliderData } from "./AlumniSliderData";
import './AlumniSlider.css'


const CompaniesLogo = () => {

    const row1 = [
        "./Image/AlumniImages/1.png",
        "./Image/AlumniImages/2.png",
        "./Image/AlumniImages/3.png",
        "./Image/AlumniImages/4.png",
        "./Image/AlumniImages/5.png",
        "./Image/AlumniImages/6.png",
        "./Image/AlumniImages/7.png",
        "./Image/AlumniImages/8.png",
        "./Image/AlumniImages/9.png",
        "./Image/AlumniImages/10.png",
        "./Image/AlumniImages/11.png",
        "./Image/AlumniImages/12.png",
        "./Image/AlumniImages/13.png",
        "./Image/AlumniImages/14.png",
        "./Image/AlumniImages/15.png",
        "./Image/AlumniImages/16.png",
        "./Image/AlumniImages/17.png",
        "./Image/AlumniImages/18.png",
        "./Image/AlumniImages/19.png",
        "./Image/AlumniImages/20.png",
      ];
      const row2 = [
        "./Image/AlumniImages/1.png",
        "./Image/AlumniImages/2.png",
        "./Image/AlumniImages/3.png",
        "./Image/AlumniImages/4.png",
        "./Image/AlumniImages/5.png",
        "./Image/AlumniImages/6.png",
        "./Image/AlumniImages/7.png",
        "./Image/AlumniImages/8.png",
        "./Image/AlumniImages/9.png",
        "./Image/AlumniImages/10.png",
        "./Image/AlumniImages/11.png",
        "./Image/AlumniImages/12.png",
        "./Image/AlumniImages/13.png",
        "./Image/AlumniImages/14.png",
        "./Image/AlumniImages/15.png",
        "./Image/AlumniImages/16.png",
        "./Image/AlumniImages/17.png",
        "./Image/AlumniImages/18.png",
        "./Image/AlumniImages/19.png",
        "./Image/AlumniImages/20.png",
      ];
      
    return (

  
      <AppContainer>
        <div>
          <div>Who Trusted On Us ?</div>
          <Marquee autoFill>
            
            {row1.map((el) => (
              <div className="m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer">
                <img className="" src={el} alt="logo" />
              </div>
            ))}
            
          </Marquee>
        </div>
        {/* <Wrapper>
            <Text>Who Trusted On Us ?</Text>
            <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <div className="ImageGroup">
                <img className="ImageGroup" src={el} alt="logo" />
              </div>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} alt="logo" />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} alt="logo" />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
        </Wrapper> */}
      </AppContainer>
    )
}

export default CompaniesLogo

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(120rem, 100rem + 800vmin, 900rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;