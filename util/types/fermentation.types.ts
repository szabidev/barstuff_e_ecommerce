export interface ProcessStep {
  step: string;
  description: string;
}

export interface Process {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export interface ApplicationList {
  application: string;
  description: string;
}

export interface Application {
  title: string;
  description: string;
  list: ApplicationList[];
}

export interface SubType {
  name: string;
  description: string;
  process: Process;
  applications: Application;
}

// ! Main interface
export interface Fermentation {
  introduction: {
    title: string;
    description: string;
  };
  types_of_fermentation: {
    title: string;
    subtypes: SubType[];
  };
  detailed_alcohol_fermentation: {
    title: string;
    overview: {
      title: string;
      description: string;
    };
    biochemistry: {
      title: string;
      description: string;
      glycolysis: {
        title: string;
        description: string;
      };
      alcoholic_fermentation: {
        title: string;
        description: string;
      };
    };
    yeast_role: {
      title: string;
      list: { species: string; description: string }[];
    };
    factors_affecting_fermentation: {
      title: string;
      description: string;
      factors: { factor: string; description: string }[];
    };
    applications_in_brewing: {
      title: string;
      description: string;
      brewing: { title: string; description: string };
      winemaking: { title: string; description: string };
    };
    historical_context: {
      title: string;
      description: string;
    };
    health_and_safety: {
      title: string;
      description: string;
      safety_guidelines: {
        title: string;
        list: { guideline: string; description: string }[];
      };
    };
  };
}
