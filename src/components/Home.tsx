import { Box } from "@mui/material";
import EndSale from "./EndSale";
import { makeStyles } from "@mui/styles";
import easyPlugIn from "../assets/easyPlugIn.png";
import AutoSlider from "./AutoSlider";
import { connect } from "react-redux";
import { fetchUserDetails } from "../actions/usersActions";
import { Dispatch } from "redux";

const useSytles = makeStyles({
  sliderAndSuggestion: { margin: "5vh 5vw" },
  images: { display: "flex", height: "40vh" },
});

const Home = () => {
  const classes = useSytles();
  return (
    <>
      <EndSale />
      <Box className={classes.sliderAndSuggestion}>
        <Box className={classes.images}>
          <img src={easyPlugIn} alt="Easy Plug in Img" />
          <AutoSlider />
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUserdata: (actions: string) => dispatch(fetchUserDetails(actions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
