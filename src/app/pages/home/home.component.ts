import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../layout/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
