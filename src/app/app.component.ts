import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  env = environment;

  get getEnvironment(): 'Production' | 'Develop' {
    return this.env.production ? 'Production' : 'Develop'
  }
}
