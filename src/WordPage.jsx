/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import POSKeys from "./db/POSKeys.json";
import Defenition from "./Defenition";
import LinkedParagragh from "./LinkedParagragh";
export default function WordPage() {
    const param = useParams();
    const navigate = useNavigate();
const [word,setWord]=useState("")
    const wordParam = param.word;
    let posParam = param.pos;

    const searchWord = wordParam.toUpperCase()
    const [def,setDef]=useState({})
    // const def = POSKeys[wordParam.toUpperCase()];
    const updateWord = () => {
        axios
          .get(`https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${searchWord}`)
          .then((word) => {
            setDef(word.data.value);
          })
          .catch(() => {
            setDef({});
          });
          setWord(searchWord)
      };
      useEffect(() => {
        // Update the document title using the browser API
        
        if(wordParam.toUpperCase()!==word.toUpperCase())
        updateWord()
      },[wordParam,posParam]);
      const poss = Object.keys(def);
    if (poss.length === 0) {
        console.log("no def");
        return (
            <div className="Word">
                  <h1>
                    <LinkedParagragh>{wordParam}</LinkedParagragh>
                </h1>
                <LinkedParagragh>
                    Currently There is no defenition for this word, please
                    select another word.
                </LinkedParagragh>
            </div>
        );
    }

    if (poss.length === 1 && !posParam) {
        console.log("navigating...")
        navigate(`/${wordParam}/${poss[0]}`, { replace: true });
    }

    if (!posParam) {
        return (
            <div className="Word">
                <h1>
                    <LinkedParagragh>{wordParam}</LinkedParagragh>
                </h1>
                <LinkedParagragh>
                    There is more then one options for this word, please select
                    one of the Part-Of-Speaches below.
                </LinkedParagragh>
                <br />
                {poss.map((pos) => {
                    return (
                        <div>
                            <Link to={`/${wordParam}/${pos}`}>
                                {wordParam}({pos})
                            </Link>
                            <br />
                        </div>
                    );
                })}
                <br />
                <br />
                {posParam}
                <br />
            </div>
        );
    } else {
        let synonyms = []
        let definitions = []
        if(def[posParam].hasOwnProperty('synonyms')){
            synonyms= def[posParam].synonyms
        }
        if(def[posParam].hasOwnProperty('definitions')){
            definitions= def[posParam].definitions
        }
    
        return (
            <div className="Word">
                <h1>
                    <LinkedParagragh>{wordParam}</LinkedParagragh>
                </h1>
                <h4>
                    <LinkedParagragh>{posParam}</LinkedParagragh>
                </h4>
                <Defenition synonyms={synonyms} definitions={definitions} />
            </div>
        );
    }
}
