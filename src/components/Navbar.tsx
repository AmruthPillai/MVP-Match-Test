import { IconButton } from "@mui/material";
import {
  DashboardOutlined,
  Monitor,
  PieChartOutline,
  PowerSettingsNew,
  TableChartOutlined,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const Navbar = () => {
  return (
    <>
      <IconButton>
        <TableChartOutlined />
      </IconButton>

      <IconButton>
        <DashboardOutlined />
      </IconButton>

      <IconButton>
        <Monitor />
      </IconButton>

      <IconButton color="primary">
        <PieChartOutline />
      </IconButton>

      <IconButton>
        <PowerSettingsNew />
      </IconButton>
    </>
  );
};

export default Navbar;
