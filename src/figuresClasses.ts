  type Shape = 'triangle' | 'circle' | 'rectangle';
  type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Sides must be positive numbers',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides must be greater than the third one',
      );
    }
  }

  getArea(): number {
    const square = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      square * (square - this.a) * (square - this.b) * (square - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radiuds has to be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
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
      throw new Error('Width and height has to be greater than 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
