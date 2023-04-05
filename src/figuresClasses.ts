export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: string;
  getArea: () => number;
}

function roundNumHund(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('wrong a or b or c');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return roundNumHund(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c
      ),
    ));
  }
}

interface CircleInterface {
  radius: number;
}

export class Circle implements CircleInterface {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius in circle cant be less than 0');
    }
  }

  getArea(): number {
    return roundNumHund(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('height and weight in rectangle cant be less than 0');
    }
  }

  getArea(): number {
    return roundNumHund(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
