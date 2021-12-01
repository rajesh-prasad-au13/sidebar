import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceIcon from "@material-ui/icons/AccountBalanceOutlined";
import SwapVertIcon from "@material-ui/icons/SwapVertOutlined";
import AccountBoxIcon from "@material-ui/icons/AccountBoxOutlined";
import VpnLockIcon from "@material-ui/icons/VpnLockOutlined";
import Switch from "./Switch";
import Select from "./Select";
import { Tooltip } from "@mui/material";
const drawerWidth = 280;

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          style={{ color: "white" }}
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, p: 5, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#181D31",
            overflow: "hidden",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider />
        <div className="trapezoid">
          <Tooltip placement="right-end" title="Account">
            <ListItem onClick={handleDrawerClose}>
              <AccountBalanceIcon
                fontSize="large"
                name="Account"
                variant="outlined"
              />
            </ListItem>
          </Tooltip>
          <Tooltip placement="right-end" title="Data">
            <ListItem
              onClick={handleDrawerClose}
              style={{ transform: "rotate(45deg)", fontSize: "52px" }}
            >
              <SwapVertIcon fontSize="large" name="Data" />
            </ListItem>
          </Tooltip>
          <Tooltip placement="right-end" title="Profile">
            <ListItem
              onClick={handleDrawerClose}
              style={{ background: "rgba(17, 60, 252, 0.3)", borderRadius: 12 }}
            >
              <AccountBoxIcon fontSize="large" name="Profile" />
            </ListItem>
          </Tooltip>
          <Tooltip placement="right-end" title="VPN">
            <ListItem onClick={handleDrawerClose}>
              <VpnLockIcon fontSize="large" name="VPN" />
            </ListItem>
          </Tooltip>

          <Tooltip placement="right-end" title="Switch">
            <ListItem>
              <Switch fontSize="small" name="Switch" />
            </ListItem>
          </Tooltip>

          <List>
            <ListItem button>
              <ListItemIcon>
                <Select />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
