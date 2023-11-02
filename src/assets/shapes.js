class Shapes {
    constructor(text, textColour, colour){
        this.text= text;
        this.textColour= textColour;
        this.colour= colour;
    }
};


class Circle extends Shapes {
    constructor(text, textColour, colour){
        super(text, textColour, colour)

    }

    createCircle(){

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.colour}" />
      
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColour}">${this.text}</text>
      </svg>`

    }
};


class Square extends Shapes {
    constructor(text, textColour, colour){
        super( text, textColour, colour)

    }

    createSquare(){

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="30" width="140" height="140" fill="${this.colour}" />
      
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColour}">${this.text}</text>
      </svg>`

    }
};


class Triangle extends Shapes {
    constructor(text, textColour, colour){
        super(text, textColour, colour)

    }

    createTriangle(){

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 40,140 260,140" fill="${this.colour}" />
      
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColour}">${this.text}</text>
      </svg>`

    }
};

module.exports = {Shapes, Circle, Triangle, Square}