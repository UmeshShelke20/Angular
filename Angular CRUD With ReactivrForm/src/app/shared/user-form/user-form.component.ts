import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  public userForm: FormGroup;
  @Input() editUserData;
  @Input() isEditMode = false;
  @Output() userDataevent = new EventEmitter();
  @Output() editDataevent = new EventEmitter();
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      mob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['editUserData'] && !changes['editUserData']['firstChange']) {
      this.f['name'].setValue(this.editUserData.name)
      this.f['address'].setValue(this.editUserData.address)
      this.f['mob'].setValue(this.editUserData.mob)
      this.f['email'].setValue(this.editUserData.email)
    }
  }

  public onSubmit() {
    if (this.userForm.valid) {
      this.userDataevent.emit(this.userForm.value)
    } else {
      this.f['name'].markAsTouched();
      this.f['address'].markAsTouched();
      this.f['mob'].markAsTouched();
      this.f['email'].markAsTouched();
    }
  }
  get f() {
    return this.userForm.controls;
  }
  resetForm() {
    this.userForm.reset();
    this.isEditMode = false;
  }
  public onUpdateuser() {
    const data = {
      id: this.editUserData.id,
      payload: this.userForm.value
    }
    this.editDataevent.emit(data)
  }
}
