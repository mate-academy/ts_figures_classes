enum TypeOfFigure {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: TypeOfFigure;
  color:'red' | 'green' | 'blue';
  getArea: Function;
}

export class Triangle implements Figure {
  shape: TypeOfFigure;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('side length <= 0');
    }

    if ((this.sideA + this.sideB) <= this.sideC) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }

    if ((this.sideB + this.sideC) <= this.sideA) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }

    if ((this.sideC + this.sideA) <= this.sideB) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }

    this.shape = TypeOfFigure.triangle;
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return (Math.floor(area * 100)) / 100;
  }
}

export class Circle implements Figure {
  shape: TypeOfFigure;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = TypeOfFigure.circle;

    if (this.radius <= 0) {
      throw new Error('radius <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle {
  shape: TypeOfFigure;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public wigth: number,
    public height: number,
  ) {
    this.shape = TypeOfFigure.rectangle;

    if (this.wigth <= 0 || this.height <= 0) {
      throw new Error('side length <= 0');
    }
  }

  getArea(): number {
    const area = this.wigth * this.height;

    return (Math.floor(area * 100)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const information = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return information;
}
