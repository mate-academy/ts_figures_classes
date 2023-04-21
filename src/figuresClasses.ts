export interface Figure {
  shape: 'triangle' | 'circle' |'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea: Function,
}

export class Triangle implements Figure {
  constructor(public color: 'red' | 'green' | 'blue', public a: number,
    public b: number, public c: number, public shape: 'triangle' = 'triangle') {
    const theLongest = Math.max(a, b, c);
    const sides = [a, b, c];
    const shorterSides = sides.filter((x) => x !== theLongest);

    if (theLongest >= shorterSides[0] + shorterSides[1]) {
      throw new Error('This is not a triangle!');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('This is not a triangle!');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  constructor(public color: 'red' | 'green' | 'blue',
    public r: number, public shape: 'circle' = 'circle') {
    if (this.r <= 0) {
      throw new Error('This is not a circle!');
    }

    this.shape = 'circle';
    this.color = color;
    this.r = r;
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(public color:'red' | 'green' | 'blue',
    public a: number, public b: number,
    public shape: 'rectangle' = 'rectangle') {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('This is not a rectangle!');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
