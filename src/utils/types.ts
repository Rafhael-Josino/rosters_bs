export interface UserType {
  name: string;
  //password: string (hash)
  allowed_rosters: string[];
}

export interface BattleCompaniesWarbandType {
  username: string;
  id: string;
  name: string;
  influence_points: number;
  scores: {
    victories: number;
    defeats: number;
    ties: number;
  }
}

export interface MiddleEarthOperativeType {
  name: string;
  hero: boolean;
  points: number;
  chosenPath: string;
  status: {
    move: number;
    fight: number;
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
  warband_id: string;
  wargear: string;
  specialRules: string;
  injuries: string;
  xp: number;
}

// Check if needed
export interface MiddleEarthWarbandType {
  name: string,
  warriors: MiddleEarthOperativeType[]
}