import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-custom',
  templateUrl: './my-custom.page.html',
  styleUrls: ['./my-custom.page.scss'],
})
export class MyCustomPage implements OnInit {

  constructor(private router: Router) { }

  goToMyCustomPage() {
    this.router.navigate(['my-custom/my-custom-page-with-id', 8]);
  }

  ngOnInit() {
  }
}
