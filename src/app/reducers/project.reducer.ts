import { Action } from "@ngrx/store";
import { Card } from "./../models/project.model";
import * as CardActions from "./../actions/project.actions";

// Section 1
const initialState: Card = {
  matricula: "xxxxx",
  nome: "Johnny Silverhand",
  av1: 100,
  av2: 100,
  av3: 100,
  media: "100",
  descricao:
    "Silverhand atua como o guia de V para a cidade e estará com ele durante a maior parte do jogo. Ao longo do jogo, o jogador será assombrado pelo fantasma digital de Silverhand, sugerindo que ele está fisicamente morto. ",
  obsTitulo: "Descrição",
  progresso: 100
};

// Section 2
export function reducer(
  state: Card[] = [initialState],
  action: CardActions.Actions
) {
  // Section 3
  switch (action.type) {
    case CardActions.ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
