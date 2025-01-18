// @mui
import { styled } from "@mui/material/styles";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
// sections
import NewsHero from "@/sections/news/NewsHero";
import NewsBlog from "@/sections/news/NewsBlog";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%"
  // backgroundColor: "#1e1e1e"
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="News And Insights">
      <RootStyle>
        <NewsHero />
        <NewsBlog />

        {/* <ContentStyle>
          <HomeFaq />
        </ContentStyle> */}
      </RootStyle>
    </Page>
  );
}
