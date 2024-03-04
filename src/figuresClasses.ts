export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Properties length must be greater than ');
    }

    if (sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideB + sideC <= sideA) {
      throw new Error('Triangel cannot consists of these sides');
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(color: string, public radious: number) {
    this.color = color;

    if (this.radious <= 0) {
      throw new Error('radious is incorrect value');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radious ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(color: string, public sideA: number, public sideB: number) {
    this.color = color;

    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Properties length must be greater than ');
    }
  }

  getArea(): number {
    const area = this.sideA * this.sideB;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
