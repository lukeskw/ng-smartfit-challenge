import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../interfaces/unit.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss', './forms.responsive.component.scss']
})
export class FormsComponent implements OnInit{
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: GetUnitsService
  ){ }

  ngOnInit(): void {
    this.service.getAllUnits().subscribe(data => {
      this.results = data.locations
      this.filteredResults = data.locations
    })

    this.formGroup = this.formBuilder.group({
      hourRadio: '',
      showClosed: true,
    })
  }

  onSubmit(){
    console.log(this.formGroup.value);
    if(!this.formGroup.value.showClosed){
      this.filteredResults = this.results.filter(location => location.opened === true)
    }
    if(this.formGroup.value.showClosed){
      this.filteredResults = this.results

    }
  }

  onFormReset(){
    this.formGroup.reset();
  }
}
