type Shapes = 'triangle'|'circle'|'rectangle';
type Colors = 'red'|'green'|'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: object;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || a + c <= b
      || a + b <= c
      || b + c <= a) {
      throw new Error('Неправильн0!');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('хочу більше!');
    }
  }

  getArea():number {
    return +(this.radius ** 2 * 3.14).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('ерор');
    }
  }

  getArea():number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
