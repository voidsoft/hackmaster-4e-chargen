import type { GenerationPageProps } from '../context/context';


export function PickClass(props: GenerationPageProps) {  
  return (
      <div className="card">
          <p>Pick a class here</p>
          <button onClick={() => props.dispatch({ type: 'stagecomplete', data: {} })}>Complete Class Selection</button>
      </div>      
  )
}
