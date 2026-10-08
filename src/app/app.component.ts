import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faAirbnb, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  language: string = 'IT';

  constructor(library: FaIconLibrary) {
    library.addIcons(faWhatsapp, faAirbnb, faInstagram, faFacebook, faMapMarkerAlt);
    
  }
  
  handlerLanguageChange() {
    if(this.language === 'IT') {
      this.language = 'EN';
    } else {
      this.language = 'IT';
    }
  }
}
