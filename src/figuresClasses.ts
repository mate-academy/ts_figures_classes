type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    const isValidProps: boolean = a > 0 && b > 0 && c > 0;
    const isValidSide: boolean = a + b > c && b + c > a && a + c > b;

    if (!isValidProps || !isValidSide) {
      throw new Error('invalid triengle');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(s
        * (s - this.a)
        * (s - this.b)
        * (s - this.c));

    return +Number(area).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('invalid circle');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;
    const areaStr: string = area.toString();
    const idx: number = areaStr.indexOf('.') + 3;
    const fixedArea: string = areaStr.slice(0, idx);

    return Number(fixedArea);
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('invalid rectangle');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
