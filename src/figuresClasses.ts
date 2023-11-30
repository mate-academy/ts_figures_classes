type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color,
  shape?: Shape,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);
    let sumSmallerSize: number;

    switch (maxSide) {
      case a:
        sumSmallerSize = b + c;
        break;
      case b:
        sumSmallerSize = a + c;
        break;
      case c:
        sumSmallerSize = a + b;
        break;
      default:
        return;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be higher than 0');
    } else if (maxSide >= sumSmallerSize) {
      throw new Error('The longest side should not be lower than two others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;
    const area: number
    = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be higher than 0');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area: number = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides should be higher than 0');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area: number = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area: number = figure.getArea();
  const message: string = `A ${color} ${shape} - ${area}`;

  return message;
}
