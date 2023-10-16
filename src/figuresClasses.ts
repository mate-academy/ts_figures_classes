enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape :Shapes = Shapes.Triangle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides should be posotive numbers');
    }

    const sortedSides = [this.a, this.b, this.c].sort((x, y) => y - x);

    if (sortedSides[0] >= ((sortedSides[1] + sortedSides[2]))) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.a} can't form a triangle`,
      );
    }
  }

  getArea() :number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    * 100) / 100;
  }
}

export class Circle implements Figure {
  shape :Shapes = Shapes.Circle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`Radius (${this.radius}) should be a posotive number`);
    }
  }

  getArea(): number {
    return (Math.floor(Math.PI * this.radius * this.radius * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape :Shapes = Shapes.Rectangle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('All sides should be posotive numbers');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure) :string {
  const { color, shape } = figure;
  const area: number = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
