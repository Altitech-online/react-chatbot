import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import Container from "@material-ui/core/Container";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { TextInput } from "../../components/Form/Form";
import { Typing } from "../../components/Typing/Typing";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useStyles } from "../../libs/hooksLib";

export default function Home() {
  const [sentiment, setSentiment] = useState("NEUTRAL");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState();
  const [session, setSession] = useState();
  const [allMessages, setAllMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAppContext();
  const classes = useStyles();

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
      try {
      } catch (e) {
        onError(e);
      }
      setIsLoading(false);
    }
    onLoad();
  }, [isAuthenticated]);

  const handleClick = async () => {
    setIsLoading(true);
    const botResponse = await API.post("chatbot", "/message", {
      body: {
        message,
        sessionId: session,
      },
    });
    setAnswer(botResponse.generic[0].text);
    setSession(botResponse.session);
    console.log(botResponse);
    setSentiment(botResponse.Sentiment);
    setIsLoading(false);
  };

  return (
    <Container className={classes.content}>
      <Container className={classes.messages}>
        <Container className={classes.character}></Container>
        <Container className={classes.answer}>{isLoading ? <Typing/> :  answer }</Container>
        <Container className={classes.question}>{message}</Container>
      </Container>
      <Container className={classes.messageContent}>
        <TextInput
          id="message"
          label="Message"
          name="message"
          autoFocus
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <LoaderButton
          isLoading={isLoading}
          disabled={false}
          className={classes.submit}
          onClick={handleClick}
        >
            Ask me something!
        </LoaderButton>
        </Container>
    </Container>
  );
}
