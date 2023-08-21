export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of a triangle must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(public color: Figure['color'], public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius of a circle must be greater than 0.');
    }
  }

  getArea(): number {
    const DECIMAL_PLACES = 2;

    return Math.floor((Math.PI * this.radius * this.radius)
     * (10 ** DECIMAL_PLACES)) / (10 ** DECIMAL_PLACES);
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height of a rectangle must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = area % 1 === 0 ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
