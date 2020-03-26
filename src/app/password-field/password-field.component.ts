import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-field',
  templateUrl: './password-field.component.html',
  styleUrls: [ './password-field.component.css' ]
})

export class PasswordField  {
  @Input() password: string;

  private isVisible: boolean = false;
  private readonly hiddenPassword: string = '\u25CF\u25CF\u25CF\u25CF\u25CF';

  private changeVisibility($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.isVisible = !this.isVisible;
  }
}