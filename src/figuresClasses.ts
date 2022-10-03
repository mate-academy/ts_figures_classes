type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea():number;
}

export class Triangle {
  shape: Shapes;

  color: Colors;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: Colors, sideA: number, sideB: number, sideC: number) {
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.shape = 'triangle';

    if (this.sideA + this.sideB <= this.sideC
      || this.sideA + this.sideC <= this.sideB
      || this.sideB + this.sideC <= this.sideA) {
      throw Error('sides is invalid');
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;

    return +((Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    )).toFixed(2));
  }
}

export class Circle {
  shape: Shapes;

  color: Colors;

  radius: number;

  constructor(color: Colors, radius: number) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (radius <= 0) {
      throw Error('radius is invalid');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes;

  color: Colors;

  width: number;

  height: number;

  constructor(color: Colors, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw Error('height or width is invalid');
    }
  }

  getArea(): number {
    return +((this.height * this.width).toFixed(2));
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
