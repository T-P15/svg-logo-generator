class Shapes {
    constructor(text, textColour, colour){
        this.text= text;
        this.textColour= textColour;
        this.colour= colour;
    }
};


class Circle extends Shapes {
    constructor(text, textColour, colour){
        Shapes.call(this, text, textColour, colour)

    }

    createCircle(){

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="3" fill="$(this.colour)" />
      
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="$(this.textColour)">$(this.text)</text>
      </svg>` 

    }
};


class Square extends Shapes {
    constructor(text, textColour, colour){
        Shapes.call(this, text, textColour, colour)

    }

    createSquare(){

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="140" height="140" fill="$(this.colour)" />
      
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="$(this.colour)">$(this.text)</text>
      </svg>`

    }
};


class Triangle extends Shapes {
    constructor(text, textColour, colour){
        Shapes.call(this, text, textColour, colour)

    }

    createTriangle(){

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 40,140 160,140" fill="$(this.colour)" />
      
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="$(this.textColour)">$(this.text)</text>
      </svg>`

    }
};

module.exports = {Shapes, Circle, Triangle, Square}