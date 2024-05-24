type Color = 'red' | 'blue' | 'green';
type Shape = 'circle' | 'triangle' | 'rectangle';

interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides length must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides length cannot form a triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();
  const formattedArea: string = Number.isInteger(area)
    ? area.toString()
    : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}

const triangle = new Triangle('red', 3, 4, 5);
const circle = new Circle('blue', 4);
const rectangle = new Rectangle('green', 5, 5);

getInfo(triangle);
getInfo(circle);
getInfo(rectangle);
