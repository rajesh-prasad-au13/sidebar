import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Listitem = ({ children }) => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText />
      </ListItem>
    </List>
  );
};

export default Listitem;
