type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (
      a < b + c
      && b < c + a
      && c < b + a
      && a > 0
      && b > 0
      && c > 0
    ) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.color = color;
    } else {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  radius: number;

  color: Color;

  shape: Shape = 'circle';

  constructor(color: Color, radius: number) {
    if (radius > 0) {
      this.radius = radius;
      this.color = color;
    } else {
      throw new Error('Radius equal to zero');
    }
  }

  getArea(): number {
    const area: number = (Math.PI * (this.radius ** 2));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: Color;

  shape: Shape = 'rectangle';

  constructor(color: Color, width: number, height: number) {
    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
      this.color = color;
    } else {
      throw new Error('One of the sides equal to zero');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
