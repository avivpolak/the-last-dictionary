/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Defenition from "./Defenition";
import MultipleDefenition from "./MultipleDefenition";
import NoDefenition from "./NoDefenition";
export default function WordPage() {
    const param = useParams();
    const navigate = useNavigate();
    const [word, setWord] = useState("");
    const wordParam = param.word;
    let posParam = param.pos;

    const searchWord = wordParam?.toUpperCase() || "";
    const [def, setDef] = useState({});
    const updateWord = async () => {
        try {
            const response = await axios.get(
                `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${searchWord}`
            );
            console.log(response);
            if (response.data.value) {
                setDef(response.data.value);
            } else {
                console.log("no word");
            }
        } catch (err) {
            console.log(err);
            setDef({});
        }
    };
    useEffect(() => {
        // Update the document title using the browser API

        if (wordParam.toUpperCase() !== word.toUpperCase()) {
            updateWord();
        }
    }, [wordParam, posParam]);

    const poss = Object.keys(def);

    let synonyms = [];
    let definitions = [];
    if (def[posParam]?.hasOwnProperty("synonyms")) {
        synonyms = def[posParam].synonyms;
    }
    if (def[posParam]?.hasOwnProperty("definitions")) {
        definitions = def[posParam].definitions;
    }

    //if there is only one defenition , go diractly to this page
    if (poss.length === 1 && !posParam) {
        navigate(`/${wordParam}/${poss[0]}`, { replace: true });
    }

    if (poss.length === 0) {
        return <NoDefenition word={wordParam} />;
    }

    if (!posParam) {
        return (
            <MultipleDefenition word={wordParam} poss={poss} pos={posParam} />
        );
    } else {
        return (
            <Defenition
                word={wordParam}
                pos={posParam}
                synonyms={synonyms}
                definitions={definitions}
            />
        );
    }
}
