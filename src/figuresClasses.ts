type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  sides: number[];

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of side should be grater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('These parameters cannot create a triangle');
    }

    this.shape = 'triangle';
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const areaT = (a + b + c) / 2;

    const areaTr = Math.sqrt(areaT * (areaT - a) * (areaT - b) * (areaT - c));

    return Math.floor(areaTr * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  radius: number;

  constructor(color: Figure['color'], radius: number) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const areaC = Math.PI * this.radius * this.radius;

    return Math.floor(areaC * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  width: number;

  height: number;

  constructor(color: Figure['color'], width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
