type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: string;
  shape: Shape;
  r? : number;
  a? : number;
  b? : number;
  c? : number;
  width? : number;
  height?: number;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: string, public a: number,
    public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides have to be higher than 0');
    }

    if (a + b <= c) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a traingle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      (Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: string, public r: number) {
    if (r <= 0) {
      throw new Error('Radius have to be positive');
    }
    this.r = r;
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.r ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: string, public width: number,
    public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides have to be positive');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
