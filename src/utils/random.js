const { get } = require("./fetch");

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

module.exports = { handleRandomWord, handleGetOptions };
