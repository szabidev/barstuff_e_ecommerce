export interface WineData {
  overview: Section;
  wine_production: Section;
  wine_styles: Section;
  wine_regions: Section;
  wine_tasting: Section;
  wine_pairing: Section;
}

export interface Section {
  title: string;
  description: string;
  subsections?: Subsection[];
}

export interface Subsection {
  title: string;
  description: string;
  key_facts?: KeyFact[];
  key_methods?: KeyMethod[];
  key_styles?: KeyStyle[];
  key_regions?: KeyRegion[];
  key_considerations?: Description[];
  key_aromas?: Description[];
  key_tastes?: Description[];
  key_pairings?: Description[];
}

export interface KeyFact {
  fact?: string;
  description: string;
}

export interface KeyMethod {
  method?: string;
  description: string;
}

export interface KeyStyle {
  name: string;
  description: string;
  examples?: any[];
}

export interface KeyRegion {
  name: string;
  description: string;
}

export interface Description {
  description: string;
}
