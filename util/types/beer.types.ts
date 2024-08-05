export interface BeerData {
  overview: Section;
  brewing_process: Section;
  beer_styles: Section;
  beer_brands: NotableBrands;
  beer_culture: Section;
  beer_industry: Section;
  beer_recipes: Section;
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
  key_festivals?: Description[];
  key_traditions?: Description[];
  key_components?: Description[];
  key_trends?: Description[];
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

export interface Description {
  description: string;
}

export interface NotableBrands {
  title: string;
  description: string;
  brands: Brand[];
}

export interface Brand {
  brand: string;
  description: string;
}
