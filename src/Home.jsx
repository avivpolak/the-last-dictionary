import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
//importing random.png
import random from "./media/random.png";
import Select from "./Select";
import posDict from "./db/posDict.json";

export default function Home() {
    const nav = useNavigate();
    const [pos, setPos] = useState("noun");
    const [letter, setLetter] = useState("");
    const [err, setErr] = useState("");
    const [options, setOptions] = useState({
        // noun: ["a", "b", "c", "d", "e", "f", "g"],
    });
    const getRandomWord = (posDict, pos) => {
        console.log(letter)
        axios
            .get(
                `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/part-of-speech/${posDict[pos]}?letter=${letter}`
            )
            .then((res) => {
                if (res.data.differentPosAndOptions) {
                    setOptions(res.data.differentPosAndOptions);
                } else {
                    nav(`/${res.data.data.word}`);
                }
            })
            .catch((err) => {
                console.log(err, "error");
                setErr(err.message);
            });
    };


    return (
        <div>
            <h1>Dictionary</h1>
            <Header />

            <Select options={Object.keys(posDict)} onChange={setPos} />
            <Select options={options[posDict[pos]]} onChange={setLetter} />
            <img
                src={random}
                alt="give me a random word!"
                className="random"
                onClick={() => {
                    getRandomWord(posDict, pos);
                }}
            />

            {Object.keys(options).map((pos) => {
                return (
                    <p>
                        {pos} {options[pos]}
                    </p>
                );
            })}
        </div>
    );
}
