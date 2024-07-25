import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Input("value")
  value: number = 0;

  @Output("update")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  updateValue(value:number) {
    this.emitter.emit(value)

  }
}
