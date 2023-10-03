type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((side1, side2) => side2 - side1);

    if (a <= 0 || b <= 0 || c <= 0 || sides[0] >= sides[1] + sides[2]) {
      throw new Error('The size of the figure is not correct!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiP = 0.5 * (a + b + c);
    const area = Math.floor(
      Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c)) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The size of the figure is not correct!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The size of the figure is not correct!');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
