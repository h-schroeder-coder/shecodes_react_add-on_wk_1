import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
    return (
      <div className="Meaning">
          <h5>Part of speech: </h5>
          <span className="resulting">{props.meaning.partOfSpeech}</span>
          <h5>Definition: </h5>
          <span className="resulting definition">{props.meaning.definition}</span>
          <Example example={props.meaning.example} />
          <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
}