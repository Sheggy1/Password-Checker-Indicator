import { Component } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PasswordStrengthComponent]
})
export class AppComponent {}
