import { m } from "framer-motion";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    backgroundColor: theme.palette.background.default,
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
const CARDS = [
    {
        backgroundImage: "/assets/images/home/blockchain-development.svg",
        title: "Leveraging Blockchain Technology for Economic Transformation",
        href: "#1",
        description: {
            intro:
                "Africa is poised to leapfrog traditional financial and digital infrastructures through decentralized solutions that promote transparency, financial inclusion, and cross-border connectivity. Web 3 Africa Group is at the forefront of:",
            points: [
                "Building blockchain-based infrastructure that facilitates secure, transparent, and borderless transactions.",
                "Supporting DeFi solutions that provide alternative financial access for the unbanked and underbanked populations.",
                "Advancing digital identity and ownership through blockchain-powered verification systems and tokenized assets."
            ],
            closing:
                "By harnessing the potential of smart contracts, decentralized applications (dApps), and digital assets, we are laying the groundwork for Africa’s next economic revolution."
        }
    },
    {
        backgroundImage: "/assets/images/home/digital-assets.svg",
        title: "Fostering Policy Innovation for a Progressive Web 3 Ecosystem",
        href: "#2",
        description: {
            intro:
                "Regulation and policy play a crucial role in the widespread adoption and legitimacy of blockchain technology across Africa. We work closely with governments, regulatory bodies, and industry stakeholders to:",
            points: [
                "Advocate for clear, forward-thinking blockchain regulations that foster innovation while ensuring security and compliance.",
                "Educate policymakers on the benefits of decentralized technologies for economic growth, governance, and financial stability.",
                "Facilitate partnerships between Web 3 projects, institutions, and regulatory bodies to create sustainable ecosystems."
            ],
            closing:
                "Through strategic engagement, we aim to ensure that Africa does not just adopt Web 3, but helps define its future."
        }
    },
    {
        backgroundImage: "/assets/images/home/blockchain-education.svg",
        title: "Empowering the Next Generation of Tech Leaders Through Education",
        href: "#3",
        description: {
            intro:
                "Education is the key to unlocking Africa’s Web 3 potential. Without widespread knowledge, innovation remains limited. That’s why Web 3 Africa Group is committed to bridging the knowledge gap by:",
            points: [
                "Developing Web 3 education programs tailored for entrepreneurs, developers, and creatives.",
                "Collaborating with universities and tech hubs to integrate blockchain learning into curricula.",
                "Hosting workshops, hackathons, and incubator programs that equip young Africans with the tools to build, innovate, and lead in the decentralized space.",
                "Raising awareness through digital content, thought leadership, and public discourse to ensure mass adoption."
            ],
            closing:
                "By nurturing the next generation of blockchain pioneers, we are creating an ecosystem of African innovators who will drive the continent’s Web 3 future."
        }
    }
];


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
                                Shaping Africa’s Digital Future with Web 3 <br />
                                At Web 3 Africa Group, we are committed to positioning Africa as a leader in the global decentralized economy by harnessing the transformative power of blockchain technology. Our mission is anchored in three core pillars: technology, policy, and education—each playing a vital role in building a digitally sovereign, economically empowered, and innovative Africa.

                            </Typography>
                        </m.div>
                    </Box>


                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                            position: "absolute",
                            top: 0,
                            right: 50,
                            // zIndex: 1,
                            display: { xs: "none", md: "block" }, // Hide on small screens, show on medium and up
                        }}
                    >
                        <m.div
                            animate={{ scale: 1, rotate: 360, opacity: 1 }}
                            transition={{
                                duration: 10,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            <Image
                                src="/assets/images/home/color-blob.png"
                                alt="blob"
                                objectfit="cover"
                                sx={{
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </m.div>

                    </Box>
                </Box>

                {/* Cards Section */}
                <Grid container spacing={4}>
                    {CARDS.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <m.div variants={varFade().inUp}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        height: 700,
                                        backgroundColor: '#181A20',
                                        color: 'common.white',
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                                        "&:hover": {
                                            borderRadius: 2, // Border radius stays consistent
                                            transform: "translateY(-5px)", // Moves the card up by 5px
                                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body1">{card.description.intro}</Typography>
                                        <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                                            {card.description.points.map((point, idx) => (
                                                <li key={idx} style={{ marginBottom: "6px" }}>{point}</li>
                                            ))}
                                        </ul>
                                        {card.description.closing && (
                                            <Typography variant="body1" sx={{ mt: 1 }}>
                                                {card.description.closing}
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </m.div>
                        </Grid>
                    ))}
                </Grid>

                <Card sx={{
                    mt: 4, spacing: 2, width: 'auto', transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                    "&:hover": {
                        borderRadius: 2, // Border radius stays consistent
                        transform: "translateY(-5px)", // Moves the card up by 5px
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                    }
                }}>
                    <CardContent>
                        <Stack container spacing={2}>
                            <m.div variants={varFade().inLeft}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        width: { xs: "100%", md: "100%" },

                                    }}
                                >
                                    Africa’s Time is Now
                                </Typography>
                            </m.div>

                            <m.div variants={varFade().inLeft}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        width: { xs: "100%", md: "100%" },
                                    }}
                                >
                                    The world is shifting toward decentralization, tokenized economies, and digital sovereignty—and Africa cannot afford to be left behind. Web 3 Africa Group is here to ensure that Africa is not just a participant in this revolution, but a global leader.
                                </Typography>
                            </m.div>
                            <m.div variants={varFade().inDown}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        width: { xs: "100%", md: "80%" },
                                    }}
                                >
                                    Through technology, policy, and education, we are paving the way for a digitally empowered Africa—one that is built on innovation, economic freedom, and sustainable growth.
                                </Typography>
                            </m.div>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </RootStyle>
    );
}
