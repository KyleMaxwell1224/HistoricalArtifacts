import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {

  constructor( private router: AppRoutingModule) { }
  ngOnInit(): void {
    
    }
  displayedColumns: string[] = ['Path'];
  routeList = this.router.displayRoutes;
  
} 
