/** @format */

import { useParams, useNavigate } from "react-router-dom";
import ChooseAWordPOS from "./ChooseAWordPOS.jsx";
import dictionary from "../db/dictionary.json";
import DefenitionPage from "./DefenitionPage.jsx";
import NoDefenition from "./NoDefenition";
import axios from "axios";
import { useEffect, useState } from "react";
export default async function WordPage() {
    const param = useParams();
    const navigate = useNavigate();
    const wordParam = param.word;
    let posParam = param.pos;
    const searchWord=wordParam.toUpperCase()
     const [val,setVal]=useState({ "CURMUDGEON": {
        "n.": {
            "definitions": [
                "An avaricious, grasping fellow; a miser; a niggard; a churl. A gray-headed curmudgeon of a negro. W. Irving."
            ]
        }
    }})
     const [errorMessage,setErrorMessage]=useState({})
     const [searchValue,setSearchValue]=useState({})
     
    const updateTickets = (searchWord) => {
        axios
          .get(`https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${searchWord}`)
          .then((defenition) => {
            setErrorMessage(false);
            setVal(defenition.data);
          })
          .catch(() => {
            setErrorMessage(true);
            setVal({});
          });
      };

      useEffect(() => {
        // Update the document title using the browser API
        updateTickets()
      }, [searchValue]);

    if (!val) {
        return <NoDefenition word={wordParam} />;
    }
    const poss = Object.keys(val);
    if (poss.length === 1 && !posParam) {
        navigate(`/${wordParam}/${poss[0]}`, { replace: true });
    }

    if (!posParam) {
        return <ChooseAWordPOS word={wordParam} pos={posParam} poss={poss} />;
    } else {
        const { synonyms, definitions } = val[posParam];
        return (
            <DefenitionPage
                word={wordParam}
                pos={posParam}
                synonyms={synonyms}
                definitions={definitions}
            />
        );
    }
}
