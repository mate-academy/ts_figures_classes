export interface Figure {
  shape: string,
  color: string,
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color:string, public a: number, public b: number, public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle sides arent correct');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  constructor(color: string, public radius: number) {
    this.radius = radius;
    this.color = color;
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radies isnt correct');
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  constructor(color: string, public width: number, public height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error('Height or width of rectangle isnt correct');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return (`A ${color} ${shape} - ${area}`);
}
