type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public firstNum: number,
    public secondNum: number,
    public thirdNum: number,
  ) {
    if (this.firstNum <= 0 || this.secondNum <= 0 || this.thirdNum <= 0) {
      throw new Error('Value should not be negative');
    }

    if (firstNum + secondNum <= thirdNum
      || secondNum + thirdNum <= firstNum
      || thirdNum + firstNum <= secondNum) {
      throw Error('Wrong values');
    }
  }

  getArea(): number {
    const sum = (this.firstNum + this.secondNum + this.thirdNum) / 2;

    const triangleArea = Math.sqrt(sum * (sum - this.firstNum)
      * (sum - this.secondNum)
      * (sum - this.thirdNum));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Value should not be negative');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('Value should not be negative');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.heigth * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
