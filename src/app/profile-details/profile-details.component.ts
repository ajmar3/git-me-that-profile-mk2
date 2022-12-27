import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHourglass, faBookmark, faStar } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import { ProfileDetailsService } from './profile-details.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private detailsService: ProfileDetailsService
  ) { }

  username = "";
  hourGlassIcon = faHourglass;
  starIcon = faStar;
  codeForkIcon = faCodeFork;
  bookIcon = faBookmark;
  githubIcon = faGithub;
  userInfo: any;
  repoInfo: any[] | undefined;
  dataLoading: boolean = true;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params["profileName"];
      this.detailsService.getDetails(this.username).subscribe(
        response => {
          this.userInfo = response;
          this.detailsService.getRepoDetails(response.repos_url).subscribe(
            response => {
              this.repoInfo = response;
              this.dataLoading = false;
            }
          )
        }
      );
    })
  }


}
