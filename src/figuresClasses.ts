export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

function triangleArea(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function circleArea(radius: number): number {
  return radius ** 2 * Math.PI;
}

function rectangleArea(width: number, height: number): number {
  return width * height;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape = 'triangle',
  ) {
    this.getArea();
  }

  getArea(): number {
    const sides = [this.a, this.b, this.c];
    const area = triangleArea(this.a, this.b, this.c);
    const indexOfLongest = sides.indexOf(Math.max(...sides));
    let counter = 0;

    if (Math.min(...sides) <= 0) {
      throw new Error();
    }

    for (let i = 0; i < sides.length; i++) {
      if (i === indexOfLongest) {
        continue;
      }

      counter += sides[i];
    }

    if (sides[indexOfLongest] >= counter) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    this.getArea();
  }

  getArea(): number {
    if (this.radius <= 0) {
      throw new Error();
    }

    const area = circleArea(this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    this.getArea();
  }

  getArea(): number {
    if (Math.min(this.width, this.height) <= 0) {
      throw new Error();
    }

    const area = rectangleArea(this.width, this.height);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
