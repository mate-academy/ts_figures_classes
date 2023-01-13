export interface Figure {
  shape: 'triangle'|'circle'|'rectangle';
  color: 'red'|'green'|'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect length');
    }

    const longestSide = Math.max(a, b, c);
    const sum = this.a + this.b + this.c;

    if (longestSide >= sum - longestSide) {
      throw new Error('Incorrect length in parameters!');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    const trArea = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(trArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect length in parameters!');
    }
  }

  getArea():number {
    const ciArea = Math.PI * this.radius ** 2;

    return Math.floor(ciArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect length in parameters!');
    }
  }

  getArea():number {
    const recArea = this.width * this.height;

    return recArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
