import styled from "styled-components";

const Marquee = styled.div`
    overflow: hidden;
    position: relative;
    background-color: ${props => props.bg};
    color: ${props => props.color};

    &::before {
        content: "";
        background-image: url('https://media.graphcms.com/snjbEbWZTd2g1OLDm3uH');
        background-size: contain;
        width: 14px;
        height: 43px;
        background-repeat: no-repeat;
        display: block;
        position: relative;
        z-index: 10;
    }

    .scrolling {
    animation: marquee 10s linear infinite;
    display: block;
    min-width: 100%;
    position: absolute;
    left: 0;
    top: 14px;
    white-space: nowrap;
    }

    @keyframes marquee {
    from {
    transform: translateX(100%);
    }
    to { 
    transform: translateX(-100%);
    }
    }
`

const MarqueeScroll = ({ title, children, props }) => (

    <Marquee>
        <div className="scrolling">{ children }</div>
    </Marquee>
);

export default MarqueeScroll;


