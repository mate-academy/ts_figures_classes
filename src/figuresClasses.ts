type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

function roundToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

function threwError(...conditions: boolean[]): void {
  if (conditions.some((condition) => condition)) {
    throw new Error('your error message');
  }
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    threwError(
      this.a <= 0,
      this.b <= 0,
      this.c <= 0,
      this.a + this.b <= this.c,
      this.a + this.c <= this.b,
      this.b + this.c <= this.a,
    );
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = 0.5 * (a + b + c);

    return roundToHundredths(
      Math.sqrt(
        s * (s - a) * (s - b) * (s - c),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    threwError(this.radius <= 0);
  }

  getArea = (): number => roundToHundredths(
    Math.PI * (this.radius ** 2),
  );
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    threwError(
      this.width <= 0,
      this.height <= 0,
    );
  }

  getArea(): number {
    const { width, height } = this;

    return roundToHundredths(width * height);
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color, getArea } = figure;

  return `A ${color} ${shape} - ${getArea.apply(figure)}`;
}
