type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

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
    const longestSide = Math.max(a, b, c);
    const sumOfOthers = (a + b + c) - longestSide;

    if (a <= 0 || b <= 0 || c <= 0 || longestSide >= sumOfOthers) {
      throw new Error('ERROR!!!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) * 0.5;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('ERROR!!!');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return (Math.floor(area * 100) / 100);
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
      throw new Error('ERROR!!!');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return parseFloat((width * height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
