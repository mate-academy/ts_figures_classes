type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a:number;

  b:number;

  c:number;

  constructor(color: Color, a:number, b:number, c:number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('incorrect triangle side length');
    }

    const sidesMinToMax = [a, b, c].sort((side1, side2) => side1 - side2);

    if (sidesMinToMax[2] >= sidesMinToMax[0] + sidesMinToMax[1]) {
      throw new Error('incorrect triangle side length');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea():number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(s
        * (s - this.a)
        * (s - this.b)
        * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('incorrect circle radius');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea():number {
    const area:number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('incorrect rectangle size');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
