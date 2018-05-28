import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss'],
  animations:[

    trigger('featureListAnimation',[
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})

      ])

    ])
  ]
})
export class HomeComponent implements OnInit {
  public itemCount: number = 4;
  public btnText:string ="Add Feature";
  public featureText = "Card Activation";
  public featureList = ['Welcome Feature', 'Language Selection', 'Balance Flash'];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.featureList.length;
  }

  addFeature(){
    if(this.featureText!=""){
      this.featureList.push(this.featureText);
      this.featureText="";
      this.itemCount = this.featureList.length;
    }
  }

  removeItem(i) {
    this.featureList.splice(i, 1);
  }

}
