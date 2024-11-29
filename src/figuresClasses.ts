export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('the side should be bigger than 0');
    }

    if (!this.isValidTriangle(a, b, c)) {
      throw new Error('a longest side should be bigger than sum of two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(result * 100) / 100;
  }

  private isValidTriangle(a: number, b: number, c: number): boolean {
    const longest = Math.max(a, b, c);
    let sumOfOthers;

    if (longest === a) {
      sumOfOthers = b + c;
    } else if (longest === b) {
      sumOfOthers = a + c;
    } else {
      sumOfOthers = a + b;
    }

    return longest < sumOfOthers;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('the radius should be bigger than 0');
    }
  }

  getArea(): number {
    const result = Math.PI * this.radius ** 2;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The width and height should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
