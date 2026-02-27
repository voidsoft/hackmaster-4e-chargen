import { createContext } from 'react';
import { HackmasterChar, type StatModifiers } from "../model/characterdata"


/* Holds the contextual data for the process of 
character generation, the raw character data combined with 
the details of what stage we're at. */
export interface GenerationContextData {
    CurrentStage: number /* 1 - Roll Stats, 2 - Pick Race, 3 - Pick Class */    
    MaxStage: number /* The max stage that has been reached in the process */
    Details: HackmasterChar
    PreviewStatModifier: StatModifiers | null
} 

export const contextInitialState: GenerationContextData = {
    CurrentStage: 1,
    MaxStage: 1,
    Details: new HackmasterChar(),
    PreviewStatModifier: null
}   


export const GenerationContext = createContext<GenerationContextData>(contextInitialState);

