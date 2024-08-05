export interface CachacaData {
  history: SectionWithSubsections;
  production: SectionWithSubsections;
  types_of_cachaca: SectionWithSubsections;
  cultural_significance: SectionWithSubsections;
  modern_cachaca_industry: SectionWithSubsections;
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
  key_methods?: KeyMethod[];
  key_factors?: KeyFactor[];
  key_characteristics?: KeyCharacteristic[];
  key_practices?: KeyPractice[];
  key_cocktails?: KeyCocktail[];
  key_trends?: KeyTrend[];
  brands?: Brand[];
  aging_categories?: AgingCategory[];
}

export interface KeyFact {
  date?: string;
  description: string;
}

export interface KeyIngredient {
  ingredient: string;
}

export interface KeyMethod {
  description: string;
}

export interface KeyFactor {
  description: string;
}

export interface KeyCharacteristic {
  description: string;
}

export interface KeyPractice {
  description: string;
}

export interface KeyCocktail {
  description: string;
}

export interface KeyTrend {
  description: string;
}

export interface Brand {
  description: string;
}

export interface AgingCategory {
  description: string;
}
