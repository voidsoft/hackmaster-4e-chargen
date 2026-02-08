import { createContext } from 'react';
import { CreateHackmasterChar, RollStats } from "../model/characterdata"
import type { HackmasterChar } from "../model/characterdata"


/* Holds the contextual data for the process of 
character generation, the raw character data combined with 
the details of what stage we're at. */
interface GenerationContextData {
    CurrentStage: number /* 1 - Roll Stats, 2 - Pick Race, 3 - Pick Class */    
    MaxStage: number /* The max stage that has been reached in the process */
    Details: HackmasterChar
} 

/* This is the reducer actionm it basically gives is the details of
  an action being performed against the context, might be character speciic
  or might be the more general next/prev stage actions. */
interface GenerationAction { 
    type: string;
    data: object;
}

export type GenerationPageProps = { state: GenerationContextData, dispatch: React.Dispatch<GenerationAction> }

export function GenerationReducer(state: GenerationContextData, action: GenerationAction) {
  console.log(state);
  switch (action.type) {
    case 'rollstats': {
      RollStats(state.Details);
      if (state.MaxStage == 1)
        state.MaxStage = 2;

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
    case 'stagecomplete': {
      if (state.CurrentStage == state.MaxStage) {
        state.MaxStage += 1;
        console.log(`Stage ${state.CurrentStage} completed, max stage is now ${state.MaxStage}`);
      }      
      return { ...state }
    }    
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const contextInitialState: GenerationContextData = {
    CurrentStage: 1,
    MaxStage: 1,
    Details: CreateHackmasterChar()
}   


export const GenerationContext = createContext<GenerationContextData>(contextInitialState);

