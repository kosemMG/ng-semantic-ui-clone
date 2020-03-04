import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
    document.body.append(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  public onClose(): void {
    this.close.emit();
  }
}
