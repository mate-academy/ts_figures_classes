export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: string;

  constructor(
    readonly color: string,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("Sides can't form triangle");
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const P: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape: string;

  constructor(
    readonly color: string,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: string;

  constructor(
    readonly color: string,
    readonly width: number,
    readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
