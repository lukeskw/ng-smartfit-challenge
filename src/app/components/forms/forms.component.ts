import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../interfaces/unit.interface';
import { FilterUnitsService } from '../../services/filter-units.service';
import { ToastrService } from 'ngx-toastr';


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

  @Output() submitEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private service: GetUnitsService,
    private filterunitsService: FilterUnitsService,
    private toastr: ToastrService
  ){ }

  ngOnInit(): void {
    this.service.getAllUnits().subscribe(data => {
      this.results = data
      this.filteredResults = data
    })

    this.formGroup = this.formBuilder.group({
      hourRadio: '',
      showClosed: true,
    })
  }

  onSubmit(){
    console.log(this.formGroup.value);
    const { showClosed, hourRadio } = this.formGroup.value;

    if(hourRadio === '' || hourRadio === null) {
      this.toastr.error('É necessário selecionar um horário de treino para realizar a pesquisa.');
      return;
    }

    this.filteredResults = this.filterunitsService.filter(this.results, showClosed, hourRadio);
    this.service.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onFormReset(){
    this.formGroup.reset();
    this.clearEvent.emit();
  }
}
