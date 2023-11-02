const questions = [
    {
        type: "list",
        name: "shape",
        message: "please select a shape",
        choices: ['Circle','Square','Triangle']
    },
    {
        type: "maxlength-input",
        name: "text",
        message: "please choose your text (note your input is limited to 3 characters)",
        maxLength: 3
    },
    {
        type: "input",
        name: "textColour",
        message: "please choose the colour of your text"
    },
    {
        type: "input",
        name: "colour",
        message: "please choose the colour of your SVG"
    }
];

module.exports = questions