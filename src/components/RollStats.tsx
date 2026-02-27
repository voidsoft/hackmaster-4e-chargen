import type { GenerationPageProps } from '../context/context';

export function RollStats(props: GenerationPageProps) {  
  
  let rollStats = () => {    
    props.dispatch({ type: 'rollstats', data: {} }); 
  }

  return (
    <div className="card">
      <button onClick={() => rollStats()}>Roll Stats</button>
    </div>
  )  
}
