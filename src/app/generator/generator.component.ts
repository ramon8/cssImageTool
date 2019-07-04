import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Shape } from '../models/shape';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  @ViewChild('target') target: ElementRef;

  public width: number = 50;
  public height: number = 50;
  public color: string = '#000000';
  public x: number = 0;
  public y: number = 0;
  public canvasWidth: number = 300;
  public canvasHeight: number = 300;

  public shape: Shape;

  public style = {
    backgroundImage: '',
    backgroundPosition: '',
    backgroundSize: ''
  }

  public shapes: Shape[];
  constructor() { }

  ngOnInit() {
    this.shapes = [];
    this.shape = new Shape();
    this.shapes.push(this.shape);
  }

  public generate() {
    this.shape = new Shape();
    this.returnShapeStyle();
    this.target.nativeElement.style.backgroundImage = this.style.backgroundImage.substring(0, this.style.backgroundImage.length - 1);
    this.target.nativeElement.style.backgroundPosition = this.style.backgroundPosition.substring(0, this.style.backgroundPosition.length - 1);
    this.target.nativeElement.style.backgroundSize = this.style.backgroundSize.substring(0, this.style.backgroundSize.length - 1);
  }

  public newShape() {
    this.shape = new Shape();
    this.shapes.push(this.shape);
    this.generate();
  }

  public returnShapeStyle() {
    this.style = {
      backgroundImage: '',
      backgroundPosition: '',
      backgroundSize: ''
    }

    let style = this.style;
    this.shapes.slice().reverse().forEach((shape) => {
      if (shape.type !== null && shape.type !== undefined) {
        style.backgroundImage = style.backgroundImage + 'radial-gradient(' + shape.type + ', ' + shape.color + ' ' + shape.typeSize + 'px, transparent 0px),';
        style.backgroundPosition = style.backgroundPosition + shape.x + 'px ' + shape.y + 'px,';
        style.backgroundSize = style.backgroundSize + shape.width + 'px ' + shape.height + 'px,';
      } else {
        style.backgroundImage = style.backgroundImage + 'radial-gradient(' + shape.color + ', ' + shape.color + '),';
        style.backgroundPosition = style.backgroundPosition + shape.x + 'px ' + shape.y + 'px,';
        style.backgroundSize = style.backgroundSize + shape.width + 'px ' + shape.height + 'px,';
      }
    });
    console.log(this.style);
  }

  public resizeCanvas() {
    this.target.nativeElement.style.width = this.canvasWidth + 'px';
    this.target.nativeElement.style.height = this.canvasHeight + 'px';
  }

}
