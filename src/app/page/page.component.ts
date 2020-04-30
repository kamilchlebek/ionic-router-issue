import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {}

  navigateProgrammatically() {
    this._router.navigate(['/users/edit'])
  }
}
