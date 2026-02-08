import type { GenerationPageProps } from '../context/context';

export function PickRace(props: GenerationPageProps) {
  return (
      <div className="card">
        <p>Pick a race here</p>
        <button onClick={() => props.dispatch({ type: 'stagecomplete', data: {} })}>Complete Race Selection</button>
      </div>      
      )
}
