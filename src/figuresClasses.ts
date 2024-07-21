export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function area(areaRound: number): number {
  return Math.floor(areaRound * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle side lengths must be greater than 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(
        'Triangle side lengths must adhere to the triangle inequality theorem',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const areaRound = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return area(areaRound);
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }
  }

  getArea(): number {
    const areaRound = Math.PI * this.radius ** 2;

    return area(areaRound);
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0');
    }
  }

  getArea(): number {
    const areaRound = this.width * this.height;

    return area(areaRound);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
