const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./src/assets/shapes');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const questions = require('./src/assets/questions');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


const init = () => {
    inquirer.prompt(questions)
    .then((data) =>{
        switch (`${data.shape}`) {
            case 'Square': 
            const square = new Square(data.text, data.textColour, data.colour)
            fs.writeFile("src/display/logo.svg", square.createSquare(), (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log ("logo created successfully")
                }
            });

            break;

            case 'Circle': 
            const circle = new Circle(data.text, data.textColour, data.colour)
            fs.writeFile("src/display/logo.svg", circle.createCircle(), (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log ("logo created successfully")
                }
            });

            break;

            case 'Triangle':
            const triangle = new Triangle(data.text, data.textColour, data.colour)
            fs.writeFile("src/display/logo.svg", triangle.createTriangle(), (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log ("logo created successfully")
                 }
            }); 
        };
    });
};

init();
