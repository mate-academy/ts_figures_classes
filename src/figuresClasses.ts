export interface Figure {
  shape: 'triangle' | 'rectangle' | 'circle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: 'red' | 'green' | 'blue',
    sideA: number, sideB: number, sideC: number) {
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if (
      sideA <= 0
      || sideB <= 0
      || sideC <= 0
      || sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideB + sideC <= sideA
    ) {
      throw new Error('A triangle with the given side lengths '
      + 'does not exist');
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB)
    * (p - this.sideC));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be bigger than 0');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height must be above 0!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
