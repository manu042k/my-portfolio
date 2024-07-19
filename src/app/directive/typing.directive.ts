import { Directive, Input, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTyping]'
})
export class TypingDirective implements OnInit, OnDestroy {
  @Input('appTyping') textToType: string = ''; // Text to type out
  private typedText: string = ''; // Will hold the text that appears as if typed out
  private currentIndex: number = 0;
  private typingInterval: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.typingInterval = setInterval(() => {
      this.typeNextLetter();
    }, 100); // Adjust typing speed (milliseconds per letter)
  }

  ngOnDestroy(): void {
    clearInterval(this.typingInterval);
  }

  typeNextLetter() {
    if (this.currentIndex < this.textToType.length) {
      this.typedText += this.textToType.charAt(this.currentIndex);
      this.currentIndex++;
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.typedText);
    } else {
      clearInterval(this.typingInterval); // Stop typing when finished
    }
  }
}
