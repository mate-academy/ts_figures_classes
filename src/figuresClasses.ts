export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length must be greater than zero!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('This cannot be a triangle!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const heronsFormula = (a + b + c) / 2;

    return Math.floor(
      Math.sqrt(heronsFormula
      * (heronsFormula - a)
      * (heronsFormula - b)
      * (heronsFormula - c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Invalid height or width, must be greater than zero!');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
