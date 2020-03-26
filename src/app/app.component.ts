import { Component, ViewChild } from '@angular/core';
import { UserModel } from './types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent  {
  @ViewChild('modal') modal: any;

  private users: UserModel[] = [
    {
      username: 'Vlad',
      description: 'Worker',
      comment: 'Work all day long',
      password: '734gfg87g34',
      isActive: true,
      createdAt: '01.05.2018',
      updatedAt: '04.02.2019'
    },
    {
      username: 'Nelya',
      description: 'Reception',
      comment: 'Stupid bitch',
      password: '12345',
      isActive: false,
      createdAt: '07.02.2015',
      updatedAt: '14.22.2016'
    },
    {
      username: 'Ivan',
      description: 'IT',
      comment: 'Long cable',
      password: '329t4o8ug34t4865',
      isActive: true,
      createdAt: '11.11.2018',
      updatedAt: '04.02.2020'
    },
    {
      username: 'Oleg',
      description: 'Manager',
      comment: 'Work all day long',
      password: '234RG346H#$T',
      isActive: true,
      createdAt: '01.05.2018',
      updatedAt: '04.02.2019'
    },
  ];

  private expandedUser: UserModel;
  private userToDelete: UserModel;

  private expandUserInfo($event, user) {
    this.expandedUser = this.expandedUser === user ? null : user;
  }

  private stopPropagation($event) {
    $event.stopPropagation();
  }

  private editUser(user: UserModel) {
    // navigate to EditUser page
  }

  private showModal(user: UserModel) {
    this.userToDelete = user;
    this.modal.openModal();
  }

  private deleteUser() {
    this.users = this.users.filter(({username}) => username !== this.userToDelete.username);
  }

  private lockUser($event, user) {
    if ($event.target.checked) {
      console.log('Activate', user.username);
    } else {
      console.log('Block', user.username);
    }
  }
}
