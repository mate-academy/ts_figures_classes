export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0
      || sideB <= 0
      || sideC <= 0
    ) {
      throw new Error('side must be greater than zero');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB
    ) {
      throw new Error(
        'side of the triangle must be less than the sum of the other two',
      );
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    ) * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('the radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side must be greater than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
