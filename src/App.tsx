import { useReducer } from 'react'
import './App.css'
import { GenerateStats } from './components/GenerateStats';
import { GenerationReducer, contextInitialState } from './context/context';
import { PickRace } from './components/PickRace';
import { PickClass } from './components/PickClass';






function MainScreen() {
  const [state, dispatch] = useReducer(GenerationReducer, contextInitialState);
  
  return (

    <>
      <h1>Hackmaster Character Generation</h1>
      {state.CurrentStage >= 1 && <GenerateStats state={state} dispatch={dispatch} />}
      {state.CurrentStage >= 2 && <PickRace  state={state} dispatch={dispatch} />}
      {state.CurrentStage >= 3 && <PickClass  state={state} dispatch={dispatch} />}
      <button onClick={() => dispatch({ type: 'prev', data: {} })}>Previous</button>
      <button className={state.CurrentStage >= state.MaxStage ? "disabled" : "" } onClick={() => dispatch({ type: 'next', data: {} })}>Next</button>
    </>
  )
}

function App() {
  return (
    <>   
        <MainScreen />
    </>
  )
}

export default App
