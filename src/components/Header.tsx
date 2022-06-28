import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { blueGrey } from "@mui/material/colors";
import { useContext } from "react";
import { UserContext } from "src/contexts/UserContext";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  if (!user) return null;

  const getInitials = (firstName: string, lastName: string) =>
    (firstName[0] + lastName[0]).toUpperCase();

  return (
    <Box display="flex" alignItems="center" columnGap={1}>
      <Avatar
        variant="rounded"
        sx={{ fontWeight: "bold", bgcolor: blueGrey[600] }}
      >
        {getInitials(user.firstName, user.lastName)}
      </Avatar>

      <Typography>
        {user.firstName} {user.lastName}
      </Typography>
    </Box>
  );
};

const Header = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      color="transparent"
      sx={{ borderBottom: 1, borderBottomColor: "#EEE" }}
    >
      <Toolbar>
        <IconButton size="large">
          <Logo width={32} height={32} />
        </IconButton>

        <IconButton size="large">
          <MenuIcon />
        </IconButton>

        <Box flexGrow={1} />

        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
