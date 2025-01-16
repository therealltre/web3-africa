import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// next
import NextLink from "next/link";
import { useRouter } from "next/router";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Link,
  Drawer,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton
} from "@mui/material";
// config
import { NAVBAR } from "../../config";
// components
import Iconify from "../../components/Iconify";
import Scrollbar from "../../components/Scrollbar";
import { IconButtonAnimate } from "../../components/animate";
import { NavSectionVertical } from "../../components/nav-section";
import Image from "next/image";

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.h3,
  height: 80,
  // height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  padding: theme.spacing(5), // Increase spacing inside the list item
  marginBottom: theme.spacing(1), // Add space between items
  "& .MuiListItemText-primary": {
    fontSize: "3.125em", // Adjust font size for the title
    fontWeight: theme.typography.fontWeightBold // Optional: Increase font weight
    // [theme.breakpoints.down("sm")]:{
    //   fontSize: theme.typography.h3.fontSize
    // }
  }
}));

// ----------------------------------------------------------------------

MenuMobile.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function MenuMobile({ isOffset, isHome, navConfig }) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          // ...(isHome && { color: "common.white" }),
          ...(isOffset && { color: "text.primary" })
        }}
      >
        <Iconify icon={"eva:menu-2-fill"} />
      </IconButtonAnimate>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: { xs: 390, md: 600 } } }} //mobile sidebar width
      >
        <Scrollbar>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>

            <Box sx={{m:2.5}}>
              <NextLink href="/">
                <Image
                  src="/assets/images/brand/w3a-logo-black.png"
                  alt="Web3 Africa Logo"
                  width={92}
                  height={40}
                  sx={{ mx: 2.5, my: 2.5 }}
                />
              </NextLink>
            </Box>

            <IconButtonAnimate onClick={handleDrawerClose}>
              <Iconify icon="eva:close-fill" width={24} height={24} />
            </IconButtonAnimate>
          </Box>
          {/* <NextLink href="/" passhref="true" sx={{ mx: 2.5, my: 3 }}>
            <a>
              <Image
                src="/logo/logo_full_mc.png" // replace with your image path
                alt="Home"
                width={120} // specify width
                height={40} // specify height
                priority // ensures the image is loaded quickly
              />
            </a>
          </NextLink> */}
          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isOpen={open}
                onOpen={handleOpen}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  isOpen: PropTypes.bool,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string
  }),
  onOpen: PropTypes.func
};

function MenuMobileItem({ item, isOpen, onOpen }) {
  const { pathname } = useRouter();
  const { title, path, icon, children } = item;

  const isActive = pathname === path;

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          {/* <ListItemText disableTypography primary={title} /> */}
          <ListItemText
            disableTypography
            primary={
              <div className="text-container">
                <span className="text text-current">{title}</span>
                <span className="text text-new">New {title}</span>{" "}
                {/* Replace as needed */}
              </div>
            }
          />

          <Iconify
            icon={
              isOpen
                ? "eva:arrow-ios-downward-fill"
                : "eva:arrow-ios-forward-fill"
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                "& .MuiList-root:last-of-type .MuiListItemButton-root": {
                  height: 200,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  bgcolor: "background.neutral",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(/assets/illustrations/illustration_dashboard.png)",
                  "& > *:not(.MuiTouchRipple-root)": { display: "none" }
                }
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  if (title === "Documentation") {
    return (
      <ListItemStyle
        href={path}
        target="_blank"
        rel="noopener"
        component={Link}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    );
  }

  return (
    <NextLink href={path} passhref="true" style={{ textDecoration: "none" }}>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: "primary.main",
            fontWeight: "fontWeightMedium",
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity
              )
          })
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    </NextLink>
  );
}
