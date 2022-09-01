
export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longest = [a, b, c];
    const max: number = Math.max(...longest);

    longest.splice(longest.indexOf(max), 1);

    if ((a <= 0 || b <= 0 || c <= 0) || max >= (longest[0] + longest[1])) {
      throw new Error('Length less than zero');
    }

    if (max >= (longest[0] + longest[1])) {
      throw new Error('The longest side of a triangle'
      + 'is >= than a sum of two others');
    }
  }

  public getArea():number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Length less than zero');
    }
  }

  public getArea(): number {
    return (Math.floor((Math.PI * this.radius * this.radius) * 100)) / 100;
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public length: number,
    public width: number,
  ) {
    if (length <= 0 || width <= 0) {
      throw new Error('Length less than zero');
    }
  }

  public getArea():number {
    return +(this.length * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
