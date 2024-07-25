import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  @Input("value")
  value: number = 0;

  @Output("update")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  updateValue(value: number) {
    this.emitter.emit(value)

  }
}
