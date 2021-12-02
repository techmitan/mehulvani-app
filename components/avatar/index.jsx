import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function ImageAvatars({ image, alt }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={alt} src={image} className={classes.large} />
    </div>
  );
}
