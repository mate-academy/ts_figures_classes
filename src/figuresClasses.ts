type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const isCorrectTriangle = (a: number, b: number, c: number): void => {
  const numbers: number[] = [a, b, c];

  if (numbers.filter((number) => number <= 0).length > 0) {
    throw new Error('A side should not be 0 or less');
  }

  const max: number = Math.max(...numbers);
  const maxIndex: number = numbers.indexOf(max);
  let sum: number = 0;

  numbers.forEach((number, i) => {
    if (i !== maxIndex) {
      sum += number;
    }
  });

  if (max >= sum) {
    throw new Error('Incorrect lengths of sides');
  }
};

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: Shape = 'triangle',
  ) {
    isCorrectTriangle(sideA, sideB, sideC);
  }

  getArea(): number {
    const perimiter: number = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      perimiter * (perimiter - this.sideA) * (
        perimiter - this.sideB) * (perimiter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('A radius should be more than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public shape: Shape = 'rectangle',
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Incorrect lengths of sides');
    }
  }

  getArea(): number {
    return Math.floor(this.sideA * this.sideB * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
