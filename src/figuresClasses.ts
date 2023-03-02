export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export function checkTriangle(sides:number[]):boolean {
  const maxSide = Math.max(...sides);
  let sum = 0;

  sides.forEach((el:number) => {
    if (el !== maxSide) {
      sum += el;
    }
  });

  return sum >= maxSide;
}

export class Triangle implements Figure {
  constructor(
    public shape: 'triangle',
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || checkTriangle([a, b, c])) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.round(100 * area) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public shape: 'circle',
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public height: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    return Math.round(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: 'rectangle',
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.round((square * 100) / 100);
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
