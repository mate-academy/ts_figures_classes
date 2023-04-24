type Shape ='triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  private halfSides: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.halfSides = (this.a + this.b + this.c) / 2;
    this.checkSides();
  }

  private checkSides(): void {
    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw new Error('That is not a triagnle!');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side value should be more than 0');
    }
  }

  getArea(): number {
    return Math.round((Math.sqrt(this.halfSides * (this.halfSides - this.a)
    * (this.halfSides - this.b) * (this.halfSides - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
    this.checkMeth();
  }

  private checkMeth(): void {
    if (this.radius <= 0) {
      throw new Error('It should be positive value');
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: string;

  a: number;

  b: number;

  constructor(color: string, a: number, b: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.checkSides();
  }

  private checkSides(): void {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Enter correct value of side');
    }
  }

  getArea(): number {
    return Math.round((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
