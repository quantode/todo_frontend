import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HelloWorldObject, WelcomeDataService} from "../service/data/welcome-data.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})

export class WelcomeComponent implements OnInit{
  message="some welcome message"
  name=''
  welcomeMessageService:String ='';
  errorMessage='';
 constructor(private route: ActivatedRoute, private router: Router, private WelcomeDataService: WelcomeDataService) {
 }
//ngOnInit will run when the component is initialized
  ngOnInit( ) {
console.log(this.message)

    this.name= this.route.snapshot.params['name']
    // console.log(this.route.snapshot.params['name'])
  }

getWelcomeMessage(){
    // console.log("welcome button")
  this.WelcomeDataService.executeHelloWorldBeanService().subscribe({ next: (res)=> this.getWelcomeData(res),
     error: (error: any)=> this.errorMethod(error)});
}

getWelcomeMessageWithParameter(name: any){
   this.WelcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe({ next: (res)=>
       this.getWelcomeData(res),
   error:(error:any)=>this.errorMethod(error)})
}


getWelcomeData(res: HelloWorldObject){
this.welcomeMessageService = res.message;
    //console.log("welcome button then there is ->",res.message)
}



errorMethod(error:any){


  this.welcomeMessageService = error.error.message;
  return this.welcomeMessageService;

}
}
