import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  toggleMenu($event: MouseEvent) {
    // var dd = $event.composedPath();
    // dd[4];
    var dd = document.getElementsByClassName("sidenav-menu");
    dd[0].classList.toggle("hide");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
