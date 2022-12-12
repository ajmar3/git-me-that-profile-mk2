import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  title = 'To Do';

  items: string[] = [];

  addItemForm = this.formBuilder.group({
    newItem: ""
  });

  addItem() {
    if (this.addItemForm.value.newItem) {
      this.items.push(this.addItemForm.value.newItem)
    }
  }

}
