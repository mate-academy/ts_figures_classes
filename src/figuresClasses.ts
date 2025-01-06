export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: (shape: string) => number;
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
      throw new Error('All sides of the triangle must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return figure.getInfo();
}
