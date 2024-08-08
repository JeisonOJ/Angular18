import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = '';
  imageUrl = '';
  available = false;

  onSubmit() {
    console.log(`Form submitted with ${this.name}, ${this.imageUrl}, ${this.available}`);
  }
}
