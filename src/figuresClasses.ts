function checkError(...sides: number[]): void {
  const isError = [...sides].some((el) => el <= 0);
  const sidesSum = [...sides].reduce((a, i) => a + i, 0);
  const maxSide = Math.max(...sides);
  const isTriangle = sides.length === 3
    ? (maxSide >= (sidesSum - maxSide)) : false;

  if (isError || isTriangle) {
    throw new Error('error message');
  }
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: string,
  color: string,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkError(this.a, this.b, this.c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a)
     * (s - this.b) * (s - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    checkError(this.radius);
  }

  getArea(): number {
    return +(Math.floor(Math.PI * this.radius * this.radius * 100)
    / 100).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    checkError(this.width, this.height);
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
