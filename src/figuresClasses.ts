type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arr = [a, b, c]
      .sort((number1: number, number2: number) => number2 - number1);
    const check = arr[0] >= (arr[1] + arr[2]);

    if (check === true) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('invalid side length');
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      semi * (semi - this.a) * (semi - this.b) * (semi - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('invalid width or height');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const square = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${square}`;
}
