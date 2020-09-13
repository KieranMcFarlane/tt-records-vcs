import Head from 'next/head'
import Nav from "../../components/Nav";
import Overlay from "../../components/Nav/Overlay";
import Marquee from "../../components/Marquee";
import ArtistList from "../../components/ArtistList/";
import FooterWrapper from "../../components/Footer";
import styled from "styled-components";
import React  from 'react';
import {initializeApollo} from "../../utilites";
import {GetArtistsDocument, useGetArtistsQuery} from "../../schema";
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled.div`
background-color: #111;
padding-bottom: 3rem;
flex: 1;
display: flex;
align-content: center;
justify-content: center;
flex-direction: column;

`

const ContainerWrapper = styled.div`
    min-width: 100%;
    max-width: 1140px;
    padding: 0 1rem;
    margin: 0 auto;
    
    a {
        position: relative;
        &:hover {
            &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background-color: white;
            }
        }
    }

  p {
        color: white;
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        letter-spacing: -1.44px;
        line-height: 54px;
        font-size: 36px;
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: 36px;
        }
    }

  @media screen and (min-width: 800px) {

    padding-left: 44px;

    p {
        font-weight: 400;
        font-size: 48px;
        letter-spacing: -1.44px;
        line-height: 54px;
        margin-bottom: 16px;
    }

  }
`

const Artists = () => {
    const {data, loading} = useGetArtistsQuery()
console.log(data)

    if (!data || loading) return <>Loading</>

    return (
        <>
            <Head>
                <title>TT records | Homepage</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Nav>
            <Marquee>Reading: About TT Records</Marquee>
            </Nav>
            <Overlay/>
   
            <Wrapper>
                <ContainerWrapper>
                <AnimatePresence>
            <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{opacity: 0}}>
                <p>Label and occasional function</p>
                <p>Run by <a target="_blank" href="https://soundcloud.com/djpitchdj">@djpitchdj</a> + <a href="https://soundcloud.com/gribsss">@gribsss</a></p>
                <p>General inquiries - <a target="_blank" href="info.TT.label@gmail.com">info.TT.label@gmail.com</a></p>
                <p>Demos - <a target="_blank" href="demos.TT.label@gmail.com">demos.TT.label@gmail.com</a></p>
                </motion.div>
            </AnimatePresence>
                </ContainerWrapper>
            </Wrapper>
     
            <FooterWrapper/>
        </>
    )
}


export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: GetArtistsDocument,
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        revalidate: 1,
    }
}

export default Artists;