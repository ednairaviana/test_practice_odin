function capitalize(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const sentence = string.slice(1, string.length).toLowerCase();

    return firstLetter + sentence;
}

module.exports = capitalize;