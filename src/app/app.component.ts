import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulaire';

  nom : string = '';
  prenom: string = '';
  tel: string = '';
  erreurNom : string = '';
  erreurPrenom : string = '';
  erreurTel : string = '';
  date : string = '';
  myCheck = false;
  sf ="";
  age = 0

  verif() {
    console.log(this.date)
    if (this.nom == '') {
      this.erreurNom = 'erreur';
    }
    if (this.prenom == '') {
      this.erreurPrenom  = 'erreur';
    }
    if (this.tel.length != 8) {
      this.erreurTel = 'erreur';
    }
  }

  displayAge() {
    if (this.date != '') {
    
      var dateNow = new Date();
      var birthDay = new Date(this.date);
      var thisYear = dateNow.getFullYear();
      var birthDayYear = birthDay.getFullYear();
      this.age = thisYear - birthDayYear;
  
  }
  }


 

}
