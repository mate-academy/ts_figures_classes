export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    private side1: number,
    private side2: number,
    private side3: number,
  ) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error('Sides must be positive numbers');
    }

    if (
      side1 + side2 < side3 ||
      side1 + side3 < side2 ||
      side2 + side3 < side1
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.side1 + this.side2 + this.side3) / 2;
    const area = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.side1) *
        (halfPerimeter - this.side2) *
        (halfPerimeter - this.side3),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be positive numbers');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  let formattedArea: string;

  if (Number.isInteger(area)) {
    formattedArea = area.toString();
  } else {
    formattedArea = area.toFixed(2);
  }

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
