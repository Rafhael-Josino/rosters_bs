export interface MiddleEarthOperativeType {
  name: string;
  hero: boolean;
  points: number;
  chosenPath: string;
  status: {
    move: number;
    f: number;
    strength: number;
    defense: number;
    attack: number;
    wounds: number;
    courage: number;
  };
  powers: {
    might: number;
    will: number;
    fate: number;
  };
  wargear: string;
  specialRules: string;
  injuries: string;
  xp: number;
}

export interface MiddleEarthWarbandType {
  name: string,
  warriors: MiddleEarthOperativeType[]
}