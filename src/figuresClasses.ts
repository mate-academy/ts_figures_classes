const roundDownToHundredths = (value: number): number => {
  return Math.floor(value * 100) / 100;
};

type Shape = 'circle' | 'rectangle' | 'triangle';
type Color = 'red' | 'green' | 'blue';


export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}


export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';
  
  constructor(
        public readonly color: Color, // Public readonly property declared via shorthand
        private readonly width: number, // Private readonly property declared via shorthand
        private readonly height: number // Private readonly property declared via shorthand
    ) {
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive values.');
        }
        // Properties are automatically initialized by the shorthand, no 'this.width = width;' needed.
    }
 

  getArea(): number {
    return roundDownToHundredths(this.width * this.height);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';
  

  constructor(
        public readonly color: Color, // Public readonly property declared via shorthand
        private readonly radius: number // Private readonly property declared via shorthand
    ) {
        if (radius <= 0) {
            throw new Error('Radius must be a positive value.');
        }
    }

  getArea(): number {
    return roundDownToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
        public readonly color: Color, // Public readonly property declared via shorthand
        private readonly a: number, // Private readonly property declared via shorthand
        private readonly b: number, // Private readonly property declared via shorthand
        private readonly c: number // Private readonly property declared via shorthand
    ) {
        // Validation: all lengths must be positive
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All triangle sides must be positive.');
        }

        // Validation: Triangle Inequality Theorem (longest side must be < sum of the other two)
        const sides = [a, b, c].sort((x, y) => x - y);
        const [side1, side2, longest] = sides;

        if (longest >= side1 + side2) {
            throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle.`);
        }
    }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return roundDownToHundredths(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}
  
 
export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  return `A ${figure.color} ${figure.shape} - ${area}`;
}
 