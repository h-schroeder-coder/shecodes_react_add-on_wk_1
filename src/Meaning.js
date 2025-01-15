import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <p>
            <h4>Part of speech: {props.meaning.partOfSpeech}</h4>
            <br />
            <h5>Definition: </h5> 
            {props.meaning.definition}
            <br />
            <h5>Example <em>(if available)</em>: </h5><em>{props.meaning.example}</em>
            <Synonyms />
            <hr />
        </p>
      </div>
    );
}