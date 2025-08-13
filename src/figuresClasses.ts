export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Triangle side a must be greater than 0, but got ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Triangle side b must be greater than 0, but got ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Triangle side c must be greater than 0, but got ${c}`);
    }

    if (a + b <= c) {
      throw new Error(
        `Triangle side c (${c}) is too long; must be less than sum of a + b (${a + b})`,
      );
    }

    if (a + c <= b) {
      throw new Error(
        `Triangle side b (${b}) is too long; must be less than sum of a + c (${a + c})`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Triangle side a (${a}) is too long; must be less than sum of b + c (${b + c})`,
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error(
        `Circle radius must be greater than 0, but got ${radius}`,
      );
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0) {
      throw new Error(
        `Rectangle width must be greater than 0, but got ${width}`,
      );
    }

    if (height <= 0) {
      throw new Error(
        `Rectangle height must be greater than 0, but got ${height}`,
      );
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
