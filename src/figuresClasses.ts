type Colors = 'red' | 'green' | 'blue';

type Shapes = 'triangle' | 'circle' | 'rectangle';

function checkSide(...sides: number[]): boolean {
  const info = sides.sort((a, b) => b - a);

  return info[0] >= info[1] + info[2];
}

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea?(): number;
}

abstract class BaseFigure implements Figure {
  constructor(
    public shape: Shapes,
    public color: Colors,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends BaseFigure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super('triangle', color);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('entered invalid side/sides');
    }

    if (checkSide(a, b, c)) {
      throw new Error('its not a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c));

    return +square.toFixed(2);
  }
}

export class Circle extends BaseFigure {
  constructor(
    public color: Colors,
    public radius : number,
  ) {
    super('circle', color);

    if (radius <= 0) {
      throw new Error('entered invalid radius');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle extends BaseFigure {
  constructor(
    public color: Colors,
    public width : number,
    public height : number,
  ) {
    super('rectangle', color);

    if (width <= 0 || height <= 0) {
      throw new Error('entered invalid side/sides');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
