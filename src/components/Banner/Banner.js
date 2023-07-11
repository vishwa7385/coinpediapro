import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({

    Banner:
    {
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./banner.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
        color: "white",
        fontFamily: "Montserrat",
    },
    '@keyframes fadeIn': {
        '0%': {
            transform: 'scale(0)',
            opacity: 0,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 1,
        },
    },
    '@keyframes slide': {
        '0%': { backgroundPosition: '0 0' },
        '100%': { backgroundPosition: '-2000px 0' },
    },
    BannerContent:
    {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },

}));


const Banner = () => {

    const classes = useStyles();
    return (
        <div className={classes.Banner}>
            <Container className={classes.BannerContent}>
                <div className={classes.tagline}>
                    <Typography variant='h2'
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",

                        }}>
                        Coinpedia-Pro
                    </Typography>
                    <Typography variant='subtitle2'
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",

                        }}>
                        Get all the Info regarding your favourite Crypto currency
                    </Typography>

                </div>

                <Carousel />

            </Container>
        </div>
    )
}

export default Banner
