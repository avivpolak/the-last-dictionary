import React from "react";
import LinkedParagragh from "../../HelperComponents/LinkedParagragh";

export default function NoDefenition({word}) {
    return (
        <div className="Word">
            <h1>
                <LinkedParagragh>{word}</LinkedParagragh>
            </h1>
            <LinkedParagragh>
                Currently There is no defenition for this word, please select
                another word.
            </LinkedParagragh>
        </div>
    );
}
