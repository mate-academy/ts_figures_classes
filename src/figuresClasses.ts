export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea():number;
}

export class Triangle {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (Math.min(sideA, sideB, sideC) <= 0) {
      throw new Error('values is not valid');
    }

    const sum = sideA + sideB;

    if (sum <= sideA || sum <= sideB || sum <= sideC) {
      throw new Error('values is not valid');
    }
  }

  getArea():number {
    const perimeter: number = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      perimeter * (perimeter - this.sideA)
       * (perimeter - this.sideB)
       * (perimeter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape:string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`radius: ${this.radius} is not valid`);
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;

    return area;
  }
}

export class Rectangle {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public length: number,
    public width: number,
  ) {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error('values is not valid');
    }
  }

  getArea(): number {
    const area = this.length * this.width;

    return Math.floor(area);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
