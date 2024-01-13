export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error('Side should be greater than 0 !');
    }

    const isTriangleValid = side1 + side2 > side3
    && side1 + side3 > side2
    && side2 + side3 > side1;

    if (!isTriangleValid) {
      throw new Error('Invalid triangle sides');
    }

    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    const area = Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0 :)');
    }

    this.shape = 'circle';
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return parseFloat((Math.floor(area * 100) / 100).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Side should be greater than 0 :))');
    }

    this.shape = 'rectangle';
    this.color = color;
  }

  getArea(): number {
    const area = this.sideA * this.sideB;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
