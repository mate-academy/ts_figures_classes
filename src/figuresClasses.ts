export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (
      side1 <= 0
      || side2 <= 0
      || side3 <= 0
      || Math.max(side1, side2, side3)
        >= (side1 + side2 + side3) - Math.max(side1, side2, side3)
    ) {
      throw new Error('Failed to create a triangle using these dimensions');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.side1 + this.side2 + this.side3);
    const area = +(Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3),
    )).toFixed(2);

    if (
      area === 0
    ) {
      throw new Error('Failed to create a triangle using these dimensions');
    }

    return area;
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Failed to create a circle using these dimensions');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Failed to create a rectangle using these dimensions');
    }
  }

  getArea(): number {
    const area = +(this.width * this.height).toFixed(2);

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
