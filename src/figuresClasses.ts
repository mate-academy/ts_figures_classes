export interface Figure {
  shape: 'triangle' | 'rectangle' | 'circle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  color: Figure['color'];

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(
    color: Figure['color'],
    sideA: number,
    sideB: number,
    sideC: number,
  ) {
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if ((this.sideA + this.sideB <= this.sideC
      || this.sideB + this.sideC <= this.sideA
      || this.sideC + this.sideA <= this.sideB)) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }

    if (!(this.sideA > 0
      && this.sideB > 0
      && this.sideC > 0)) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const semiP = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(semiP * (semiP - this.sideA)
    * (semiP - this.sideB) * (semiP - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  color: Figure['color'];

  radius: number;

  constructor(
    color: Figure['color'],
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('negative radius');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  color: Figure['color'];

  width: number;

  height: number;

  constructor(
    color: Figure['color'],
    width: number,
    height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (!(this.height > 0 && this.width > 0)) {
      throw new Error('width and height can\'t form a rectangle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
