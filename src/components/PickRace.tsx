import { NativeSelect } from '@mantine/core';
import type { GenerationPageProps } from '../context/reducer';
import raceData from '../data/racemods.json';
import { useState } from 'react';


export function PickRace(props: GenerationPageProps) {
  const [selectedRace, setRace] = useState("Human");
  const races = raceData.map(a => a.name);
  const previewMods = (newRace: string) => {    
    let raceMods = raceData.find(r => r.name == newRace) || null
    props.dispatch({ type: 'previewStatMods', data: raceMods });
  }

  const chooseRace = () => {
    let raceMods = raceData.find(r => r.name == selectedRace) || null
    if (raceMods)
      props.dispatch({ type: 'pickracecomplete', data: raceMods });
  }


  return (
      <div className="card">
        <div></div>
        <NativeSelect value={selectedRace} label="Race" description="Choose a race from the list below" data={races}  
        onChange={(event) => {
          let newRace = event.currentTarget.value;
          setRace(newRace);
          previewMods(newRace);
        }} />
        <button onClick={() => chooseRace()}>Accept</button>
      </div>      
      )
}
