export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(public color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides should be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s : number = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}
export class Circle implements Figure {
  shape : string = 'circle';

  r: number;

  constructor(public color: string, r: number) {
    if (r <= 0) {
      throw new Error('Radius should be greater than 0');
    }
    this.r = r;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  width: number;

  height: number;

  constructor(public color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure) : string {
  const area = figure.getArea();
  const formattedArea = !Number.isInteger(area)
    ? area.toFixed(2)
    : parseInt(area.toString(), 10);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
