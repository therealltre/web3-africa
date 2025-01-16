// routes
import { PATH_PAGE } from "../../routes/paths";

import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: "HOME",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/"
  },
  {
    title: "ABOUT US",
    icon: <Iconify icon={"material-symbols:note-outline"} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  },
  {
    title: "NEWS & INSIGHTS",
    icon: <Iconify icon={"pixelarticons:contact-plus"} {...ICON_SIZE} />,
    path: PATH_PAGE.news
  },
  {
    title: "PARTNERSHIPS",
    icon: <Iconify icon={"teenyicons:school-outline"} {...ICON_SIZE} />,
    path: PATH_PAGE.partnerships
  }

];

export default menuConfig;
