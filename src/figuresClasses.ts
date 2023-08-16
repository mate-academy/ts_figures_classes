export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (
      sideA <= 0 || sideB <= 0 || sideC <= 0
    ) {
      throw new Error('All sides should be positive numbers!');
    }

    if (
      sideA + sideB <= sideC
      || sideB + sideC <= sideA
      || sideC + sideA <= sideB
    ) {
      throw new Error('Those values can\'t form a triangle.');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(s * (s - this.sideA)
      * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be a positive number!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides should be positive numbers!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
