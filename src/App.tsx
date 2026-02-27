import '@mantine/core/styles.css';
import './App.css'
import { useReducer } from 'react'
import { DisplayStats } from './components/DisplayStats';
import { RollStats } from './components/RollStats';
import { GenerationReducer, contextInitialState } from './context/context';
import { PickRace } from './components/PickRace';
import { PickClass } from './components/PickClass';
import { MantineProvider, Grid } from '@mantine/core';






function MainScreen() {
  const [state, dispatch] = useReducer(GenerationReducer, contextInitialState);
  
  return (

    <>
      <h1>Hackmaster Character Generation</h1>
      <Grid>
        <Grid.Col span={6}>
          <DisplayStats state={state} dispatch={dispatch} />
        </Grid.Col>
        <Grid.Col span={6}>
          {state.CurrentStage == 1 && <RollStats state={state} dispatch={dispatch} />}
          {state.CurrentStage == 2 && <PickRace  state={state} dispatch={dispatch} />}
          {state.CurrentStage == 3 && <PickClass  state={state} dispatch={dispatch} />}
        </Grid.Col>
      </Grid>
      
      <button onClick={() => dispatch({ type: 'prev', data: {} })}>Previous</button>
      <button className={state.CurrentStage >= state.MaxStage ? "disabled" : "" } onClick={() => dispatch({ type: 'next', data: {} })}>Next</button>
    </>
  )
}

function App() {
  return (
    <MantineProvider>   
        <MainScreen />
    </MantineProvider>
  )
}

export default App
