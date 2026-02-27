import {type GenerationContextData} from "./context"
import { RollStats, type StatModifiers, type RaceModifiers } from "../model/characterdata"

/* This is the reducer actionm it basically gives is the details of
  an action being performed against the context, might be character speciic
  or might be the more general next/prev stage actions. */
interface GenerationAction { 
    type: string;
    data: object | null;
}


export type GenerationPageProps = { state: GenerationContextData, dispatch: React.Dispatch<GenerationAction> }
/**
  Stages
  1 - Roll Stats
  2 - Pick Race
  3 - Pick Class

 */
export function GenerationReducer(state: GenerationContextData, action: GenerationAction) {  
  switch (action.type) {
    case 'rollstats': {
      RollStats(state.Details);
      if (state.MaxStage == 1)
        state.MaxStage = 2;

      return { ...state }
    }

    case 'previewStatMods': {
      state.PreviewStatModifier = action.data as StatModifiers;
      return { ...state }
    }

    case 'next': {
      if (state.CurrentStage < state.MaxStage) {
        state.CurrentStage += 1;
      }
      return { ...state }
    }
    case 'prev': {
      if (state.CurrentStage > 1) {
        state.CurrentStage -= 1;
      }
      return { ...state }
    }
    case 'pickracecomplete': {
      if (state.MaxStage == 2) {
        state.MaxStage = 3;
        let racemods = action.data as RaceModifiers;
        state.PreviewStatModifier = null;
        state.Details.SetRace(racemods);
      }
      return { ...state }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}