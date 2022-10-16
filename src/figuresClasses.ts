type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color,
    public a: number,
    public b: number,
    public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('invalid length');
    }

    const sides = [a, b, c];

    sides.sort((num1:number, num2: number) => num1 - num2);

    if (sides[2] >= sides[1] + sides[0]) {
      throw new Error('longest side is greater than sum of the other two');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    const area = (Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color;

  constructor(color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('invalid radius');
    }
    this.color = color;
  }

  getArea():number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  constructor(color: Color, public width, public height) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('invalid lengths');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
