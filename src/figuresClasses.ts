export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The longest side of a triangle is not >= than a sum of two others',
      );
    }
  }

  public getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radius of circle is invalid value');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('One of the sides of rectangle is invalid value');
    }
  }

  public getArea(): number {
    return Math.floor((this.width * this.height * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
