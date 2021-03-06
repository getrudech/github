import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service'
import { Repo } from '../repo';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile: any;
  repos: any;
  userName: any = 'getrudech'
  constructor(private userService:UserService) {

  }

  Profile(){
   this.userService.updateProfile(this.userName);

   this.userService.getProfileInfo().subscribe(profile =>{
     console.log(profile);
   this.profile= profile      
   });

   this.userService.getProfileRepos().subscribe(repos =>{
     console.log(repos);
   this.repos= repos;      
   
   })
 }

 ngOnInit(){
   this.Profile()
   this.repos()
 }

}
