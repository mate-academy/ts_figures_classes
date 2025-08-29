export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function checkSideLength(shape: string, ...nums: number[]): void {
  if (!nums.every((num) => num > 0)) {
    throw new Error(
      shape === 'circle'
        ? 'The radius of a circle must be a positive number.'
        : `All side lengths for a ${shape} must be positive numbers.`,
    );
  }
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    checkSideLength(this.shape, sideA, sideB, sideC);

    const longestSide = Math.max(sideA, sideB, sideC);

    const sum = sideA + sideB + sideC;

    if (sum - longestSide <= longestSide) {
      throw new Error(
        `Sides ${sideA}, ${sideB}, ${sideC} cannot form a triangle (triangle inequality).`,
      );
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    checkSideLength(this.shape, radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    checkSideLength(this.shape, width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
