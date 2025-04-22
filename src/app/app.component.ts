import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TIB37';
  displayname!: string;
  displayaddress!: string;
  displayemail!: string;
  displaycontact!: string;


  getvalue(name: string, address: string, contact: string, email: string) {
    this.displayname = name;
    this.displayaddress = address;
    this.displayemail = email;
    this.displaycontact = contact;
  }
}