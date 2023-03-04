type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function checkTriangle(sides:number[]):boolean {
  const maxSide = Math.max(...sides);
  const sum = sides
    .filter((el:number) => el !== maxSide)
    .reduce((a, b) => a + b, 0);

  return sum <= maxSide;
}

export function checkSides(sides:number[]):boolean {
  return sides.some((el:number) => el <= 0);
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkSides([a, b, c])) {
      throw new Error('Incorrect data: non-positive sides(s)');
    }

    if (checkTriangle([a, b, c])) {
      throw new Error('Incorrect data: not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return +(area).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkSides([radius])) {
      throw new Error('Incorrect data: non-positive radius');
    }
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2);

    return +(res).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (checkSides([width, height])) {
      throw new Error('Incorrect data: non-positive sides(s)');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
