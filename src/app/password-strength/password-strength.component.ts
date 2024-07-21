import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PasswordStrengthComponent {
  strength: string = 'empty';

  onPasswordInput(event: any): void {
    const password = event.target.value;
    this.strength = this.calculatePasswordStrength(password);
  }

  calculatePasswordStrength(password: string): string {
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'short';
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (hasLetters && hasNumbers && hasSymbols) {
      return 'strong';
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      return 'medium';
    } else {
      return 'easy';
    }
  }

  getClass(index: number): string {
    if (this.strength === 'empty') {
      return 'gray';
    } else if (this.strength === 'short') {
      return 'red';
    } else if (this.strength === 'easy') {
      return index === 0 ? 'red' : 'gray';
    } else if (this.strength === 'medium') {
      return index < 2 ? 'yellow' : 'gray';
    } else if (this.strength === 'strong') {
      return 'green';
    }
    return 'gray'; 
  }
}
