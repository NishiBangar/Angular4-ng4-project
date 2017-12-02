import { Component } from '@angular/core';
// Importing service before its use
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  /*template: `
  			<h1 [class] = 'titleClass1'> Class binding!
  			</h1>
  			
  			<h1 [class.red-title] = 'titleClass2'> Designate class name in the class binding!
  			</h1>

  			<h1 [ngClass] = 'titleClasses'> ngClass directive to change multiple classes!
  			</h1>
  			`,*/
  /*template: `
  			<h1 [style.color] = 'titleStyle1'> Style binding!
  			</h1>
  			
  			<h1 [style.color] = 'titleStyle2 ? "green" : "pink" '> Style binding, value within expr!
  			</h1>

  			<h1 [ngStyle] = 'titleStyles'> ngStyle directive to change multiple styles!
  			</h1>
  			`,*/
  template : ` {{someProperty}}
  			   <br>
  			   <ul>
  			   	<li *ngFor = "let car of cars"> {{car}} </li>
  			   </ul>
  `,
  //styleUrls: ['./app.component.css']
  styles : [`h1{
  				color: blue;
  			}
  			.red-title{
  				color:red;
  			}
  			.large-title{
  				font-size :4em;
  			}
  			`]
})
export class AppComponent {
 /* title = 'Hi Nishi.! Welcome to my application';
  myArr = ['his','hers','theirs'];
  flag = true;
  flag2 = false;

  angularLogo = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";

  btnStatus = true;

  myEvent(event){
  	console.log("Event Binding");
  	console.log(event);
  }

  mouseEnterFunc(event){
  	console.log("Mouse Entered");
  	console.log(event);
  }

  titleClass1= 'red-title';
  titleClass2 = true;

  titleClasses = {
  	'red-title' : false,
  	'large-title' : true
  };

  titleStyle1 = "green";
  titleStyle2 = false;
  titleStyles = {
  	'color' : 'orange',
  	'font-size' : '4em'

  };*/

  // Dependency inject the Service in component's constructor
  constructor(private dataService : DataService) {

  };

  someProperty : string = "";
  cars = [];


  // ngOnInit() -> life cycle hook (load all inside once the component is loaded)
  ngOnInit(){
  	console.log("Data from the Service");
  	console.log(this.dataService.cars);

  	this.someProperty = this.dataService.myData();
  	this.cars = this.dataService.cars;

  }




}

