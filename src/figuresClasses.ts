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
  color: Color;
  private width: number;
  private height: number;

  constructor(color: Color, width: number, height: number) {

    if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive values.');
        }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return roundDownToHundredths(this.width * this.height);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';
  color: Color;
  private radius: number;

  constructor(color: Color, radius: number) {

    if (radius <= 0) {
            throw new Error('Radius must be a positive value.');
        }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return roundDownToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';
  color: Color;
  private a: number;
  private b: number;
  private c: number;

  constructor(color: Color, a: number, b: number, c: number) {

    if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('Sides must be positive values.');
        }
        const sides = [a, b, c].sort((x, y) => x - y);
        const [side1, side2, longest] = sides;
        if (longest >= side1 + side2) {
          throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle.`);
        }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return roundDownToHundredths(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}
  
 
export function getInfo(figure): string {
  const area = figure.getArea();
  return `This is a ${figure.color} ${figure.shape} with area ${area} cm squared.`;
}
 