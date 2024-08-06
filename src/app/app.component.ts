import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './Module/shared/shared.module';
import { AuthModule } from './Module/auth/auth.module';
import { APIService } from './Module/shared/servis/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule,AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Library_Managment_System_UI';
  constructor(private apiService: APIService) { }
  
  //ngon init for stay login status 
  ngOnInit(): void {
   let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
   this.apiService.userStatus.next(status);
  }

/**
 *
 */

  


}
