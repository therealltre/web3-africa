// mapboxgl
// Fix map on production
import "../../utils/mapboxgl";

import MapGL from "react-map-gl";
import { useState } from "react";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

// config
import { MAPBOX_API } from "../../config";
// components
import Iconify from "../../components/Iconify";
import {
  MapControlPopup,
  MapControlMarker,
  MapControlScale,
  MapControlNavigation,
  MapControlFullscreen
} from "../../components/map";


// ----------------------------------------------------------------------
const _mapContact = [
  {
    latlng: [5.6037, -0.1870],
    address: "",
    phoneNumber: "",
  },
  {
    latlng: [51.5074, -0.1278],
    address: "",
    phoneNumber: "",
  },
  {
    latlng: [38.9072, -77.0369],
    address: "",
    phoneNumber: "",
  },

];

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: "hidden",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right": {
    display: "none"
  }
}));

// ----------------------------------------------------------------------

export default function ContactMap() {
  const theme = useTheme();

  // const isLight = theme.palette.mode === "light";

  const [tooltip, setTooltip] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 5,
    longitude: -30,
    zoom: 1
  });

  return (
    <RootStyle>
      <MapGL
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_API}
        width="100%"
        height="100%"
      >
        <MapControlFullscreen />
        <MapControlScale />
        <MapControlNavigation />

        {_mapContact.map((country) => (
          <MapControlMarker
            key={country.phoneNumber}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={() => {
              console.log('country: ',country); // Debugging
              setTooltip({
                ...country,
                latitude: country.latlng[0],
                longitude: country.latlng[1]
              });
            }}
          />
        ))}

        {tooltip && (
          <MapControlPopup
            longitude={tooltip.longitude}
            latitude={tooltip.latitude}
            onClose={() => setTooltip(null)}
            sx={{
              "& .mapboxgl-popup-content": { bgcolor: "common.white" },
              "&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip": {
                borderTopColor: "#FFF"
              },
              "&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip": {
                borderBottomColor: "#FFF"
              }
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Address
            </Typography>
            <Typography component="p" variant="caption">
              {tooltip.address}
            </Typography>

            <Typography
              component="p"
              variant="caption"
              sx={{ mt: 1, display: "flex", alignItems: "center" }}
            >
              <Iconify
                icon={"eva:phone-fill"}
                sx={{ mr: 0.5, width: 14, height: 14 }}
              />
              {tooltip.phoneNumber}
            </Typography>
          </MapControlPopup>
        )}
      </MapGL>
    </RootStyle>
  );
}
