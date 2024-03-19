type Color = `red` | `green` | `blue`;

type Shape = `triangle` | `circle` | `rectangle`;

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  sides: number[];

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle sides: cannot form a triangle');
    }
    this.sides = [this.a, this.b, this.c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const area = (a + b + c) / 2;

    return +Math.sqrt(area * (area - a) * (area - b) * (area - c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  sides: number[];

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be greater than 0');
    }
    this.sides = [this.width, this.height];
  }

  getArea(): number {
    const [width, height] = this.sides;
    const area = width * height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
