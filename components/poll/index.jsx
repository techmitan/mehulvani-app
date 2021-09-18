import React from "react";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { baseAPI } from "../../config";
import { CircularProgress } from "@material-ui/core";
import Progress from "./progress";

const Poll = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(true);
  const [yes, setYes] = useState("");
  const [no, setNo] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(false);
  const [pollId, setPollId] = useState("");

  useEffect(() => {
    const getPoll = async () => {
      const response = await fetch(`${baseAPI}/api/poll/get`);
      const data = await response.json();
      setQuestion(data.poll.question);
      setPollId(data.poll._id);
      setLoading(false);
    };
    getPoll();
  }, []);

  const pollHandler = async () => {
    const response = await fetch(`${baseAPI}/api/poll/${pollId}`, {
      method: "PUT",
      body: JSON.stringify({ answer: answer }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setYes(data.poll.yes_percentage);
    setNo(data.poll.no_percentage);
    setResult(true);
  };

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <div className={styles.poll_card}>
        <h4>आपकी राय </h4>
        <p>{question}</p>
        {!result && (
          <>
            <div className={styles.radio_input}>
              <input
                type="radio"
                name="poll"
                id="pollA"
                onChange={() => {
                  setAnswer("yes");
                }}
              />
              <label htmlFor="pollA">हाँ </label>
            </div>
            <div className={styles.radio_input}>
              <input
                type="radio"
                name="poll"
                id="pollA"
                onChange={() => {
                  setAnswer("no");
                }}
              />
              <label htmlFor="pollA">नहीं </label>
            </div>
            <button onClick={pollHandler}>Submit</button>
          </>
        )}

        {result && (
          <>
            <div style={{ marginTop: "20px" }}></div>
            <Progress data={yes} />
            <p>Yes: {yes}%</p>
            <div style={{ marginTop: "20px" }}></div>
            <Progress data={no} />
            <p>No: {no}%</p>
          </>
        )}
      </div>
    );
  }
};

export default Poll;
