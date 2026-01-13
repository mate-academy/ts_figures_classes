// 1. The Interface (Added 'export')
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

// Helper (Internal use only, no export needed)
const roundToHundredths = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

// 2. The Classes (Added 'export')

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return roundToHundredths(this.width * this.height);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return roundToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    const [short1, short2, longest] = sides;

    if (longest >= short1 + short2) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToHundredths(area);
  }
}

// 3. The Helper Function (Added 'export')

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
