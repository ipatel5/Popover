import { Component, Output,OnInit, Input, ElementRef, HostListener ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {
  @Input() pos
  @Input() sub;
  @Input() tit;
  visiblity;
  marginleft;
  top;

  constructor(private _elementRef : ElementRef) { }

  ngOnInit() {
    console.log(this.pos)
    this.visiblity = "visible";
    if (this.pos == "bottom") {
      this.marginleft = "330";
      this.top="230"
      
    }
    if (this.pos == "right") {
      this.marginleft = "475";
      this.top = "176"
     
    }
    if (this.pos == "left") {
      this.marginleft = "150"
      this.top = "176"
    }
    if (this.pos == "top") {
      this.marginleft = "340"
      this.top = "226"
    }

  }
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.visiblity="hidden"
        }
    
  }
  
}

  


