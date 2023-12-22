import { Component } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  navs: AppNavigation[] = [
    {
      name: 'Notes',
      link: '/notes'
    }
  ];
}

interface AppNavigation{
  name: string;
  link: string;
}
