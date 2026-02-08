import type { GenerationPageProps } from '../context/context';
import { type AbilityScores } from '../model/characterdata';

type StatsProps = { charData: AbilityScores }

const Stats = (props: StatsProps) => {  

  const { charData } = props;

  return (
  <table>
    <tbody>
    <tr>
      <th>Strength</th>
      <td>{charData.Strength.Main}</td>
      <td>{charData.Strength.Fractional}</td>
    </tr>
    <tr>
      <th>Dexterity</th>
      <td>{charData.Dexterity.Main}</td>
      <td>{charData.Dexterity.Fractional}</td>
    </tr>
    <tr>
      <th>Constitution</th>
      <td>{charData.Constitution.Main}</td>
      <td>{charData.Constitution.Fractional}</td>
    </tr>
    <tr>
      <th>Intelligence</th>
      <td>{charData.Intelligence.Main}</td>
      <td>{charData.Intelligence.Fractional}</td>
    </tr>
    <tr>
      <th>Wisdom</th>
      <td>{charData.Wisdom.Main}</td>
      <td>{charData.Wisdom.Fractional}</td>
    </tr>
    <tr>
      <th>Charisma</th>
      <td>{charData.Charisma.Main}</td>
      <td>{charData.Charisma.Fractional}</td>
    </tr>
    <tr>
      <th>Comliness</th>
      <td>{charData.Comliness.Main}</td>
      <td>{charData.Comliness.Fractional}</td>
    </tr>
    <tr>
      <th>Honor</th>
      <td>{charData.Honor}</td>
    </tr>
    </tbody>
  </table>)
}


export function GenerateStats(props: GenerationPageProps) {  
  
  let rollStats = () => {    
    props.dispatch({ type: 'rollstats', data: {} }); 
  }

  return (
    <div className="card">
      <button onClick={() => rollStats()}>Roll Stats</button>
      <Stats charData={props.state.Details.AbilityScores} />
    </div>
  )  
}

