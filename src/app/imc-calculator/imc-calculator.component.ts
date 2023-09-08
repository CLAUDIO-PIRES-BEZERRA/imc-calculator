import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})
export class ImcCalculatorComponent {
  weight: number = 0;
  height: number = 0;
  result: number = 0;

  calculateIMC() {
    if (this.weight > 0 && this.height > 0) {
      this.result = this.weight / (this.height * this.height);
    } else {
      this.result = 0;
    }
  }

  getIMCClassification(imc: number): string {
    if (imc < 18.5) {
      return "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Normal";
    } else if (imc > 24.9 && imc <= 30) {
      return "Sobrepeso";
    } else if (imc > 30) {
      return "Obesidade";
    } else {
      return "Erro";
    }
  }
}
