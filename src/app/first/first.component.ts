import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  @Input("value")
  value: number = 0;

  @Output("update")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  updateValue(value:number) {
    this.emitter.emit(parseFloat(value.toString()));

  }

  protected readonly Number = Number;
}
