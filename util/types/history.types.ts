export interface GlossaryTerms {
  term: string;
  definition: string;
}

export interface SubsectionContribution {
  contribution: string;
  description: string;
}

export interface Subsection {
  title: string;
  description: string;
  key_contributions: SubsectionContribution[];
}

export interface Material {
  title: string;
  description: string;
  subsections: Subsection[];
}

// ! Main interface
export interface HistoryOfAlcohol {
  introduction: {
    title: string;
    description: string;
  };
  origins_of_fermentation: {
    title: string;
    description: string;
    key_findings: {
      region: string;
      date: string;
      description: string;
    }[];
  };
  ancient_civilizations: Material;
  medieval_period: Material;
  renaissance_and_enlightenment: Material;
  xixth_century_developments: Material;
  modern_age: Material;
  global_perspectives: Material;
  future_trends: Material;
  glossary: {
    title: string;
    description: string;
    terms: GlossaryTerms[];
  };
}
