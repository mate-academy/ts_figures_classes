export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: 'red' | 'green' | 'blue';

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number, b: number, c: number,
    shape: 'triangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Error');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = shape;
  }

  // P=√p⋅(p−a)⋅(p−b)⋅(p−c), gdzie:
  //  p – połowa obwodu trójkąta p=½(a+b+c),

  getArea(): number {
    const partCircuit = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(partCircuit
      * (partCircuit - this.a)
      * (partCircuit - this.b)
      * (partCircuit - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: 'red' | 'green' | 'blue';

  public radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0 || radius === undefined) {
      throw new Error('Error');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  public shape: 'rectangle' = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  public a: number;

  public b: number;

  constructor(color: 'red' | 'green' | 'blue', a: number, b: number) {
    if (a <= 0 || b <= 0 || b === undefined) {
      throw new Error('Error');
    }
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return Math.floor((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
