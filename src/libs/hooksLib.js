
import { makeStyles } from '@material-ui/core/styles';
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    alignSelf: "flex-end",
  },
  navbar: {
    alignSelf: "flex-start",
    alignItems: "center",
    height: "10vh",
  },
  notfound: {
    padding: "80px 0",
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Open Sans, sans-serif",
  },
  app: {
    height: "100vh",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    textAlign: "center",
    border: "1px black solid",
    height: "90vh",
    flexDirection: "column",
    display: "flex!important",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "auto",
  },
  create: {
    padding: "10px",
  },
  messageContent: {
    height: "20vh",
  },
  messages: {
    border: "1px black solid",
    height: "70vh",
  },
}));
