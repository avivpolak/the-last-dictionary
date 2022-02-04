import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
//importing random.png
import random from "./media/random.png";
import Select from "./Select";
import  posDict from "./db/posDict.json"

export default function Home() {
    const nav = useNavigate();
    const [pos, setPos] = useState("");
    const getRandomWord = (posDict,pos) => {
        axios
            .get(
                `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/part-of-speech/${posDict[pos]}`
            )
            .then((res) => {
                console.log(res.data);
                nav(`/${res.data.data}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Dictionary</h1>
            <Header />
            
            <Select options={Object.keys(posDict)} onChange={setPos} />
            <img
                src={random}
                alt="give me a random word!"
                className="random"
                onClick={() => {
                    getRandomWord(posDict,pos);
                }}
            />
        </div>
    );
}
