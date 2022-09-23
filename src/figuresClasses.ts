type Color = 'red' | 'green' | 'blue';

function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: string,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);
    const sum = a + b + c;

    if (a <= 0 || b <= 0 || c <= 0 || max >= sum - max) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const halfSum = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfSum * (halfSum - this.a) * (halfSum - this.b) * (halfSum - this.c),
    );

    return roundArea(area);
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return roundArea(area);
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
