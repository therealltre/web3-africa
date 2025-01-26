import { m } from "framer-motion";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Container, Stack, Typography } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
        paddingBottom: theme.spacing(15),
    },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
    ({ theme }) => ({
        zIndex: 2,
        maxWidth: 1440,
        margin: "auto",
        position: "relative",
        textAlign: "start",
        display: "flex",
        justifyContent: "start",
        padding: theme.spacing(10, 2),
        [theme.breakpoints.up("md")]: {
            textAlign: "start",
            padding: theme.spacing(15),
        },
    })
);

// ----------------------------------------------------------------------

export default function HomeFocusAreas() {
    const theme = useTheme();

    return (
        <RootStyle>
            <Container
                component={MotionViewport}
            >
                <Box
                    sx={{
                        textAlign: "start",
                        mb: { xs: 10, md: 10 },
                        position: "relative", // Ensure the blob can position itself correctly
                    }}
                >
                    <Box>
                        <m.div variants={varFade().inDown}>
                            <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                                <Typography variant="h2">Focus</Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        backgroundImage: `linear-gradient(45deg, #FF8C42, #02735E)`,
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontWeight: 600,
                                    }}
                                >
                                    Areas
                                </Typography>
                            </Stack>
                        </m.div>

                        <m.div variants={varFade().inUp}>
                            <Typography
                                variant="body1"
                                sx={{
                                    width: { xs: "100%", md: "50%" },
                                }}
                            >
                                Web 3 Africa Group is focused on shaping Africa&apos;s digital
                                future by leveraging blockchain technology, fostering policy
                                innovation, and empowering the next generation of tech leaders
                                through education. These three pillars lay the foundation for
                                Africa&apos;s position in the global decentralized economy.
                            </Typography>
                        </m.div>
                    </Box>


                    {/* Animated SVG Circle with Image */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            mt: 5,
                        }}
                    >
                        <m.div
                            animate={{
                                y: [0, -20, 0], // Move up and down
                            }}
                            transition={{
                                duration: 5, // Time to complete one cycle
                                repeat: Infinity, // Infinite looping
                                ease: "easeInOut",
                            }}
                        >
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: "block" }}
                            >
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="95"
                                    fill={'#333333'}
                                    stroke={'#333333'}
                                    strokeWidth="5"
                                />
                                <foreignObject x="25" y="25" width="180" height="180">
                                    <Image
                                        src="/assets/images/home/africa-web3.png"
                                        alt="Africa Web3"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </foreignObject>
                            </svg>
                        </m.div>
                    </Box>

                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                            position: "absolute",
                            top: 50,
                            right: 0,
                            zIndex: 1,
                            display: { xs: "none", md: "block" }, // Hide on small screens, show on medium and up
                        }}
                    >
                        <m.div
                          variants={varFade().inRight}
                        ><Image
                                src="/assets/images/home/color-blob.svg"
                                alt="blob"
                                objectFit="contain"
                                sx={{
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    height: "100%",
                                    width: "100%",
                                }}
                            /></m.div>

                    </Box>
                </Box>
            </Container>
        </RootStyle>
    );
}
