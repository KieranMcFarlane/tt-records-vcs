import styled from "styled-components";
import Link from "next/link";

const OverlayContainer = styled.div`
    position: fixed; /* Sit on top of the page content */
    -webkit-overflow-scrolling: touch;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #111; /* Black background with opacity */
    z-index: 999; /* Specify a stack order in case you're using a different order for other elements */
    opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transition: all .4s ease-in-out;

    ul {
        position: absolute;
        font-size: 50px;
        color: white;
        bottom: 40px;
        left: 40px;
    }

    li {
        margin-bottom: 32px;
    }

    li.open {
        position: relative;
        top: -50px;

        img {
            width: 18px;
            height: auto;
            position: absolute;
            top: 73px;
            left: 15px;
            z-index: 99;
        }
    }

    li.open input[type=search] {
        height: 24px;
        margin-top: -4px;
        margin-left: 4px;
        position: relative;
        right: -20px;
        border: 1px solid black;
        display: inline;
        position: absolute;
        top: 55px;
        height: 64px;
        width: 334px;
        left: 0;
        padding-left: 36px;
        padding-left: 42px;
        font-size: 24px;
    }

    li.open input[type=search]::-webkit-input-placeholder { /* Edge */
        color: black;
        font-size: 24px;
        opacity: 1;
      }
      
      li.open input[type=search]:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
        font-size: 24px;
        opacity: 1;
      }
      
      li.open input[type=search]::placeholder {
        color: black;
        opacity: 1;
        font-size: 24px;
      }

      a.menu {
        position: relative;
        padding-right: 6px;
        color: white;
        left: -17px;
        cursor: pointer;
        margin-top: 10px;
    }

    .mobile__nav {
        display: flex;
        justify-content: space-between;
        // padding-left: 20px;
        // padding-right: 20px;
        width: 93%;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    a.menu span {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        display: block;
        position: absolute;
        right: -20px;
        top: 0;
    }

    a.menu span:after {
        content: "";
        height: 8px;
        width: 8px;
        background-color: white;
        display: block;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        opacity: 0;
    }

    a.menu:hover span:after, a.menu:active span:after {
        content: "";
        height: 8px;
        width: 8px;
        background-color: white;
        display: block;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        opacity: 1; 
    }
`

const Logo = styled.li`
    min-width: 72px;
    height: 44px;
    margin-right: 28px;

    img {
        width: 72px;
        height: 44px;
        position: relative;
        top: 2px;
        cursor: pointer;
    }
`

const Overlay = ({ show, setShow }) => (
    <OverlayContainer show={show}>
        <div className="mobile__nav">
            <Logo><Link href="/"><img src="https://media.graphcms.com/WMGtnEUQ3GYWQcKDQHdn" alt="" /></Link></Logo>
            <a onClick={() => setShow(false)} className="menu">Close<span></span></a>
        </div>

        <ul>
            <li><a href="/artists">Artists</a></li>
            <li><a target="_blank" href="https://tobagotracks.bandcamp.com/">Shop</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </OverlayContainer>
);

export default Overlay;
