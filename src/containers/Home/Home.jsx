import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import Container from "@material-ui/core/Container";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { TextInput } from "../../components/Form/Form";
import { Typing } from "../../components/Typing/Typing";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useStyles } from "../../libs/hooksLib";
import neutral from "../../pictures/gir_standing2.png";
import sad from "../../pictures/sad_gir.png";
import happy from "../../pictures/gir_happy.png";
import sit from "../../pictures/gir_sitting.png";
import dancing from "../../pictures/dancing_gir.gif";
import bot from "../../pictures/gir_robot.png";

export default function Home() {
  const [sentiment, setSentiment] = useState("NEUTRAL");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [answer, setAnswer] = useState();
  const [session, setSession] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [keyPhrases, setKeyPhrases] = useState();
  const [entities, setEntities] = useState();
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
    setSentMessage(message);

    try {
      const botResponse = await API.post("lockdown", "/message", {
        body: {
          message,
          sessionId: session,
        },
      });
      setAnswer(botResponse.generic[0].text.replace(botResponse.Sentiment,''));
      setSession(botResponse.session);
      setSentiment(botResponse.Sentiment);
      const phrases = botResponse.KeyPhrases.map(phrase => {
        return phrase.Text
      }).join(", ");
      setKeyPhrases(phrases);
      const ents = botResponse.Entities.map(ent => {
        return `Type: ${ent.Type} - Text: ${ent.Text}`
      }).join(", ");
      setEntities(ents);
      console.log(botResponse)
      setIsLoading(false);
    } catch (e) {
      setAnswer('Something weird just happened');
      setSentiment("BROKEN");
      setIsLoading(false);
      console.log(e)
    }
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && isEnabled()) {
      handleClick()
    }
  }

  const isEnabled = () => message.length > 0

  return (
    <Container className={classes.content}>
      <Container className={classes.messages}>
        <Container className={classes.character}>
          {sentiment === "NEUTRAL" && answer !== ":dancing:" && <img src={neutral} className={classes.img} alt="Bot" />}
          {sentiment === "NEGATIVE" && answer !== ":dancing:"  && <img src={sad} className={classes.img} alt="Bot" />}
          {sentiment === "POSITIVE" && answer !== ":dancing:"  && <img src={happy} className={classes.img} alt="Bot" />}
          {sentiment === "MIXED" && answer !== ":dancing:" && <img src={sit} className={classes.img} alt="Bot" />}
          {sentiment === "BROKEN" && answer !== ":dancing:" && <img src={bot} className={classes.img} alt="Bot" />}
          {answer === ":dancing:"  && <img src={dancing} className={classes.img} alt="Bot" />}
        </Container>
        <Container className={classes.answer}>{isLoading ? <Typing/> :  answer }</Container>
        <Container className={classes.question}>{sentMessage} <p className={classes.extraText}>Entities: {entities}</p> <p className={classes.extraText}>Key phrases: {keyPhrases}</p></Container>
      </Container>
      <Container className={classes.messageContent}>
        <TextInput
          id="message"
          label="Message"
          name="message"
          autoFocus
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <LoaderButton
          isLoading={isLoading}
          disabled={!isEnabled()}
          className={classes.submit}
          onClick={handleClick}
        >
            Ask me something!
        </LoaderButton>
        </Container>
    </Container>
  );
}
