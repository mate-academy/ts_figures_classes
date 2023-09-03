interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || !this.isTriangle(a, b, c)
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  shape = 'triangle';

  private isTriangle(
    a: number,
    b: number,
    c: number,
  ): boolean {
    return (
      this.a + b > c
      && a + c > b
      && b + c > a
    );
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  shape = 'circle';

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle sides');
    }
  }

  shape = 'rectangle';

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaText = Number.isInteger(area) ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaText}`;
}
