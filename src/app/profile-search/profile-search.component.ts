import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css'],
})
export class ProfileSearchComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  githubIcon = faGithub;
  showError = false;

  searchGithubForm = this.formBuilder.group({
    username: '',
  });

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const err = params["error"];
      console.log(err);
      if (err) this.showError = true;
    })
  }

  keyDown(e: any) {
    if (e.key == "Enter") {
      console.log(this.searchGithubForm.value.username)
      this.router.navigate(["results", this.searchGithubForm.value.username])
    }
  }

}
