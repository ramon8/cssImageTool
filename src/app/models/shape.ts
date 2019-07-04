export class Shape {
    constructor(
        public x: number = 0,
        public y: number = 0,
        public width: number = 10,
        public height: number = 10,
        public color: string = '#000000',
        public type: 'circle' | 'ellipse' = 'circle',
        public typeSize: number = 5
    ) { }
}