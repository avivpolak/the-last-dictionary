import React from "react";
import LinkedParagragh from "./LinkedParagragh";
export default function Defenition({ synonyms, definitions }) {
    if (!definitions) definitions = ["no definitions"];
    if (!synonyms) synonyms = ["no synonyms"];
    return (
        <div>
            <h2>
                <LinkedParagragh>definitions</LinkedParagragh>
            </h2>

            {definitions.map((def) => (
                <LinkedParagragh>{def}</LinkedParagragh>
            ))}
            <br />
            <h2>
                <LinkedParagragh>synonyms</LinkedParagragh>
            </h2>
            {synonyms.map((syn) => (
                <LinkedParagragh>{syn}</LinkedParagragh>
            ))}
            <br />
        </div>
    );
}
