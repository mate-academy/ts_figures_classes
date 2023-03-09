type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: string,
  area: number,
  getArea(): void;
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const bigest: number = Math.max(this.a, this.b, this.c);

    const sum: number = this.a + this.b + this.c;

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || (sum - bigest) <= bigest) {
      throw new Error('The params should be bigger than zero.');
    }

    const s: number = +((this.a + this.b + this.c) / 2).toFixed(2);
    const area: number
    = +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const areaCircle = +(Math.PI * this.radius ** 2).toFixed(2);

    return areaCircle;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;
  }

  getArea(): number {
    const areaRectangle = +(this.width * this.height).toFixed(2);

    return areaRectangle;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
