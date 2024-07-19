import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TypingDirective } from '../directive/typing.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypingDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent { }
