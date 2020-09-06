import styled from "styled-components";

const EventWrapper = styled.section`
position: relative;
@media only screen and (min-width: 800px) {
    margin-bottom: 59px;
}

margin-bottom: 38px;

&:after {
    content: "";
    background: url('data:image/svg+xml;utf8,<svg width="332" height="1" viewBox="0 0 332 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.14474 0.5H331.145" stroke="black" stroke-linecap="square" stroke-dasharray="1 2"/></svg>');
    min-width: 100%;
    display: block;
    height: 20px;
    background-repeat: repeat-x;
    margin-top: 30px;
    position: absolute;
    left: 0;
    bottom: -30px;
}

@media only screen and (min-width: 800px) {
    display: flex;

    img {
        max-width: 418px;
    }
}

    .text__container {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        p.text {
            font-family: 'Nimbus Sans L';
            font-weight: regular;
            font-size: 16px;
            letter-spacing: -0.48px;
            line-height: 24px;
        }
    }
    
    .subtitle {
        font-family: 'Nimbus Sans L';
        font-weight: regular;
        font-size: 32px;
        letter-spacing: -0.96px;
        line-height: 48px;
    }
    .title {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 38px;
        letter-spacing: -1.14px;
        line-height: 45px;
    }
    .content__container {
        position: relative;
    }

    .category {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 16px;
        letter-spacing: -0.48px;
        line-height: 24px;
        display: inline-block;
        background: #111;
        color: white;
        padding: 0 3px;
        position: relative;
        margin-right: 10px;

        &:after {
            content: "\u25AA";
            display: inline-block;
            color: black;
            position: absolute;
            right: -10px;
        }   
    }

    date {
        display: inline-block;
    }

    @media only screen and (min-width: 800px) {
        .text__container {
            flex-direction: column;
            align-content: center;
            justify-content: center;
            margin-left: 70px;
        }        
    }
`

const CompactContainer = styled.div`

    min-width: 100%;
    margin-bottom: 0;

    .text__container {
        display: flex;
        flex-direction: column;   
        justify-content: space-between;
        min-width: 100%;
        align-content: center;
        padding-bottom: 10px;   
        margin-left: 0;

        @media only screen and (min-width: 1000px) {
            flex-direction: row;  
            padding-bottom: 0;
        }
    }

    h2.subtitle {
        font-size: 24px;
        line-height: 14px;
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.96px;
        line-height: 32px;
    }

    h2.title {
        font-size: 24px;
        line-height: 14px;
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.96px;
        line-height: 32px;
        margin-bottom: 8px;

        @media only screen and (min-width: 1000px) {
            display: flex;
            align-content: center;
            justify-content: center;
        }
    }

    .content__container {
        font-size: 12px;
        line-height: 14px;
        position: relative;
    }

    .category {
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.48px;
        line-height: 24px;
        display: inline-block;
        background: #111;
        color: white;
        padding: 0 3px;
        position: relative;
        margin-right: 10px;

        &:before {
            content: "\u25AA";
            display: inline-block;
            color: black;
            position: absolute;
            left: -10px;
        }
    }

    .category__mobile {     
        display: inline-block;
        margin-right: 18px;


        &:after {
            content: "\u25AA";
            display: inline-block;
            color: black;
            position: absolute;
            right: -10px;
        }

        &:before {
            display: none;
        }
    }

    .category__desktop {
        display: none;

        &:after {
            display: none;
        }
    }

    @media only screen and (min-width: 1000px) {
        .category__desktop {
            display: inline-block;
        }

        .category__mobile {
            display: none;
        }
    }

    date {
        display: inline-block;
        font-size: 16px;
        margin-right: 14px;
    }

    `




const Event = () => {
    return <EventWrapper>
    <div class="image__container">
        <img src="https://media.graphcms.com/thtBariSoCmqB6SjNis4" alt="tt and nts album" />
    </div>
    <div class="text__container">
        <div class="content__container">
            <p class="category">Event</p>
            <date class="date">Added March 20th 2020</date>
        </div>
        <h2 class="title">Thammudu & Mishti - Matters of Ascension Release Party</h2>
        <p class="text">Join us in the Four Quarters basement to celebrate the release of 'Matters of Ascension' by Thammudu and Mishti.</p>
    </div>
    <CompactContainer>
            <div className="text__container">
                <h2 className="title">Thammudu & Mishti - Matters of Ascension Release Party</h2>
                <div className="content__container">
                    <p className="category category__mobile">Event</p>
                    <date className="date">Added March 20th 2020</date>
                    <p className="category category__desktop">Event</p>
                </div>
            </div>
        </CompactContainer>
    </EventWrapper>
}

export default Event
