import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit, OnChanges {
  @Input() currentUser!: User;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
