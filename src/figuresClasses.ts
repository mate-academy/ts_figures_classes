type Shape = 'triangle' | 'circle' | "rectangle";
type Color = 'red' | 'green' | 'blue';
export interface Figure {
shape :Shape;
color :Color;
getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';
constructor(public color: Color, public a: number, public b: number, public c: number) {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Length of each side must be greater than 0');
  }
  if (a >= b + c || b >= a + c || c >= a + b) {
    throw new Error('The longest side of a triangle must be less than the sum of the other two sides');
  }
}

getArea(): number {
  const s = (this.a + this.b + this.c) / 2;
  return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Length of radius must be greater than 0');
    }
  }

  getArea(): number {
      const s = this.radius * this.radius * Math.PI;
      return s;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';
  constructor(public color: Color, public width: number, public height: number ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be greater than 0');
    }
  }

  getArea(): number {
    const s = this.width * this.height;
    return s;
}
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}


const redRectangle = new Rectangle('red', 3, 5);

console.log(getInfo(redRectangle));
