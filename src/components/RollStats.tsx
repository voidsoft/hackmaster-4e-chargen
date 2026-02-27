import { Button } from '@mantine/core';
import type { GenerationPageProps } from '../context/reducer';

export function RollStats(props: GenerationPageProps) {  
  
  let rollStats = () => {    
    props.dispatch({ type: 'rollstats', data: {} }); 
  }

  return (
    <div className="card">
      <Button onClick={() => rollStats()}>Roll Stats</Button>
    </div>
  )  
}
