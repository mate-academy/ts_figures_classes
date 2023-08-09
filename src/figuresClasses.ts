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

  constructor(
    color: 'red' | 'green' | 'blue',
    sideA: number,
    sideB: number,
    sideC: number,
  ) {
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if ((this.sideA + this.sideB < this.sideC + 1
      || this.sideB + this.sideC < this.sideA + 1
      || this.sideC + this.sideA < this.sideB + 1)) {
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
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius < 0) {
      throw new Error('radius can\'t form a circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if ((this.width < 0
      || this.height < 0)) {
      throw new Error('width or height can\'t form a rectangle');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
