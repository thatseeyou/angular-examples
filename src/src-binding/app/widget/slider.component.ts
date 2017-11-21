import { Component, OnInit, AfterViewInit, ElementRef, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'widget-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, AfterViewInit {
    minValue:number = 0;
    maxValue:number = 100;

    // IMPORTANT : Input type is string not number
    @Input('min') set _minValue(newValue:string) {
        this.minValue = parseInt(newValue, 10)
    }
    @Input('max') set _maxValue(newValue:string) {
        this.maxValue = parseInt(newValue, 10)
    }
    @Input('value') set _value(newValue:string) {
        let value = parseInt(newValue, 10);
        if (this.prevValue == value) {
            return;
        }
        console.log(`Input: newValue = ${value}`)
        this.moveThumbByValue(value);
    } 
    @Output() valueChange = new EventEmitter<number>();

    prevValue:number = 0
    minX:number = 0
    maxX:number = 100
    thumbX:string = '0px'
    moving:boolean = false;

    constructor(private hostElement: ElementRef) { }

    ngOnInit() { 
        console.log(`ngOnInit()`);
        // let width = this.hostElement.nativeElement.clientWidth;
        // console.log(`clientWidth = ${width}`)
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit()`);
        let width = this.hostElement.nativeElement.clientWidth;
        // let clientX = this.hostElement.nativeElement.clientLeft;
        let clientX = this.hostElement.nativeElement.getClientRects()[0].x;
        console.log(`clientWidth = ${width}`);
        console.log(`clientX = ${clientX}`);
        // this.clientWidth = width;
        this.minX = clientX + 4;
        this.maxX = clientX + width - 4;
    }

    @HostListener('click', ['$event'])
    onClick(event:MouseEvent) {
        console.log(`click: x=${event.offsetX}, y=${event.offsetY}`);
    }
    @HostListener('mousedown', ['$event'])
    onMouseDown(event:MouseEvent) {
        console.log(`down: x=${event.offsetX}, y=${event.offsetY}`);
        this.moving = true;
    }
    @HostListener('mouseup', ['$event'])
    onMouseUp(event:MouseEvent) {
        console.log(`up: x=${event.offsetX}, y=${event.offsetY}`);
        if (this.moving == true) {
            this.moveThumbByEvent(event);
        }
        this.moving = false;
    }
    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event:MouseEvent) {
        console.log(`up: x=${event.offsetX}, y=${event.offsetY}`);
        this.moving = false;
    }
    @HostListener('mousemove', ['$event'])
    onMouseMove(event:MouseEvent) {
        if (this.moving == false) {
            return;
        }

        this.moveThumbByEvent(event);
    }

    moveThumbByEvent(event:MouseEvent) {
        let pos = event.clientX < this.minX ? this.minX : (event.clientX > this.maxX ? this.maxX : event.clientX);
        let value = (pos - this.minX) / (this.maxX - this.minX) * (this.maxValue - this.minValue) + this.minValue;
        value = Math.round((pos - this.minX) / (this.maxX - this.minX) * (this.maxValue - this.minValue) + this.minValue);

        if (this.prevValue != value) {
            this.moveThumbByValue(value);
            this.valueChange.emit(value);
            console.log(`Output: value = ${value}`)
        }
    }

    moveThumbByValue(value:number):number {
        value = value < this.minValue ? this.minValue : (value > this.maxValue ? this.maxValue : value);
        // value -> percent
        let percent = (value - this.minValue) / (this.maxValue - this.minValue)
        // console.log(`percent = ${percent}`);

        // percent -> position
        let x = percent * (this.maxX - this.minX) - 8 + 4;

        this.thumbX = `${x}px`;
        this.prevValue = value;

        return value;
    }
}