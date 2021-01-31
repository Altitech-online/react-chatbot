import { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useStyles } from "../../libs/hooksLib";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
        console.log(notes);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  const loadNotes = () => {
    return API.post("chatbot", "/message", {
      body: {
        message: "f off",
      },
    });
  };

  return <Container className={classes.content}>hwllo</Container>;
}
