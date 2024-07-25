import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";
import {PercentPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, PercentPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'databind-exercise';
  value:number = 0;
}
