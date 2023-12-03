type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number;
}

function getRound(area: number) :number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((num1, num2) => num1 - num2);

    if (sides.some((side) => side <= 0)
        || sides[2] >= sides[0] + sides[1]) {
      throw new Error('Type correct side value');
    }
  }

  getArea(): number {
    const semiperimetr: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(semiperimetr * (semiperimetr - this.a)
      * (semiperimetr - this.b) * (semiperimetr - this.c));

    return getRound(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Type correct value');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return getRound(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Type correct value');
    }
  }

  getArea(): number {
    const area: number = this.height * this.width;

    return getRound(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
