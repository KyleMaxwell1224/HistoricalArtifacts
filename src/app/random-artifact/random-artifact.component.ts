import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-random-artifact',
  templateUrl: './random-artifact.component.html',
  styleUrls: ['./random-artifact.component.css']
})
export class RandomArtifactComponent implements OnInit {
  configUrl = "https://collections.museumsvictoria.com.au/api/items";
  data = [];
  artifactToDisplay = "";
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.getItem();

  }
  getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }
  async getItem(){
    this.config.get(this.configUrl)
    .subscribe((data: any)=>{
      this.data = data;
      var index = this.getRandomIndex(this.data.length);
      console.log(index);
      this.artifactToDisplay = this.data[index];
      console.log(this.artifactToDisplay)
//      JSON.parse(this.artifactToDisplay);
    })
  }
}
