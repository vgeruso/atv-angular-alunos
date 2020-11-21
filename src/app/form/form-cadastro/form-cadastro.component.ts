import { Component } from "@angular/core";
import { RequestAluno } from "../form.model";
import { FormService } from "../form.service";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-form-cadastro",
  templateUrl: "./form-cadastro.component.html",
  styleUrls: ["./form-cadastro.component.css"]
})
export class FormCadastroComponent {
  aluno = new FormGroup({
    nome: new FormControl(""),
    matricula: new FormControl(""),
    av1: new FormControl(""),
    av2: new FormControl(""),
    av3: new FormControl("")
  });
  request: RequestAluno;
  constructor(private formService: FormService) {}

  ngAfterViewInit() {}
  salvar() {
    console.log("aluno - ");
    console.log(this.aluno.value);
    this.request = this.aluno.value;
    this.formService.createAluno(this.request).subscribe((res) => {
      console.log(res);
    });
  }
}
