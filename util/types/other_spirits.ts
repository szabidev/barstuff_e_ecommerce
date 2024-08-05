export interface OtherSpiritsData {
  title: string;
  description: string;
  subsections: Subsection[];
}

export interface Subsection {
  title: string;
  description: string;
  production_method?: ProductionMethod;
  usage?: Usage;
  key_styles?: KeyStyle[];
}

export interface ProductionMethod {
  overview: string;
  detailed_steps: Description[];
}

export interface Usage {
  overview: string;
  common_uses: Description[];
}

export interface KeyStyle {
  name: string;
  description: string;
  examples?: any[];
}

export interface Description {
  description: string;
}
