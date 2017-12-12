import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title>
        <h4>Профиль</h4>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <mat-list>
        <mat-list-item>Имя: {{profile?.name}}</mat-list-item>
        <mat-list-item>Почта: {{profile?.email}}</mat-list-item>
        <mat-list-item>О себе: {{profile?.description}}</mat-list-item>
      </mat-list>
    </mat-card-content>
  </mat-card>
  `,
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: string;
  profile: object;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id was', this.id);
    });
    this.apiService.getProfile(this.id).subscribe(data => {
      this.profile = data.json();
    });
  }

}
