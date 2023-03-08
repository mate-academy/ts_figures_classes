enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

abstract class FigureBase {
  static roundEdgeValue(value: number): number {
    return Math.floor(value * 100) / 100;
  }

  constructor(
    public edges: number[],
  ) {
    this.validateEdges();
  }

  public validateEdges(): void {
    if (this.edges.some((edge) => edge <= 0)) {
      throw new Error('Any length should be <= 0');
    }
  }
}

export class Triangle extends FigureBase implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    ...edges: [number, number, number]
  ) {
    super(edges);
    this.validateTriangle();
  }

  private validateTriangle(): void {
    const [a, b, c] = this.edges;

    if (
      a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('The longest side of a triangle sould be'
      + ' >= than a sum of two others');
    }
  }

  getArea(): number {
    const [a, b, c] = this.edges;
    const s = 0.5 * (a + b + c);
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return FigureBase.roundEdgeValue(area);
  }
}

export class Circle extends FigureBase implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    ...edges: [number]
  ) {
    super(edges);
  }

  getArea(): number {
    const [radius] = this.edges;
    const area = Math.PI * radius * radius;

    return FigureBase.roundEdgeValue(area);
  }
}

export class Rectangle extends FigureBase implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    ...edges: [number, number]
  ) {
    super(edges);
  }

  getArea(): number {
    const [width, height] = this.edges;

    return FigureBase.roundEdgeValue(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
