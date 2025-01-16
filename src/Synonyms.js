import React from "react";  
import "./Synonyms.css";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <h5>Synonyms: </h5>
                <ul>
                    {props.synonyms.map(function (synonym, index) {
                        return (
                            <li key={index} className="resulting">
                                {synonym}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return null;
    }
}