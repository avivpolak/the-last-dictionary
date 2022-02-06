
const axios =require("axios").default
const baseUrl =
"https://cyjh92ance.execute-api.us-east-1.amazonaws.com/part-of-speech/";

const get = (url) => {
    return axios
        .get(baseUrl+url)
        .then((res) => res.data)
        .catch((err) => {
            throw new Error(err);
        });
};

module.exports={get}
