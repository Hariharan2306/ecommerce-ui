import {
  Box,
  Button,
  Divider,
  InputAdornment,
  SvgIconTypeMap,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import logo from "../assets/logo.png";
import yearEndSaleImg from "../assets/yearEndSaleImg.png";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { logosAndLabels, subHeaderLinkLabels } from "../config/constants";

const useSytles = makeStyles({
  header: {
    "& .MuiDivider-root": {
      borderBottomWidth: "thick",
      borderColor: "#718AAD",
    },
  },
  contractor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#203e60",
    padding: "4px 0",
    color: "#FFFFFF",
  },
  searchAndTools: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2vh 5vw",
  },
  logoAndSearch: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
    "& .MuiTextField-root": { width: "21vw" },
    "& .MuiOutlinedInput-input": {
      padding: "10px",
      fontSize: "12px",
      fotnWeight: "200",
    },
  },
  logo: { width: "22vw" },
  headerTools: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    justifyContent: "space-between",
  },
  toolsIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  eamailIcon: {
    backgroundColor: "#0a6b59 !important",
    color: "#FFFFFF !important",
    width: "9vw",
    borderRadius: "20px !important",
    "& .MuiSvgIcon-root": { marginBottom: "24px" },
  },
  body: {
    margin: "0 5vw",
    "& .MuiDivider-root": {
      borderColor: "#718AAD",
    },
  },
  subHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
    width: "87vw",
  },
  yearAndSale: {
    width: "92vw",
    height: "30vh",
  },
  yearAndSaleBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  offLogo: { width: "14vw !important", height: "16vh" },
  offBox: {
    display: "flex",
    justifyContent: "center",
    margin: "5vh 5vh 0 5vh",
    flexWrap: "wrap",
  },
  offerAndLogo: {
    display: "flex",
    flexDirection: "column",
  },
});

const EndSale = () => {
  const classes = useSytles();
  const renderIconButtons = (
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string },
    label: string
  ) => (
    <Box className={classes.toolsIcons}>
      <Icon />
      {label}
    </Box>
  );
  const renderHeader = () => (
    <Box className={classes.header}>
      <Typography className={classes.contractor}>
        <AccountBoxRoundedIcon /> Are you a Contractor or Design pro?
      </Typography>
      <Box className={classes.searchAndTools}>
        <Box className={classes.logoAndSearch}>
          <img className={classes.logo} src={logo} alt="logo" />
          <TextField
            id="search"
            placeholder="Search for Anything"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <Box className={classes.headerTools}>
          <Button className={classes.eamailIcon}>
            <EmailIcon />
            Save upto 25%
          </Button>
          {renderIconButtons(HelpOutlineIcon, "Support")}
          {renderIconButtons(PermIdentityIcon, "Account")}
          {renderIconButtons(FavoriteIcon, "My Favourites")}
          {renderIconButtons(ShoppingCartIcon, "Your Cart")}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
  return (
    <>
      {renderHeader()}
      <Box className={classes.body}>
        <Box className={classes.subHeader}>
          {subHeaderLinkLabels.map((e) => (
            <Typography>{e}</Typography>
          ))}
        </Box>
        <Box className={classes.yearAndSaleBox}>
          <img
            className={classes.yearAndSale}
            src={yearEndSaleImg}
            alt="sale"
          />
          <Box className={classes.offBox}>
            {logosAndLabels.map(({ icon, label }) => (
              <Box className={classes.offerAndLogo}>
                <img
                  className={classes.offLogo}
                  src={icon}
                  alt={`${label} 20% oFF`}
                />
                <Button>SHOP</Button>
              </Box>
            ))}
          </Box>
          <Divider />
        </Box>
      </Box>
    </>
  );
};
export default EndSale;
