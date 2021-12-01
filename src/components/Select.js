import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";
import { makeStyles } from "@material-ui/core";

export default function BasicSelect() {
  const [data, setData] = React.useState("");
  const useStyles = makeStyles(() => ({
    Select: {},
  }));
  const handleChange = event => {
    setData(event.target.value);
  };

  return (
    <Tooltip placement="right-end" title="select">
      <Select
        variant="outlined"
        style={{
          width: 80,
          height: 30,
          color: "white",
          marginRight: 15,
          paddingLeft: 8,
          fontWeight: "bold",
          fontSize: 15,
          borderRadius: 30 / 2,
          background: "rgb(252,176,69)",
          background:
            "linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(91,174,203,1) 0%, rgba(6,103,119,1) 100%)",
        }}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={data}
        onChange={handleChange}
        autoWidth
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="RS">RS</MenuItem>
        <MenuItem value="YU" defaultValue>
          YU
        </MenuItem>
      </Select>
    </Tooltip>
  );
}
