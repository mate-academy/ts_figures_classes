export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('error message');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    return Math.round(parseFloat((this.height * this.width).toFixed(2)));
  }
}

export function getInfo(figure: Figure): string {
  let description: string;

  if (figure instanceof Triangle) {
    description = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  } else if (figure instanceof Circle) {
    description = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  } else if (figure instanceof Rectangle) {
    description = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  return description;
}
