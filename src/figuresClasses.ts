export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  shape: string;

  sides: number[];

  constructor(color: string, a: number, b: number, c: number) {
    this.triangleValidator(a, b, c);

    this.shape = 'triangle';
    this.color = color;
    this.sides = [a, b, c];
  }

  triangleValidator = (a: number, b: number, c: number) :void => {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of each side must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides cannot form a triangle.');
    }
  };

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: string;

  shape: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.circleValidator(radius);

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  circleValidator = (radius: number) :void => {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  };

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  color: string;

  shape: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.rectangleValidator(width, height);

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  rectangleValidator = (width: number, height: number) :void => {
    if (width <= 0 || height <= 0) {
      throw new Error('Side must be greater than 0.');
    }
  };

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
