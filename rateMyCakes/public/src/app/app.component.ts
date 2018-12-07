import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake:any;
  cakes:any;
  selectedCake:any;

  constructor(private _http:HttpService) {}

  ngOnInit() {
    this.newCake = {baker: "", image: "", comments: []};
    this.getCakes();

    //https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056.jpg
    //https://tatyanaseverydayfood.com/wp-content/uploads/2016/09/thumbnail-2.jpg
    //https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wedding_cake_with_pillar_supports%2C_2009.jpg/1200px-Wedding_cake_with_pillar_supports%2C_2009.jpg
  }

  onAddCake() {
    let observable = this._http.addCake(this.newCake);
    observable.subscribe(data => {
      console.log(data);
      this.getCakes();
    }); 
  }

  getCakes() {
    let observable = this._http.getCakes();
    observable.subscribe(data => {
      this.cakes = data;
    })
  }

  changeCake(cake) {
    let observable = this._http.getCake(cake);
    observable.subscribe(data => {
      var chosenCake = data;
      let comments = chosenCake['comments'];
      var rating = 0;
      for(var comment in comments) {
        rating += comments[comment]['rating'];
      }

      console.log(comments.length);
      if(comments.length)
        rating = rating / comments.length;
      chosenCake['avgRating'] = rating;
      this.selectedCake = chosenCake;
    })
  }

  rate(cake) {
    var rating = cake.rating;
    var cakeComment = cake.text;
    let observable = this._http.addComment(cake._id, rating, cakeComment);
    observable.subscribe(data => {
      cake.rating = 5;
      cake.text = "";
      this.changeCake(cake);
    })
  }
}
