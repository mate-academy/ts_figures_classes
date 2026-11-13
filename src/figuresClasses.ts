export interface Figure {}

export class Triangle implements Figure {}

export class Circle implements Figure {}

export class Rectangle implements Figure {}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
