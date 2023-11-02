const {Square, Triangle, Circle}= require("./shapes")

describe('Square',() =>{
    it('should create svg with the following features', () =>{
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="30" width="140" height="140" fill="red" />
      
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="blue">lol</text>
      </svg>`
      const svgc = new Square("lol", "blue", "red");
      expect(svg).toEqual(svgc.createSquare());
    });
});

describe('Circle',() =>{
    it('should create svg with the following features', () =>{
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="red" />
      
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="blue">lol</text>
      </svg>`
      const svgc = new Circle("lol", "blue", "red");
      expect(svg).toEqual(svgc.createCircle());
    });
});

describe('Triangle',() =>{
    it('should create svg with the following features', () =>{
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 40,140 260,140" fill="red" />
      
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="blue">lol</text>
      </svg>`
      const svgc = new Triangle("lol", "blue", "red");
      expect(svg).toEqual(svgc.createTriangle());
    });
});