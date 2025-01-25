import PropTypes from "prop-types";
import { forwardRef } from "react";
import NextLink from "next/link";
// @mui
import { Box } from "@mui/material";
import Image from "next/image";

// ----------------------------------------------------------------------

const LogoImage = forwardRef(({ disabledLink = false, sx }, ref) => {
  const logoImg = (
    <Box ref={ref} sx={{ width: 150, height: 60, cursor: "pointer", ...sx }}>
      <NextLink href="/" passhref="true">
        <Image
          src="/assets/images/brand/w3a-logo.png" // replace with your image path
          alt="Home"
          width={160} // specify width
          height={60} // specify height
          priority // ensures the image is loaded quickly
        />
      </NextLink>
    </Box>
  );

  if (disabledLink) {
    return <>{logoImg}</>;
  }

  return <NextLink href="/">{logoImg}</NextLink>;
});

LogoImage.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object
};

export default LogoImage;
