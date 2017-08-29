import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";

const styles = ({ palette: { text } }) => ({
  root: {
    position: "absolute",
    height: "100%",
    width: "4px",
    "background-color": text.secondary,
    "border-radius": "6px"
  }
});

class Rail extends PureComponent {
  render() {
    const { classes } = this.props;

    return <div className={classes.root} />;
  }
}

export default withStyles(styles)(Rail);
