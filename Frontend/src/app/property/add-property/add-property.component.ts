import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {
  @ViewChild('Form') addPropertyForm!: NgForm
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('submitted!');
  }
}
