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

    const wordParam = param.word;
    let posParam = param.pos;
    const searchWord = wordParam.toUpperCase()
    const [def,setDef]=useState({})
    // const def = POSKeys[wordParam.toUpperCase()];
    const updateTickets = () => {
        axios
          .get(`https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${searchWord}`)
          .then((tickets) => {
            // setErrorMessage(false);
            setDef(tickets.data.value);
          })
          .catch(() => {
            // setErrorMessage(true);
            setDef([]);
          });
      };
      useEffect(() => {
        // Update the document title using the browser API
        updateTickets()
      },[]);
    
    if (!def) {
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
    const poss = Object.keys(def);
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
        const { synonyms, definitions } = def[posParam];
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
