import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";

export default function BasicSelect({ array, name, defaultValue }) {
  const [data, setData] = React.useState("");

  const handleChange = event => {
    setData(event.target.value);
  };

  return (
    <Tooltip placement="right-end" title={name}>
      <FormControl sx={{ minWidth: 80, height: 9 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={data}
          onChange={handleChange}
          autoWidth
          label={name}
        >
          {array.map(item => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Tooltip>
  );
}
