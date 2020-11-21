import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { Aluno } from "../tabela/tabela.model";
import { TabelaService } from "../tabela/tabela.service";
declare var require: any;
const IndicatorsCore = require("highcharts/indicators/indicators");
IndicatorsCore(Highcharts);
const IndicatorZigZag = require("highcharts/indicators/zigzag");
IndicatorZigZag(Highcharts);
const parallelCoordinates = require("highcharts/modules/parallel-coordinates.js");
parallelCoordinates(Highcharts);
@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.css"]
})
export class GraficoComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {};
  alunos: Aluno[] = [];

  nomes: string[] = [];
  media: number[] = [];
  constructor(private dadosService: TabelaService) {}

  ngOnInit() {
    this.dadosService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;

      for (const i of this.alunos) {
        this.nomes.push(i.nome);
        this.media.push(Number(i.media));
      }

      this.serie(
        this.nomes,
        this.media,
      );
    });
  }
  serie(nomes, medias) {
    const container: HTMLElement | null = document.getElementById("container");
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Grafico de médias por aluno'
      },
      xAxis: {
        categories: nomes,
        title: {
          text: "Alunos"
        }
      },
      yAxis: {
        title: {
          text: "Medias"
        }
      },
      series: [
        {
          data: medias,
          name: "Média"
        },
      ]
    };

    if (container) {
      Highcharts.chart(container, this.chartOptions);
    }
  }
}
