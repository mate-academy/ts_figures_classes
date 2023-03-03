export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(color: 'red'
  | 'green' | 'blue', a: number, b: number, c: number) {
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (this.a + this.b <= this.c || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const areaValue = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return areaValue;
  }
}

export class Circle implements Figure {
  radius: number;

  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.shape = 'circle';
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.color = color;
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();
  const formattedArea = Number.isInteger(area) ? area : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
