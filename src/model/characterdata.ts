import { Roll3D6, RollD100 } from "./dicerolls";

export class AbilityScore {
  Main: number = 0;
  Fractional: number = 0;
}

export interface HackmasterChar {
  Name: string;
  Race: string;
  Class: string;
  AbilityScores: AbilityScores;
  CreationLog: string[];
}

export function CreateHackmasterChar(): HackmasterChar {
  return {
    Name: "",
    Race: "",
    Class: "",
    AbilityScores: CreateAbilityScores(),
    CreationLog: []
  };
}


export interface AbilityScores {  
  Strength: AbilityScore;
  Dexterity: AbilityScore;
  Constitution: AbilityScore;
  Intelligence: AbilityScore;
  Wisdom: AbilityScore;
  Charisma: AbilityScore;
  Comliness: AbilityScore;
  Honor: number;
}

export function CreateAbilityScores(): AbilityScores {
  return {
    Strength: new AbilityScore(),
    Dexterity: new AbilityScore(),
    Constitution: new AbilityScore(),
    Intelligence: new AbilityScore(),
    Wisdom: new AbilityScore(),
    Charisma: new AbilityScore(),
    Comliness: new AbilityScore(),
    Honor: 0
  };
}


export function RollStats(character: HackmasterChar) {
    const scores = character.AbilityScores;
    scores.Strength.Main = Roll3D6();
    scores.Strength.Fractional = RollD100();
    scores.Dexterity.Main = Roll3D6();
    scores.Dexterity.Fractional = RollD100();
    scores.Constitution.Main = Roll3D6();
    scores.Constitution.Fractional = RollD100();
    scores.Intelligence.Main = Roll3D6();
    scores.Intelligence.Fractional = RollD100();
    scores.Wisdom.Main = Roll3D6();
    scores.Wisdom.Fractional = RollD100();
    scores.Charisma.Main = Roll3D6();    
    scores.Charisma.Fractional = RollD100();
    scores.Comliness.Main = Roll3D6();
    scores.Comliness.Fractional = RollD100();
    scores.Honor = calculateHonor(scores);
  }

  function calculateHonor(scores: AbilityScores): number {
    const allScores = [
      scores.Strength,
      scores.Dexterity,
      scores.Constitution,
      scores.Intelligence,
      scores.Wisdom,
      scores.Charisma,
      scores.Comliness
    ];
    let mains = 0;
    let fractionals = 0;
    allScores.forEach(score => {
      mains += score.Main;
      fractionals += score.Fractional;
    });
    mains += (fractionals / 100);

    let honor = Math.round(mains / 7);
    honor += charismaHonorMod(scores.Charisma);
    return honor;
  }

  function charismaHonorMod(charisma: AbilityScore): number {
    if (charisma.Main < 10)
      return -10 + charisma.Main;
    else if (charisma.Main > 11)
      return charisma.Main - 11;
    else
      return 0;
  }



 