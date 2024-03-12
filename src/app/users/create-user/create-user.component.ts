import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  userService: UsersService;

  constructor(private fb: FormBuilder, userService: UsersService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    // if we wanted to edit an existing user:
    // retrieve user id from params
    // get user from service
    // assign the default form values based on user

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    // without form builder
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });
  }

  onSubmit() {
    console.log('Valid?', this.form.valid); // true or false
    // console.log(form);
    console.log('Name', this.form.value.name);
    console.log('Email', this.form.value.email);
    console.log('Password', this.form.value.password);

    // create user
    this.userService.createUser(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );
  }
}
