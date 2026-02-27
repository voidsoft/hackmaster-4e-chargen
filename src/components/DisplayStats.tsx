import { Badge, Table } from '@mantine/core';
import type { GenerationPageProps } from '../context/reducer';
import type {  AbilityScore, HackmasterChar, StatModifiers } from '../model/characterdata';



function StatAndModifierRow(props: { statName: string, stat: AbilityScore, modValue: number | undefined}) {
  const mod = props.modValue || 0;
  const statUp = mod > 0
  const statDown = mod < 0
  const statNeutral = mod == 0
  
  return (
    <Table.Tr>
      <Table.Th>{props.statName}</Table.Th>
      <Table.Td>
        {statUp && <><strong>{props.stat.Main + mod}</strong> <Badge color="green">+{mod}</Badge></>}
        {statDown && <><strong>{props.stat.Main + mod}</strong> <Badge color="red">{mod}</Badge></>}
        {statNeutral && <>{props.stat.Main + mod}</>}      
         / {props.stat.Fractional}</Table.Td>
    </Table.Tr>
  )
}

type StatsAndModifiersProps = { charData: HackmasterChar, previewStatModifier: StatModifiers | null }

export function StatsAndModifiers(props: StatsAndModifiersProps) {  

  const { charData } = props;
  const scores = charData.CalculatedAbilityScores
  const mods = props.previewStatModifier
  
  return (
  <Table>
    <Table.Tbody>
      <StatAndModifierRow statName="Strength" stat={scores.Strength}  modValue={mods?.strMod} />
      <StatAndModifierRow statName="Dexterity" stat={scores.Dexterity}  modValue={mods?.dexMod} />      
      <StatAndModifierRow statName="Constitution" stat={scores.Constitution} modValue={mods?.conMod} />
      <StatAndModifierRow statName="Intelligence" stat={scores.Intelligence} modValue={mods?.intMod} />
      <StatAndModifierRow statName="Wisdom" stat={scores.Wisdom}  modValue={mods?.wisMod} />
      <StatAndModifierRow statName="Charisma" stat={scores.Charisma} modValue={mods?.chaMod} />
      <StatAndModifierRow statName="Comliness" stat={scores.Comliness}  modValue={mods?.comMod} />
      <Table.Tr>
        <Table.Th>Honor</Table.Th>
        <Table.Td>{scores.Honor}</Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>      
    </Table.Tbody>
  </Table>)    
}


export function DisplayStats(props: GenerationPageProps) {   
  return (
    <div className="card">      
      <StatsAndModifiers charData={props.state.Details} previewStatModifier={props.state.PreviewStatModifier} />
    </div>
  )  
}



