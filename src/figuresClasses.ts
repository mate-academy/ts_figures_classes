export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('Error');
    }

    if (this.sideA + this.sideB <= this.sideC
      || this.sideA + this.sideC <= this.sideB
      || this.sideB + this.sideC <= this.sideA) {
      throw new Error('Error');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const side = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(side * (side - this.sideA)
    * (side - this.sideB)
    * (side - this.sideC));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
