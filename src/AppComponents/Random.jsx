import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import random from "../media/random.png";
import Select from "../HelperComponents/Select";
import posDict from "../db/posDict.json";
import reverseDict from "../db/reverseDict.json";
import letters from "../db/letters.json";
import { getAllPossibleLetters } from "../utils/helpers";
import { get } from "../utils/fetch";

export default function Random() {
    const nav = useNavigate();
    const [pos, setPos] = useState("random");
    const [letter, setLetter] = useState("random");
    const [err, setErr] = useState("");
    const [options, setOptions] = useState({});

    
    useEffect(() => {
        handleGetOptions(setOptions, setErr);
    }, []);
    
    const handleRandomWord = async (parameters, callbacks) => {
        const { pos, posDict, letter } = parameters;
        const { nav, setErr, setOptions } = callbacks;
        try {
            let urlPos = posDict[pos];
            let urlLetter = letter;
            if (pos === "random") {
                urlPos = "random";
            }
            if (letter === "random") {
                urlLetter = "";
            }
            const data = await get(`${urlPos}?letter=${urlLetter}`);
            if (data.differentPosAndOptions) {
                setOptions(data.differentPosAndOptions);
            } else {
                nav(`/word/${data.data.word}`);
            }
        } catch (error) {
            setErr(error.message);
        }
    };
    const handleGetOptions = async (setOptions, setErr) => {
        try {
            const data = await get("options");
            if (data.differentPosAndOptions) {
                setOptions(data.differentPosAndOptions);
            }
        } catch (error) {
            setErr(error.message);
        }
    };
    
    return (
        <div>
        <Link to="/"><button>Home</button></Link>
            <h1>Random</h1>
            select part of speech:
            <br />
            <Select
                options={Object.keys(posDict)}
                onChange={setPos}
                availables={Object.keys(options).map(
                    (short) => reverseDict[short]
                )}
            />
            <br />
            select letter:
            <br />
            <Select
                options={letters}
                onChange={setLetter}
                availables={
                    pos === "random"
                        ? getAllPossibleLetters(options)
                        : options[posDict[pos]]
                }
            />
            <br />
            <img
                src={random}
                alt="give me a random word!"
                className="random"
                onClick={() => {
                    handleRandomWord(
                        { posDict, pos, letter },
                        { setErr, setOptions, nav }
                    );
                }}
            />
            <p>{err}</p>
        </div>
    );
}
