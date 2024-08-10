export interface ToolType {
  name: string;
  description: string;
  uses: string[];
  best_practices: string[];
  image_url?: string;
}

export interface Tool {
  name: string;
  description: string;
  types: ToolType[];
}

export interface BartendingTechniqueStep {
  step: string;
  description: string;
}

export interface BartendingTeqchnique {
  name: string;
  description: string;
  steps: BartendingTechniqueStep[];
  best_practices: string[];
}

export interface ToolsAndTechniquesSubsection {
  title: string;
  description: string;
  tools: Tool[];
}

export interface ToolsAndTechniquesSubsection {
  title: string;
  description: string;
  techniques: BartendingTeqchnique[];
}

// ! Main interface
export interface ToolsAndTechniques {
  title: string;
  description: string;
  subsections: [ToolsAndTechniquesSubsection, ToolsAndTechniquesSubsection];
}
