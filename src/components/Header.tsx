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
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const useSytles = makeStyles({
  root: {
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
});

const Header = () => {
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
  return (
    <Box className={classes.root}>
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
};
export default Header;
