enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shapes;

  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.shape = Shapes.Triangle;

    const sides = [a, b, c];
    const longest = Math.max(...sides);

    sides.splice(sides.indexOf(longest), 1);

    const sum = sides.reduce((acc, curr) => acc + curr, 0);

    if (a <= 0 || b <= 0 || c <= 0 || longest >= sum) {
      throw new Error('U pass not valid sides to calculate Triangle');
    }
  }

  public getArea(): number {
    return (
      Math.floor(
        (Math.sqrt(
          4 * this.a ** 2 * this.b ** 2
            - (this.a ** 2 + this.b ** 2 - this.c ** 2) ** 2,
        )
          / 4)
          * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: Shapes;

  constructor(public color: string, private radius: number) {
    this.shape = Shapes.Circle;

    if (radius <= 0) {
      throw new Error('U pass not valid radius to calculate Circle');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes;

  constructor(
    public color: string,
    private widht: number,
    private height: number,
  ) {
    this.shape = Shapes.Rectangle;
    this.color = color;
    this.widht = widht;
    this.height = height;

    if (this.widht <= 0 || this.height <= 0) {
      throw new Error('U pass not valid sides to calculate Rectangle');
    }
  }

  public getArea(): number {
    return Math.round(this.widht * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
