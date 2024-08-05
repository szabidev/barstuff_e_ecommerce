export interface DistillationStep {
  step: string;
  description: string;
}

export interface DistillationProcess {
  title: string;
  description: string;
  steps: DistillationStep[];
}

export interface DistillationSubType {
  name: string;
  description: string;
  process: DistillationProcess;
}

export interface TypesOfDistillation {
  title: string;
  description: string;
  subtypes: DistillationSubType[];
}

export interface DistillationSpiritType {
  name: string;
  description: string;
  distillation_method: string;
  process: {
    title: string;
    steps: DistillationStep[];
  };
}
// ! Main interface
export interface Distillation {
  introduction: {
    title: string;
    description: string;
  };
  types_of_distillation: TypesOfDistillation;

  distilling_devices: {
    title: string;
    description: string;
    types: {
      name: string;
      description: string;
      components: { component: string; description: string }[];
    }[];
  };
  how_they_work: {
    title: string;
    description: string;
    pot_still: DistillationProcess;
    column_still: DistillationProcess;
    reflux_still: DistillationProcess;
  };
  spirits_and_applications: {
    title: string;
    description: string;
    types_of_spirits: DistillationSpiritType[];
  };
  history_of_distillation: {
    title: string;
    description: string;
  };
  health_and_safety: {
    title: string;
    description: string;
    safety_guidelines: {
      title: string;
      list: { guidline: string; description: string }[];
    };
  };
}
