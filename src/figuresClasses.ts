
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export abstract class BaseFigure implements Figure {
  abstract readonly shape: Shape;

  abstract color: Color;

  abstract getArea(): number;
}

export class Triangle extends BaseFigure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();

    const arrayOfSides = [a, b, c];
    const isSomeSideNegative:boolean = arrayOfSides.some(
      (side: number) => (side < 0),
    );

    if (isSomeSideNegative) {
      throw new Error('All sides should be positive!');
    }

    const [
      sideA,
      sideB,
      sideC,
    ]: number[] = arrayOfSides.sort((prev, curr) => prev - curr);

    if (sideC >= sideA + sideB) {
      throw new Error('Impossible to built a triangle with these sides!');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle extends BaseFigure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    super();

    if (radius <= 0) {
      throw new Error('Radius should be only positive!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle extends BaseFigure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    super();

    if (width <= 0 || heigth <= 0) {
      throw new Error('Width adn Heigth should be only positive!');
    }
  }

  getArea(): number {
    return (Math.floor(this.width * this.heigth) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
