import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit{

  public formulario: FormGroup = this.formBuilder.group({
    name:[''],
    capital:[''],
    continente:[''],
    lingua:[''],
    populacao:[''],
    img:['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private countries: CountriesService,
  ){}

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion(){
    this.countries.getRegionCountries('brazil').subscribe(res => {
      this.formulario.controls['name'].setValue(res[0].altSpellings[3]),
      this.formulario.controls['capital'].setValue(res[0].capital[0]),
      this.formulario.controls['continente'].setValue(res[0].continents[0]),
      this.formulario.controls['lingua'].setValue(res[0].languages.por),
      this.formulario.controls['populacao'].setValue(res[0].population),
      this.formulario.controls['img'].setValue(res[0].flags.png)
    });
  }

}
