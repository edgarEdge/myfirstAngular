import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
    selector: 'li[seleccionable]'
})
export class LiSeleccionableDirective implements OnChanges {

    @Input()
    seleccionada: boolean;

    @Output()
    seleccionar: EventEmitter<void> = new EventEmitter<void>();

    constructor(private el: ElementRef) {
        console.log(el);
        this.el.nativeElement.style.cursor = 'copy';
    }

    ngOnChanges(change: SimpleChanges) {
        console.log(change);
        console.log(this.seleccionada);

        const { seleccionada: { previousValue, currentValue } } = change;     
        if (!previousValue && currentValue)
            this.highlight('#59b9e7');
        else
            this.highlight(null);
    }

    @HostListener('mouseenter') onMouseEnter() {
        !this.seleccionada && this.highlight('#eddfff');
    }

    @HostListener('mouseleave') onMouseLeave() {
        !this.seleccionada && this.highlight(null);
    }

    @HostListener('dblclick') onDoubleClick() {
        this.seleccionar.emit();
    }

    private highlight(backgroundColor: string) {
        this.el.nativeElement.style.backgroundColor = backgroundColor;
    }
}