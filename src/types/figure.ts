export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export type TColor = 'red' | 'green' | 'blue';
export type TShape = 'triangle' | 'circle' | 'rectangle';

export interface IFigure {
  shape: TShape;
  color: TColor;
  getArea(): number;
}
