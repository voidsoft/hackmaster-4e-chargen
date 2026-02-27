import { NativeSelect, Button } from '@mantine/core';
import type { GenerationPageProps } from '../context/reducer';
import { useState } from 'react';


export function PickClass(props: GenerationPageProps) {  
    const [selectedClass, setClass] = useState("Fighter");
    const classes = ["Fighter", "Cleric", "Rogue", "Wizard", "Druid", "Bard", "Ranger", "Monk", "Barbarian", "Paladin"];

    const chooseClass = () => {    
        props.dispatch({ type: 'pickclasscomplete', data: null });
    }

    return (
      <div className="card">
        <NativeSelect value={selectedClass} 
            label="Class" description="Choose a class from the list below" data={classes}  
            onChange={(event) => {
                let newClass = event.currentTarget.value;
                setClass(newClass);
            }} />
            <Button onClick={() => chooseClass()}>Accept</Button>
      </div>      
  )
}
