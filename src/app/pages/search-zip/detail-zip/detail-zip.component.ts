import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-zip',
  templateUrl: './detail-zip.component.html',
  styleUrls: ['./detail-zip.component.scss']
})
export class DetailZipComponent implements OnInit {
  
  @Input()
  adress;

  constructor() { }

  ngOnInit() {
  }

}
