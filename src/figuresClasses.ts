export interface Figure {
  color: string,
  shape?: string,
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (a < 0 || b < 0 || c < 0 || a + b <= c) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width < 0 || height < 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure): string {
  switch (figure.shape) {
    case 'circle':
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    case 'triangle':
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    case 'rectangle':
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    default:
      return '';
  }
}
