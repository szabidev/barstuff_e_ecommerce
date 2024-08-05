export interface LiqueursData {
  overview: Overview;
  production_methods: Section;
  types_of_liqueurs: Section;
  notable_brands: NotableBrands;
  liqueur_cocktails: LiqueurCocktails;
  cultural_significance: Section;
  modern_liqueur_industry: Section;
}

export interface Overview {
  title: string;
  description: string;
  subsections: Subsection[];
}

export interface Subsection {
  title: string;
  description: string;
  key_facts?: KeyFact[];
  subsections?: Subsection[];
}

export interface KeyFact {
  fact?: string;
  description: string;
}

export interface Section {
  title: string;
  description: string;
  subsections: Subsection[];
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

export interface LiqueurCocktails {
  title: string;
  description: string;
  key_cocktails: KeyCocktail[];
}

export interface KeyCocktail {
  cocktail: string;
  description: string;
}
