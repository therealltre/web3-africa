import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';
import LivePriceCard from './LivePriceCard';
import { alpha, useTheme, styled } from "@mui/material/styles";
import { MotionViewport, varFade } from '@/components/animate';
import { m } from "framer-motion";


const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
        paddingBottom: theme.spacing(10)
    }
}));

// const HeroImgStyle = styled(m.img)(({ theme }) => ({
//     position: "absolute",
//     top: 0,
//     left: 0,
//     zIndex: -1,
//     width: "500px",
//     height: "500px",
//     objectfit: "contain",
//     // backgroundColor: "#060606"
// }));

//------------------------------------------------------------

const HomeCryptoPrices = () => {
    const [prices, setPrices] = useState(null);
    const [loading, setLoading] = useState(true);

    const [lastFetched, setLastFetched] = useState(null);

    const fetchPrices = async () => {
        const now = Date.now();
        if (lastFetched && now - lastFetched < 300000) { // 5 minutes in ms
            // Skip API call if last fetch was within 5 minutes
            return;
        }

        setLoading(true);
        try {
            const { data } = await axios.get(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,telos&vs_currencies=usd'
            );
            setPrices({
                bitcoin: { usd: data.bitcoin.usd },
                ethereum: { usd: data.ethereum.usd },
                telos: { usd: data.telos?.usd || 0 },
            });
            setLastFetched(now);
        } catch (error) {
            console.error('Failed to fetch crypto prices:', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchPrices();
        const interval = setInterval(fetchPrices, 300000); // Update every 5 minutes
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <RootStyle>
            <Container
                component={MotionViewport}
                sx={{
                    textAlign: "start",
                    mb: { xs: 10, md: 2 },
                    backgroundImage: `url('/assets/images/home/bitcoin-bg.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "100%",
                    backgroundPosition: "right"
                }}
            >
                {/* <HeroImgStyle
                    alt="hero"
                    src="/assets/images/home/bitcoin-bg.png"
                    // src="/assets/images/home/bg-african-pattern.png"
                    // src="/assets/images/home/hero2.png"
                    variants={varFade().inUp}
                /> */}

                <Box
                    sx={{
                        textAlign: "start",
                        mb: { xs: 10, md: 5 }
                    }}
                >
                    <m.div variants={varFade().inDown}>
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={1}
                        // sx={{ justifyContent: "start" }}
                        >
                            <Typography variant="h2">Current</Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    backgroundcolor: "primary",
                                    backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: 600
                                }}
                            >
                                Crypto Prices
                            </Typography>
                        </Stack>
                    </m.div>
                </Box>



                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <m.div variants={varFade().inDown}>
                            <LivePriceCard
                                name="Bitcoin"
                                symbol="BTC"
                                price={prices?.bitcoin?.usd ?? null}
                                loading={loading}
                                logoUrl="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                            />
                        </m.div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <m.div variants={varFade().inUp}>
                            <LivePriceCard
                                name="Ethereum"
                                symbol="ETH"
                                price={prices?.ethereum?.usd ?? null}
                                loading={loading}
                                logoUrl="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                            />
                        </m.div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <m.div variants={varFade().inDown}>

                            <LivePriceCard
                                name="Telos"
                                symbol="TLOS"
                                price={prices?.telos?.usd ?? null}
                                loading={loading}
                                logoUrl="/assets/images/partnership/telos.png"
                            />
                        </m.div>
                    </Grid>

                </Grid>
            </Container>
        </RootStyle>
    );
};

export default HomeCryptoPrices;
