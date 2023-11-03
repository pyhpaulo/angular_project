import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Mateus'

  userData = {
    email: 'mateusrox@hotmail.com',
    cargo: 'analista',
  }
  
  title = 'curso-angular';
}
