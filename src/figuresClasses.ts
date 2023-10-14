function floor(square: number): number {
  return Math.floor(square * 100) / 100;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: string,
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  color: string;

  constructor(
    color:string, public a: number, public b: number, public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle sides arent correct');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return floor(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: string;

  constructor(color: string, public radius: number) {
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('radius cant be less than zero');
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return floor(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: string;

  constructor(color: string, public width: number, public height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error('Height or width cant be less than zero');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return floor(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return (`A ${color} ${shape} - ${area}`);
}
