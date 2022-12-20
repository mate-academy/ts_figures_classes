type FigureColor = 'red' | 'green' | 'blue';
type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || (a + b) <= c
      || (c + a) <= b
      || (c + b) <= a
    ) {
      throw new Error('Wrong sides!');
    }
  }

  getArea(): number {
		{a, b , c} = this;
    const halfPerim = (a + b + c) / 2;
    const area = Math.sqrt(halfPerim * (halfPerim - a)
      * (halfPerim - b) * (halfPerim - c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong sides!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong sides!');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
