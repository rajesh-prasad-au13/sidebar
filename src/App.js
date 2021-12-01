import { makeStyles } from "@material-ui/core";
import "./App.css";
import Drawer from "./components/Drawer";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#181D31",
      minHeight: "100vh",
      minWidth: "100vw",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Drawer />
    </div>
  );
}

export default App;
