export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  sides: number[];

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of the side cannot be 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The given lengths cannot form a triangle.');
    }

    this.shape = 'triangle';
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const s = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;

    return Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]),
    );
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius cannot be 0.');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height cannot be 0.');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const resultArea = figure.getArea();
  const fixedArea =
    resultArea % 1 === 0 ? resultArea.toFixed(0) : resultArea.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${fixedArea}`;
}
