export interface Figure {
  shape: 'circle' | 'triangle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("sides can't form a triangle");
    } else if (a <= 0 || b <= 0 || c <= 0) {
      if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error('Sides must be greater than 0');
      }
    }
  }

  getArea(): number {
    const half: number = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(
      half * (half - this.a) * (half - this.b) * (half - this.c),
    );
    const mult = area * 100;

    return Math.floor(mult) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0!');
    }
  }

  getArea(): number {
    const cont = Math.PI * this.radius * this.radius;

    return Math.floor(cont * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public height: number,
    public width: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // return typeof figure;
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
