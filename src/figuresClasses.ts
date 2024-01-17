export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('There is no such Triangle');
    }

    const maxSide = Math.max(a, b, c);
    const sumOfOtherTwo = a + b + c - maxSide;

    if (maxSide >= sumOfOtherTwo) {
      throw new Error('There is no such Triangle');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number
      = parseFloat((
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      ).toFixed(2));

    return area;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('There is no such Circle');
    }
  }

  getArea(): number {
    const area: number
      = parseFloat((Math.round((
        Math.PI * this.radius * this.radius * 100)) / 100).toFixed(2));

    return area;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('There is no such Rectangle');
    }
  }

  getArea(): number {
    const area: number
      = parseFloat(Math.round(this.height * this.width).toFixed(2));

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const result: string
    = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
