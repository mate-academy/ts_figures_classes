export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle {

}

export class Circle {

}

export class Rectangle {

}

export function getInfo(figure: Figure): Figure {
  return figure;
}
