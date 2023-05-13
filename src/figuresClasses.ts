
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
      throw new Error('Invalid triangle side length');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Invalid triangle side length');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const areaValue = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.round(areaValue * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius length');
    }
  }

  getArea(): number {
    const areaValue = Math.PI * this.radius * this.radius;

    return Math.floor(areaValue * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    const areaValue = this.width * this.height;

    return Math.floor(areaValue * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
