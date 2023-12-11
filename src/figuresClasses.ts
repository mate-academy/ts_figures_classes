export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    readonly color: string,
    readonly sideA: number,
    readonly sideB: number,
    readonly sideC: number,
    readonly shape: string,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Side lengths must be greater than 0.');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB
    ) {
      throw new Error('Not a triangle');
    }

    this.shape = 'triangle';
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(s * (s - this.sideA)
      * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    readonly color: string,
    readonly radius: number,
    readonly shape: string,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    readonly color: string,
    readonly width: number,
    readonly height: number,
    readonly shape: string,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
