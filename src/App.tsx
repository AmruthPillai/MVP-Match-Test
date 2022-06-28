import { Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid
        item
        xs={1}
        rowGap={2}
        display="flex"
        paddingLeft={3.75}
        flexDirection="column"
        alignItems="start"
      >
        <Navbar />
      </Grid>

      {/* 128px, calculated to be the size of the header */}
      <Grid
        item
        xs={11}
        paddingRight={2}
        overflow="hidden"
        height={"calc(100vh - 128px)"}
      >
        <Reports />
      </Grid>

      <Grid item xs={12} paddingLeft={16}>
        <Typography variant="caption" fontWeight="medium" color={blue[900]}>
          <a href="#">Terms &amp; Conditions</a> |{" "}
          <a href="#">Privacy Policy</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default App;
