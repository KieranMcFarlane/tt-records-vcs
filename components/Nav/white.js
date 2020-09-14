import styled from "styled-components";
import Link from "next/link";
import React, {useState} from "react";

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    background-image: url('https://media.graphcms.com/d4URSZThCWaS34X0HMdQ');
    background-color: white;
    background-size: cover;
    flex-direction: column;
    padding-bottom: 40px;
    border-bottom: 1px solid #111;

    @media screen (max-width: 1000px) {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const NavContainer = styled.div`
    display: flex;
    width: 93%;
    justify-content: space-between;f<li className=""><a href="#">Search</a><img src="https://media.graphcms.com/eDrHGLAQbW1Px8TAEVKg" /><input type="search" /></li>
    background-color: transparent;
    margin: 0 auto;
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


const Menu = styled.div`
    display: flex;
`

const MobileFilter = styled.div`

@media only screen and (min-width: 1099px) {
    display: none;
}
    display: flex;
    width: 100%;
    background-color: purple;
    color: white;
    padding-left: 24px;
    background-color: white;
    height: auto;
    color: white;
    position: absolute;
    top: 90px;
    padding-bottom: 32px;
    padding-right: 20px;
    border-bottom: 1px solid white;
        opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    z-index: 1;

form {
    height: 100%;
    display: block;
    min-width: 100%;

    @media only screen and (min-width: 1100px) {
        display: flex;
    }
}

label {
    display: flex;
    flex-direction: row-reverse;
    vertical-align: middle;
    padding-right: 40px;
    margin-top: 14px;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    margin-top: 30px;
    color: #111;

    &:hover > span {
        background: #ccc;   
    }
}

label input[type="radio"] {
    display: none;
}

label:last-of-type {
    padding-right: 40px;
}

label span {
    width: 15px;
    height: 15px;
    border: 1px #111 solid;
    display: block;
    position: absolute;
    right: 10px;
    top: 1px;
}

label span:after {
    content: "";
    top: 2px;
    left: 2px;
    width: 9px;
    height: 9px;
    background: #000;
    position: absolute;
    opacity: 0;
}

@media only screen and (min-width: 1148px and max-width: 1200px) {
    width: 576px;
}

    label input[type="radio"]:checked ~ span:after {
        opacity: 1;
    }
    
    label input[type="radio"]:checked ~ span {
        background-color: white;
    }
`


const MenuPages = styled.ul`
    text-align: left;
    vertical-align: top;
    display: flex;
    justify-content: space-around;
    padding-right: 24px;
    border-left: none;
    background-color: #111;
    border-right: none;
    padding-left: 24px;
    border: 1px solid black;
    border-right: none;
    height: 45px;
    display: none;

    @media only screen and (min-width: 1100px) {
        display: flex;
    }

    @media only screen and (max-width: 1148px) {
        padding-left: 0;
        padding-right: 0;
    }

    .menu__link {
        margin-top: 14px;
        padding-left: 12px;
        padding-right: 12px;
        color: white;
        cursor: pointer;
    }

    li {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        padding-top: 14px;
    }

    a {
        text-decoration: none;
        color: white;
    }
    
    input[type=search] {
        display: none;
    }

    li img {
        display: none;
    }

    li.open {
        position: relative;

        img {
            width: 18px;
            height: auto;
            position: absolute;
            top: 65px;
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
        height: 45px;
        width: 334px;
        left: 0;
        padding-left: 36px;
        font-size: 18px;
    }

    li.open input[type=search]::-webkit-input-placeholder { /* Edge */
        color: black;
      }
      
      li.open input[type=search]:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
      }
      
      li.open input[type=search]::placeholder {
        color: black;
        opacity: 1;
        font-size: 18px;
      }

`

const MobileMenuPages = styled.ul`
    display: none;

    @media only screen and (max-width: 1099px) {
        display: flex;
        color: white;
        font-size: 18px;
        margin-top: 10px;
        
        a.menu {
            position: relative;
            padding-right: 6px;
            color: #111;
            background-color: white;
            padding-left: 6px;
        }
        }

        a.menu span {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid #111;
            display: block;
            position: absolute;
            right: -20px;
            top: 0;
        }

        a.menu span:after {
            content: "";
            height: 8px;
            width: 8px;
            background-color: #111;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
            opacity: 0;
        }

        a.menu:hover span:after, a.menu:active span:after, a.menu:focus span:after {
            content: "";
            height: 8px;
            width: 8px;
            background-color: #111;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
            opacity: 1; 
        }

        a.filter{
            position: relative;
        }

        a.filter:after {
            content: "";
            background-color: white;
            width: 1px;
            height: 12px;
            position: absolute;
            top: 3px;
            right: -16px;
        }

        li.filter:after {
            width: 100px;
            height: 100px;
            background: red;
            border-radius: 50%
            content: "";
        }

        li {
            padding: 0 1rem;
        }
    }

`

const NavHub = styled.div`
display: none;
width: 560px;
border: 1px solid black;
border-left-color: black;
border-left-style: solid;
border-left-width: 1px;
border-left: none;
background-color: white;
height: 45px;

@media screen and (min-width: 1100px) {
    width: 620px;
    display: block;
}
&:before {
    content: "";
    background-color: white;
    background-size: contain;
    width: 14px;
    height: 43px;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    z-index: 9;
}

form {
    display: flex;
    justify-content: space-between;
    text-align: left;
    verticle-align: top;
    padding-right: 24px;

    &::before {
        content: "";
        background-image: url('https://media.graphcms.com/snjbEbWZTd2g1OLDm3uH');
        background-size: contain;
        width: 14px;
        height: 43px;
        background-repeat: no-repeat;
        display: block;
        position: relative;
        z-index: 9;
    }

    @media only screen and (min-width: 1100px) {
        display: flex;
    }
}

label {
    display: inline-block;
    vertical-align: middle;
    padding-left: 30px;
    margin-top: 14px;
    position: relative;
    cursor: pointer;

    &:hover > span {
        background: #ccc;   
    }
}

label input[type="radio"] {
    display: none;
}


label span {
    width: 15px;
    height: 15px;
    border: 1px #111 solid;
    display: block;
    position: absolute;
    left: 0;
    top: -1px;


}

label span:after {
    content: "";
    top: 2px;
    left: 2px;
    width: 9px;
    height: 9px;
    background: #111;
    position: absolute;
    opacity: 0;
}

@media only screen and (min-width: 1148px and max-width: 1200px) {
    width: 576px;
}

    label input[type="radio"]:checked ~ span:after {
        opacity: 1;
    }
    
    label input[type="radio"]:checked ~ span {
        background-color: white;
    }
`




const NavWhite = ({title, children, setShow, changeCategory , filters}) => {

    const [filterOpen, setFilterOpen] = useState(false);

    console.log(filterOpen)
    return (
        <NavWrapper>

            <NavContainer>

                <Logo><a href="/"><svg width="72" height="44" viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.7058 40.8311C42.6871 39.3325 42.6488 36.8519 42.6379 36.5567C42.6277 36.2908 42.4495 31.9013 42.31 31.9216C40.2302 32.2188 37.9381 32.0712 35.8038 32.4715C35.9979 35.3481 36.1321 38.1763 36.237 40.9803C36.237 40.9803 42.7058 40.8391 42.7058 40.8311ZM22.4927 6.47057C21.0725 6.56467 19.5176 6.50561 18.1176 6.82608C18.2774 7.05481 18.5126 7.28 18.6978 7.49968C20.0986 9.16105 21.4155 10.8886 22.8627 12.5098L22.4927 6.47057ZM34.1443 30.961C33.8401 30.5984 33.5422 30.2305 33.242 29.8647C32.6682 29.1654 32.0967 28.4641 31.5186 27.768C30.6979 26.7807 29.8685 25.8014 29.0292 24.8297C28.1734 23.8393 27.4561 22.6216 26.2004 22.1379C24.9743 21.6655 23.9307 21.2377 22.6169 21.0688C22.1384 21.0073 21.6455 20.9262 21.2073 20.7141C20.6801 20.4593 20.4748 20.0388 20.0804 19.637C19.7144 19.264 19.4624 18.861 19.131 18.4684C18.8096 18.0878 18.477 17.7168 18.1572 17.335C17.5081 16.559 16.8701 15.7603 16.2133 14.9819C14.3396 12.7601 12.4228 10.5703 10.7046 8.22318L10.3529 7.76469C10.4056 10.1658 10.662 13.0712 10.8111 15.8697C11.8538 17.0946 12.8938 18.3223 13.9185 19.5623C14.4054 20.1518 14.8803 20.7517 15.368 21.3404C15.7588 21.8124 15.8999 22.1859 16.5144 22.4139C16.9458 22.5741 17.2401 22.6707 17.6971 22.7254C19.198 22.9059 20.7467 23.0996 22.2145 24.2115C22.6619 24.5498 22.955 24.91 23.3203 25.3258C23.6975 25.7555 24.0348 26.2068 24.4256 26.6325C25.8639 28.3191 27.283 30.0221 28.6834 31.7402C29.2022 32.3764 29.7182 33.015 30.2342 33.6536C30.9352 34.5207 31.6362 35.3881 32.3372 36.2556C32.8807 36.9281 33.4242 37.6003 33.9677 38.2728C34.3911 38.7968 34.8748 39.3695 35.3725 40.1176L35.3721 39.1567C35.3346 38.524 35.3111 37.8898 35.2724 37.2584C35.1619 35.4724 35.1348 33.6536 34.9346 31.8792L34.1443 30.961ZM6.57174 15.9607C8.01291 15.8494 8.07377 15.9118 9.90039 15.7252C10.0104 15.7141 9.65655 12.3015 9.63627 11.9936C9.58165 11.1693 9.53678 10.3442 9.5005 9.51909C9.47046 8.82965 9.47436 8.14976 9.41779 7.33341C8.3215 7.32983 7.18035 7.42611 6.0392 7.52596C6.13362 10.1958 6.28928 13.2647 6.57174 15.9607ZM4.30405 6.71358C3.98262 6.39826 3.67259 6.07151 3.36099 5.74635C3.02385 5.3948 2.68552 5.04405 2.32991 4.71101C2.12833 4.52244 1.75897 4.17799 1.29412 3.88234C1.29372 4.58858 1.3672 5.35937 1.4289 6.07073C1.59354 7.96819 1.66466 9.85581 1.72557 11.76L2.82541 12.8103C3.31973 13.2146 3.78222 13.6582 4.20699 14.1357C4.37596 14.3259 4.53981 14.5219 4.72803 14.6936C4.87892 14.8313 4.99877 14.9833 5.15359 15.1112C5.27737 15.214 5.37757 15.3608 5.60783 15.5293C5.53946 15.5478 5.27462 11.8737 5.26401 11.5643C5.23296 10.642 5.16852 9.72118 5.10526 8.80079C5.07775 8.3961 5.07107 8.04889 5.07107 7.43477L4.30405 6.71358ZM43.392 33.3443C43.4064 34.4035 43.4064 34.4035 43.4763 35.8701C43.579 38.027 43.5938 39.5877 43.5314 41.5865C43.5314 41.5865 35.6693 41.8454 35.6669 41.843C35.0526 41.2116 34.4115 40.3928 34.2318 40.1575C33.558 39.2752 32.857 38.4128 32.184 37.5292C31.9179 37.2567 31.6815 36.957 31.445 36.6581C29.6868 34.4379 27.8998 32.241 26.0844 30.0677C25.1766 28.9813 24.2615 27.9004 23.3396 26.826C22.5136 25.8628 21.7747 24.7275 20.6116 24.1673C19.7041 23.7307 18.7 23.581 17.7142 23.4398C17.3104 23.3817 16.9086 23.3093 16.5072 23.2369C16.1313 23.1692 15.7079 23.1464 15.3992 22.9067C15.2378 22.7811 15.1248 22.605 15.0114 22.4341C14.3962 21.5066 13.6505 20.7198 12.9332 19.8795C12.1343 18.9435 11.3687 17.9783 10.5962 17.0203C10.5071 16.9102 10.333 16.787 10.2683 16.6693C8.73329 16.8478 7.2822 16.8466 5.76601 16.9903C3.93867 15.2319 2.44284 13.6477 0.637872 11.9766C0.448547 8.51193 0.241249 5.0745 0 1.99642C0.424582 1.94599 0.815214 1.97401 1.24978 1.9488C1.73148 1.92078 2.21278 1.89317 2.69448 1.86516L5.58387 1.69789C7.51027 1.58665 9.43667 1.475 11.3627 1.36335C11.8903 1.33054 18.2203 0.862743 18.2203 0.862743C18.2203 0.862743 18.517 1.22089 18.805 1.51021C19.093 1.79953 19.4097 2.04924 19.7049 2.32455C20.7123 3.26414 21.5826 4.18333 22.5616 5.15013C22.5763 5.16494 22.5907 5.18094 22.6035 5.19775L23.2074 5.98448L23.2581 7.52352C23.2865 8.20821 23.3209 8.89249 23.3624 9.57678C23.4023 10.2322 23.4491 10.8877 23.5042 11.5424C23.5421 11.9954 23.467 12.7113 23.7235 13.1062C23.8585 13.3143 24.0917 13.51 24.2507 13.7313C24.4097 13.9534 24.5702 14.1743 24.7456 14.3836L27.2599 17.3856C27.464 17.6289 27.6733 17.8774 27.9461 18.0403C28.4342 18.332 29.0385 18.3052 29.6037 18.3644C30.5507 18.4633 31.4482 18.8222 32.3317 19.178C33.3243 19.5773 33.9925 20.0479 34.6855 20.8571C35.2655 21.5342 35.8614 22.1972 36.4346 22.8807C36.9678 23.5174 37.4918 24.1613 38.0159 24.8051C39.4861 26.6119 40.95 28.4214 42.4354 30.2154L43.2195 31.4055L43.392 33.3443ZM64.7057 36.9908L65.2289 38.111L67.0348 41.4117L67.1785 37.5746L69.5498 31.924C69.5498 31.924 69.8822 31.3185 69.8822 30.8867C69.8822 30.4554 69.4191 29.9806 69.4191 29.9806C68.9354 29.4485 68.4518 28.916 67.9681 28.3836C67.6444 28.0273 67.2942 27.6192 66.8358 27.1764L66.9242 30.4554C66.9392 30.6525 66.9428 30.8516 66.938 31.0495C66.9294 31.4042 66.9523 31.6771 66.8389 32.0145L64.7057 36.9908ZM66.4312 31.497C66.4296 31.2483 66.4316 30.5643 66.43 30.3152C66.4263 29.6975 66.4226 29.0795 66.4189 28.4618L66.3669 26.3137L65.6438 26.3262L62.8675 26.4967C62.7859 26.5146 62.9565 28.7368 62.9639 28.9236C63.0018 29.8433 63.0393 30.7631 63.0772 31.6829C63.1019 32.2908 63.1514 32.951 62.879 33.5281C62.6009 34.117 62.701 33.8363 62.0936 35.1526C61.9915 35.3746 61.8007 35.6694 61.6861 35.9262L64.4159 36.2352L66.4312 31.497ZM49.853 35.3725C51.4918 35.2902 52.6564 35.2949 54.3528 35.109C53.0091 33.1433 51.0975 31.1064 49.6077 29.3333L49.853 35.3725ZM61.4563 34.4276C61.5571 34.2179 61.7226 33.9329 61.8061 33.7164C61.9676 33.2983 62.1363 33.0385 62.1158 32.5767C62.0315 30.6488 61.9688 28.7082 61.9363 26.7779C61.1164 25.5821 60.826 24.9138 60.1576 24.0731C59.3559 23.0645 58.5409 22.0675 57.7198 21.0745C57.3941 20.6805 57.0679 20.286 56.7417 19.8919C56.6148 19.738 56.4875 19.5841 56.3605 19.4305C56.1456 19.1707 55.9311 18.911 55.7154 18.652C55.0466 17.849 54.3835 17.0368 53.6982 16.2499C53.1913 15.6674 52.6852 15.0837 52.1879 14.4932C51.7617 13.9873 51.2873 13.5363 50.731 13.1543C50.4659 12.9719 50.1405 12.7418 49.8312 12.6299C49.3725 12.4644 48.9475 12.3926 48.4731 12.2611C47.9393 12.1136 47.3862 12.0579 46.8395 11.9769C46.3772 11.9087 45.8984 11.8442 45.471 11.6433C45.2557 11.5419 45.056 11.4072 44.8946 11.2312C43.745 9.97687 42.6942 8.61627 41.6076 7.30418C40.781 6.30598 39.9298 5.28012 39.1063 4.26027C38.4179 3.40719 37.7386 2.58538 37.1 1.72549C37.0935 1.79684 37.104 2.12918 37.1124 2.20454L37.2425 4.3172C37.3566 5.80809 37.4478 7.30499 37.4566 8.80068L37.5426 10.1272C37.9306 10.6708 38.8392 11.4646 39.2622 11.9765C39.5136 12.2804 39.7426 12.6023 40.0085 12.8941C40.1451 13.0436 40.2953 13.2124 40.4668 13.3231C40.6255 13.4257 40.803 13.5059 41.179 13.5684C42.1824 13.6309 42.5732 13.7472 43.3577 13.9236C44.1201 14.0948 44.815 14.4555 45.5441 14.7217C47.0399 15.2681 47.8152 16.6384 48.7893 17.7849C50.0317 19.2477 51.2672 20.7161 52.4952 22.191C53.7151 23.6562 54.9249 25.1295 56.1304 26.6063C57.278 28.0126 58.5284 29.3816 59.5756 30.8637C60.0303 31.5075 60.4255 32.193 60.7545 32.909C61.0269 33.5019 61.0875 34.2905 61.1301 34.9411L61.4563 34.4276ZM36.5812 7.47024L36.1982 0.862743C34.0765 1.03319 31.8278 1.03925 29.7688 1.34703C29.7545 1.83818 29.7767 2.37052 29.8395 3.32213L30.3067 9.92155C32.3954 9.90862 34.4703 9.75796 36.6666 9.50795L36.5812 7.47024ZM29.3078 0.537082C29.5436 0.508165 29.7798 0.482058 30.0164 0.458362C30.4731 0.412977 30.9314 0.376429 31.3894 0.345101C32.3016 0.282848 33.2151 0.241881 34.1278 0.190472C34.9534 0.144284 35.7791 0.0908671 36.6011 9.78509e-05C36.7094 -0.0115495 37.4344 1.02025 37.5435 1.14917C40.2694 4.37188 42.4589 7.35843 45.2366 10.535C45.3481 10.6627 45.4607 10.7916 45.5971 10.892C45.812 11.0498 46.0735 11.1294 46.3325 11.1912C47.6674 11.5105 48.9161 11.5165 50.1969 12.0439C50.6464 12.229 51.1389 12.5439 51.9392 13.1548C52.4417 13.5388 52.8688 14.1533 53.2798 14.6288C53.7786 15.2056 54.2738 15.7855 54.7667 16.3671C55.7527 17.5314 56.7295 18.7034 57.7068 19.8745C58.5312 20.8626 59.3777 21.8337 60.1484 22.8647C60.5278 23.372 60.8678 23.7816 61.2171 24.3106C61.4585 24.6761 61.7087 25.1147 62.2067 25.9047L66.8543 25.6693C67.3415 26.2433 67.3391 26.3099 67.6074 26.5798C67.9438 26.9184 68.2518 27.2899 68.5782 27.6385C69.0373 28.1297 69.5009 28.6169 69.9797 29.0892C71.0343 30.1299 71.1598 30.6942 71.1598 30.6942C71.2224 31.0701 71.0952 31.3777 70.979 31.6653C70.6561 32.4618 70.3426 33.1907 69.9765 33.9711L68.2883 38.1208L68.2181 39.9093C68.1632 41.8194 68.1764 43.1456 68.1764 43.1456L60.0811 43.6469C58.4594 43.7545 56.8366 43.8501 55.2134 43.934C53.6667 44.0135 51.8899 44.0135 50.4872 43.9738C50.1973 43.9658 50.2406 43.346 50.2258 43.15C50.1913 42.6918 50.164 42.2327 50.1448 41.7732C50.1079 40.8937 50.0923 40.0101 50.1187 39.1297C50.1384 38.477 50.2827 37.7127 49.8512 37.1544C49.5244 36.7307 48.9482 36.4909 48.9514 36.2255C48.9514 36.2255 48.9434 36.0247 48.9458 35.286C48.9494 34.1643 48.9073 33.0437 48.8403 31.9244C48.8071 31.3641 48.7662 30.8042 48.7389 30.2435C48.7164 29.7845 48.7774 29.2917 48.5917 28.8583C48.5039 28.6523 48.0849 28.1996 47.9469 28.0277C45.6095 25.1131 43.5837 22.4643 41.1043 19.6685C40.4363 18.9154 39.7397 17.9126 38.785 17.5109C37.9537 17.1615 37.1004 16.8655 36.2314 16.6257C35.4194 16.4016 34.5585 16.4012 33.7601 16.1177C33.6462 16.0771 33.5355 16.0261 33.43 15.9658C33.1445 15.802 33.0475 15.557 32.8582 15.3072C32.527 14.8694 32.1886 14.4372 31.8433 14.0107C31.3749 13.4327 30.8941 12.8652 30.4009 12.3086L29.1703 10.6631L29.0055 8.58542C28.967 7.7942 28.9012 6.81542 28.8571 6.0242C28.8034 5.05707 28.6642 3.91964 28.6069 2.95251L28.4705 0.625442L29.3078 0.537082Z" fill="#111111"/></svg></a></Logo>

                <Menu>
                    <MenuPages>
                        <li><Link href="/artists"><span className="menu__link">Artists</span></Link></li>
                        <li><a target="_blank" href="https://tobagotracks.bandcamp.com/">Shop</a></li>
                        <li><Link href="/about"><span className="menu__link">About</span></Link></li>
                    </MenuPages>

                    <MobileMenuPages>
                        {filters && (
                        <li><a className="filter" href="#" onClick={() => setFilterOpen(!filterOpen)}>Filter</a></li>
                        )}
                        <li><a className="menu" href="#" onClick={() => setShow(true)}>Menu<span></span></a></li>
                    </MobileMenuPages>

                    <NavHub title="">
                        {children}
                    </NavHub>

                </Menu>
            </NavContainer>

            {filters && (
            <MobileFilter show={filterOpen}>
                <form>
                    {filters.map(v => (
                        <label key={v.value}>
                            <input type="radio" value={v.value} name="filter" onChange={changeCategory} />
                            {v.label}
                            <span/>
                        </label>
                    ))}
                </form>
            </MobileFilter>
            )}

        </NavWrapper>
    );
}


export default NavWhite;