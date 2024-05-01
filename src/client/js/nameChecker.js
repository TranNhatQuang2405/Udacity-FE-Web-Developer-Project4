function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "The 85th Academy Awards ceremony took place February 24, 2013."
    ];

    if (names.includes(inputText)) {
        return true;
    }
    else {
        return false;
    }
}

export { checkForName };
