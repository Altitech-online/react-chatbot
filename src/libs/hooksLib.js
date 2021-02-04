
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 1,
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: (3 ,0 ,2),
    alignSelf: "flex-end",
  },
  navbar: {
    alignSelf: "flex-start",
    alignItems: "center",
    height: "10vh",
    backgroundColor: "#ededed"
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
    border: "0px black solid",
    height: "90vh",
    flexDirection: "column",
    display: "flex!important",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "auto",
  },
  create: {
   
  },
  messageContent: {
    height: "20vh",
  },
  messages: {
    border: "0px black solid",
    height: "70vh",
    justifyContent: "space-between",
  },
  question: {
    border: "0px black solid",
    borderRadius: "25px 25px 0px 25px",
    alignSelf: "flex-end",
    height: "10vh",
    margin: "auto",
    padding: "1em",
    textAlign: "right",
    verticleAlign: "middle",
    wordWrap: "break-word",
    fontSize: "24px"
  },
  answer: {
    border: "0px black solid",
    borderRadius: "0px 25px 25px 25px",
    alignSelf: "flex-end",
    height: "10vh",
    margin: "auto",
    padding: "1em",
    textAlign: "left",
    verticleAlign: "middle",
    wordWrap: "break-word",
    fontSize: "24px"
  },
  character: {
    height: "45vh"
  },
  img: {
    height: "100%"
  },
  date: {
    textAlign: "center"
  },
  moodContainer: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
}));
