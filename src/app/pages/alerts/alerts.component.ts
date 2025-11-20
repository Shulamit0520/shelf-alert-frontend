import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  alerts = [
    { id: 1, title: 'מלאי נמוך על מדף A12', time: '09:32' },
    { id: 2, title: 'נפילת מדף בחלק B', time: '08:45' },
  ];
}
