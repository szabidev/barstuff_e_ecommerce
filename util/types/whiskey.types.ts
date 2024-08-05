export interface WhiskeyData {
  overview: SectionWithSubsections;
  history: SectionWithSubsections;
  production_methods: SectionWithSubsections;
  types_of_whiskey: SectionWithSubsections;
  notable_brands: NotableBrands;
  cultural_significance: SectionWithSubsections;
  modern_whiskey_industry: SectionWithSubsections;
}

export interface Section {
  title: string;
  description: string;
}

export interface SectionWithSubsections extends Section {
  subsections: Subsection[];
}

export interface Subsection {
  title: string;
  description: string;
  key_facts?: KeyFact[];
  key_ingredients?: KeyIngredient[];
  key_steps?: KeyStep[];
  key_cocktails?: KeyCocktail[];
  examples?: Example[];
  key_trends?: KeyTrend[];
  key_innovations?: KeyInnovation[];
  subsections?: Subsection[];
  brands?: Brand[];
}

export interface KeyFact {
  description: string;
}

export interface KeyIngredient {
  description: string;
}

export interface KeyStep {
  description: string;
}

export interface KeyCocktail {
  description: string;
}

export interface Example {
  description: string;
}

export interface KeyTrend {
  description: string;
}

export interface KeyInnovation {
  description: string;
}

export interface Brand {
  brand: string;
  description: string;
}

export interface NotableBrands {
  title: string;
  description: string;
  brands: Brand[];
}
