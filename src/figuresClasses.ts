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

    if (maxSide === a) {
      sumSmallerSize = b + c;
    } else if (maxSide === b) {
      sumSmallerSize = a + c;
    } else {
      sumSmallerSize = a + b;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be higher than 0');
    } else if (maxSide >= sumSmallerSize) {
      throw new Error('The longest side should not be lower than two others');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number
    = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    const roundedArea: number = Math.floor(area * 100) / 100;

    return roundedArea;
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
    const area: number = Math.PI * (this.radius ** 2);
    const roundedArea: number = Math.floor(area * 100) / 100;

    return roundedArea;
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
    const area: number = this.width * this.height;
    const roundedArea: number = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();
  const message: string = `A ${figure.color} ${figure.shape} - ${area}`;

  return message;
}
