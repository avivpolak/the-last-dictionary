const getAllPossibleLetters = (options) => {
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

module.exports={getAllPossibleLetters}