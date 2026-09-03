export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'circle' | 'triangle' | 'rectangle';

  getArea(): number;
}
export class Triangle implements Figure {
  color: Figure['color'];

  shape: 'triangle' = 'triangle';

  constructor(
    color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle with such sides does not exist');
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}
export class Circle implements Figure {
  color: Figure['color'];

  shape: 'circle' = 'circle';

  constructor(
    color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be a positive number');
    }

    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}
export class Rectangle implements Figure {
  color: Figure['color'];

  shape: 'rectangle' = 'rectangle';

  constructor(
    color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be positive numbers');
    }

    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
