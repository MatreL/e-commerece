import {makeStyles} from "@material-ul/core/styles"


export default makeStyles(() => ({
  root: {
    maxWidth: "100%"
    },
    media: {
      height: 0,
      paddingTop: " 56.25%",
    },
    cardActions: {
      dispaly: "flex",
      justifyContent: "flex-end",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between"
    },
}));