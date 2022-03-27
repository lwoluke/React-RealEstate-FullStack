import React, {useState, useRef, useEffect} from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSection = styled.section`
    padding: 0;
    margin: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    max-height: 1600px;
    position: relative;
    overflow: hidden;
    //transform: translateX(-5.5%); 
`;

const HeroWrapper = styled.div`
    padding: 0;
    margin: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%,
        );
    }
`;

const HeroImage = styled.img`
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    padding: 0;
    margin: 0;
    left: 0;
    right: 0;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 500;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        //padding-left: 2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: clamp(1rem, 7vw, 2rem);
        font-weight: 200;
        margin-bottom: 0.7rem;
        //padding-left: 2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css `
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #348a4b;
        transform: scale(1.06);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons};
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons};
`;

const Hero = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
            const nextSlide =() => {
                setCurrent(current => 
                    (current === length - 1 ? 0 : current + 1));
            };

            timeout.current = setTimeout(nextSlide, 200000);

            return function () {
                if(timeout.current) {
                    clearTimeout(timeout.current);
                }
            };
        }, [current, length]
    );

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current)
    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1)

        // console.log(current)
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <HeroSection>
        <HeroWrapper>
            {slides.map((slide, index) => {
                return (
                    <HeroSlide key={index}>
                        {index === current && (
                            <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt}/>
                            <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button 
                                    to={slide.path} 
                                    primary='true'
                                    css={`
                                        max-width: 160px;
                                    `}
                                >
                                    {slide.label}
                                    <Arrow />
                                </Button>
                            </HeroContent>
                        </HeroSlider>
                        )}
                    </HeroSlide>
                );
            })}
            <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;