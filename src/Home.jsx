import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import random from "./media/random.png";
import Select from "./Select";
import posDict from "./db/posDict.json";
import reverseDict from "./db/reverseDict.json";
import letters from "./db/letters.json";

export default function Home() {
    const nav = useNavigate();
    const [pos, setPos] = useState("random");
    const [letter, setLetter] = useState("random");
    const [err, setErr] = useState("");
    const [options, setOptions] = useState({});

    const baseUrl =
        "https://cyjh92ance.execute-api.us-east-1.amazonaws.com/part-of-speech/";
    const all = (options) => {
        const availbleLetters = [];
        Object.keys(options).forEach((option) => {
            options[option].forEach((letter) => {
                if (!availbleLetters.includes(letter)) {
                    availbleLetters.push(letter);
                }
            });
        });
        return availbleLetters;
    };
    const getRandomWord = (baseUrl, posDict, pos, letter) => {
        let urlPos = posDict[pos];
        let urlLetter = letter;
        if (pos === "random") {
            urlPos = "random";
        }
        if (letter === "random") {
            urlLetter = "";
        }

        axios
            .get(`${baseUrl}${urlPos}?letter=${urlLetter}`)
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
    useEffect(() => {
        axios
            .get(
                `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/part-of-speech/options`
            )
            .then((res) => {
                if (res.data.differentPosAndOptions) {
                    setOptions(res.data.differentPosAndOptions);
                }
                all(options);
            })
            .catch((err) => {
                setErr(err.message);
            });
    }, []);

    return (
        <div>
            <h1>Dictionary</h1>
            <Header /> <br />
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
                    pos === "random" ? all(options) : options[posDict[pos]]
                }
            />
            <br />
            <img
                src={random}
                alt="give me a random word!"
                className="random"
                onClick={() => {
                    getRandomWord(baseUrl, posDict, pos, letter);
                }}
            />
            <p>{err}</p>
        </div>
    );
}
