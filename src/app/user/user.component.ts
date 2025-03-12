//import { DUMMY_USERS } from './../dummy-users';
import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // // selectedUser = DUMMY_USERS[randomIndex];

  // //get imagePath() {
  // //  return 'assets/users/' + this.selectedUser.avatar;
  // //}

  // // onSelectUser(){
  // //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // //   this.selectedUser = DUMMY_USERS[randomIndex];
  // // }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;
  // @Output () select = new EventEmitter<string>();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({ required: true }) user!: User;
  select = output<string>();

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  // onSelectUser() {
  //   this.select.emit(this.id());
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
