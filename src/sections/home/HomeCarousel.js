import { m } from "framer-motion";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../../components/animate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ----------------------------------------------------------------------

const IMAGES = Array.from({ length: 6 }, (_, index) => ({
    src: `/assets/images/covers/cover_${index + 1}.jpg`,
    alt: `Cover Image ${index + 1}`,
}));

const RootStyle = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    height: "100vh", // Full screen height
    backgroundColor: "#000", // Black background
    textAlign: "center",
    padding: theme.spacing(0), // Add some padding
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
    const settings = {
        dots: false,
        arrows: false, // Disable left and right indicators
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 image at a time on mobile
                    variableWidth: false, // Disable variable width on mobile
                    // centerMode: true, // Center the images on mobile
                },
            },
        ],
    };

    return (
        <RootStyle>
            <Container
                component={MotionViewport}
                sx={{ position: "relative", height: 1 }}
            >
                <Box sx={{ maxWidth: 780, mb: 5, mt: 15 }}>
                    <m.div variants={varFade().inUp}>
                        <Typography variant='h2' style={{ marginBottom: "16px", color: "#fff" }}>
                            Be a Part of Web3 Community
                        </Typography>
                    </m.div>
                </Box>

                <Slider {...settings}>
                    {IMAGES.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: "0 8px", // Add gap between slides (half of the gap is applied on each side)
                                width: "auto", // Necessary for `variableWidth` to work
                            }}
                        >
                            <m.div variants={varFade().inUp}>
                                <ImageCard image={image} />
                            </m.div>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </RootStyle>
    );
}

// ----------------------------------------------------------------------

function ImageCard({ image }) {
    return (
        <Box
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{
                width: "100%", // Ensure images are fully responsive
                maxWidth: 600, // Set a reasonable maximum width
                height: 400,
                borderRadius: 2,
                boxShadow: 2,
                overflow: "hidden",
                display: "block",
            }}
        />
    );
}
