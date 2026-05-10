export interface Figure {
  shape: 'circle' | 'triangle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number = 0;

  b: number = 0;

  c: number = 0;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.c >= this.a + this.b) {
      throw new Error(
        "throws an error: sides 1, 2 and 3 can't form a triangle",
      );
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

  color: 'red' | 'green' | 'blue';

  radius: number = 0;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('No radius was found!');
    }
  }

  getArea(): number {
    const cont = Math.PI * this.radius * this.radius;

    return Math.floor(cont * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number = 0;

  height: number = 0;

  constructor(color: 'red' | 'green' | 'blue', height: number, width: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error("error! I don't know what I can say here!");
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
