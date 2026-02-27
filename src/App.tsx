import '@mantine/core/styles.css';
import './App.css'
import { useReducer } from 'react'
import { DisplayStats } from './components/DisplayStats';
import { RollStats } from './components/RollStats';
import { contextInitialState } from './context/context';
import { GenerationReducer } from './context/reducer';
import { PickRace } from './components/PickRace';
import { PickClass } from './components/PickClass';
import { MantineProvider, Grid, Button } from '@mantine/core';






function MainScreen() {
  const [state, dispatch] = useReducer(GenerationReducer, contextInitialState);
  
  const previous = () => {    
    dispatch({ type: 'prev', data: {} })
  }

  const next = () => {
    dispatch({ type: 'next', data: {} })
  }

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
      
      <Button onClick={() => previous() }>Previous</Button>
      <Button 
        className={state.CurrentStage >= state.MaxStage ? "disabled" : "" } 
        onClick={() => next() }>Next</Button>
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
