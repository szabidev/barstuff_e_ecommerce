export interface AperitifsAndBittersData {
  overview: Section;
  production_methods: Section;
  types_of_aperitifs: Section;
  types_of_bitters: Section;
  notable_brands: NotableBrands;
  cocktail_applications: CocktailApplications;
  cultural_significance: Section;
  modern_industry: Section;
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
  key_examples?: KeyExample[];
  key_aspects?: KeyAspect[];
  key_trends?: Description[];
  key_innovations?: Description[];
}

export interface KeyFact {
  fact?: string;
  description: string;
}

export interface KeyMethod {
  method?: string;
  description: string;
}

export interface KeyExample {
  description: string;
}

export interface KeyAspect {
  description: string;
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

export interface CocktailApplications {
  title: string;
  description: string;
  key_cocktails: KeyCocktail[];
}

export interface KeyCocktail {
  cocktail: string;
  description: string;
}
