import { Component, OnInit } from '@angular/core';
import { SearchZipService } from '../../services/search-zip/search-zip.service';
import { Adress } from '../../interface/iadress';

@Component({
  selector: 'app-search-zip',
  templateUrl: './search-zip.component.html',
  styleUrls: ['./search-zip.component.scss']
})
export class SearchZipComponent implements OnInit {

  zipCode;
  adress: Adress = null;
  error = null;
  loader = false;

  constructor(private searchService: SearchZipService) { }

  ngOnInit() {
  }

  searchButton() {
    this.error = null;
    if (this.zipCode.length === 8) {
      this.getAdressPerZipCode(this.zipCode);
    } else {
      this.error = 'Cep Inválido';
      this.adress = null;
    }
  }

  getAdressPerZipCode(zipCode) {
    this.loader = true;
    this.searchService.getAdressPerZipCode(zipCode).subscribe(
      response => {
        if (response['erro']) {
          this.error = 'Cep Inválido';
          this.adress = null;
        } else {
          this.adress = response;
        }
        this.loader = false;

      }, error => {
        this.loader = false;
        this.error = error.mensagem;
      }
    );
  }

}
