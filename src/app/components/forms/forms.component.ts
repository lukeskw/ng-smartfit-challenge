import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss', './forms.responsive.component.scss']
})
export class FormsComponent implements OnInit{
  results = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: GetUnitsService
  ){ }

  ngOnInit(): void {
    this.service.getAllUnits().subscribe(data => {
      console.log(data)
    })

    this.formGroup = this.formBuilder.group({
      hourRadio: '',
      showClosed: false,
    })
  }

  onSubmit(){
    console.log(this.formGroup.value);
  }

  onFormReset(){
    this.formGroup.reset();
  }
}
