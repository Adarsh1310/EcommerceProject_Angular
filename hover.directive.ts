import { Directive, ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
    selector: '[hover]'
})
export class HoverDirective implements OnInit {
 @Input() product;
abc;
text;
constructor(private readonly elRef: ElementRef<HTMLDivElement>, private renderer: Renderer2) { }
ngOnInit(): void {
    this.abc = this.renderer.createElement('pre');
    this.text = this.renderer.createText("Name of the Product:" + this.product.name + ' ' + this.product.description);
    console.log(this.text, this.abc);
}
@HostListener('mouseover')
onMouseOver() {
    this.renderer.appendChild(this.abc, this.text);
    this.renderer.appendChild(this.elRef.nativeElement, this.abc);
    console.log(this.abc, this.text);
}
@HostListener('mouseleave')
onMouseLeave() {
this.renderer.removeChild(this.elRef.nativeElement, this.abc);
    }
}