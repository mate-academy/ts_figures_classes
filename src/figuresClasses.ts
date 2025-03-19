export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Invalid side length: All sides must be greater than zero. Received a: ${a}, b: ${b}, c: ${c}`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Invalid sides: The sides do not form a valid triangle. Received a: ${a}, b: ${b}, c: ${c}`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Invalid radius: Radius must be greater than zero. Received radius: ${radius}`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Invalid dimensions: Width and height must be greater than zero. Received width: ${width}, height: ${height}`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  if (figure instanceof Rectangle) {
    return `A ${figure.color} rectangle - ${area}`;
  } else if (figure instanceof Circle) {
    return `A ${figure.color} circle - ${area}`;
  } else if (figure instanceof Triangle) {
    return `A ${figure.color} triangle - ${area}`;
  }

  return typeof figure;
}
