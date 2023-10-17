type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || b + c <= a
      || c + a <= b
    ) {
      throw new Error('The input length of a side is invalid');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt((semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c)));

    if (area % 1 === 0) {
      area = Math.floor(area);
    } else {
      area = Number(area.toFixed(2));
    }

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The input length of a radius is invalid');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
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
      throw new Error('The input length of a side is invalid');
    }
  }

  getArea(): number {
    let area: number = this.width * this.height;

    if (area % 1 === 0) {
      area = Math.floor(area);
    } else {
      area = Number(area.toFixed(2));
    }

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const info = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return info;
}
