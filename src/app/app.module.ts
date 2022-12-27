import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { ProfileDetailsComponent } from './profile-details/profile-details.component'
import { RouterModule } from '@angular/router';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailsService } from './profile-details/profile-details.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ProfileSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProfileSearchComponent },
      { path: 'results/:profileName', component: ProfileDetailsComponent },
    ]),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ProfileDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
