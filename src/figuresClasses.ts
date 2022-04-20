export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  private hypotenuse: number;

  private cathetus: number[];

  public shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const A = (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5;

    return Math.floor(A * 100) / 100;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((argument: number) => argument <= 0)) {
      throw new Error('Invalid parameters!');
    }

    this.hypotenuse = Math.max(a, b, c);
    this.cathetus = [a, b, c].filter((x) => x !== this.hypotenuse);

    if (this.hypotenuse === this.cathetus.reduce((x, y) => x + y)) {
      throw new Error('');
    }
  }
}

export class Circle implements Figure {
  public shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  public getArea(): number {
    const A = Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;

    return A;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid parameters');
    }
  }
}

export class Rectangle implements Figure {
  public shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if ([width, height].some((argument: number) => argument <= 0)) {
      throw new Error('Invalid parameters');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
