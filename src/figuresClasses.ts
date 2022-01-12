type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type Sides = number[];

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

function isValidSides(sides: Sides): void {
  if (sides.some((side: number) => side <= 0)) {
    throw new Error('Invalid input data');
  }

  if (sides.length === 3) {
    const max = Math.max(...sides);
    const test: number[] = [...sides];

    test.splice(test.indexOf(max), 1);

    if (max >= test[0] + test[1]) {
      throw new Error('Invalid input data');
    }
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, ...sides: Sides) {
    isValidSides(sides);

    const [a, b, c] = [...sides];

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    let area = Math.sqrt(4 * (this.a * this.b) ** 2
    - (this.a ** 2 + this.b ** 2 - this.c ** 2) ** 2) / 4;

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, ...sides: Sides) {
    isValidSides(sides);

    const [radius] = [...sides];

    this.color = color;

    this.radius = radius;
  }

  getArea(): number {
    let area = Math.PI * this.radius ** 2;

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, ...sides: Sides) {
    isValidSides(sides);

    const [width, height] = [...sides];

    this.color = color;

    this.width = width;

    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
