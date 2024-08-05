export interface RumData {
  introduction: Section;
  history: SectionWithSubsections;
  production: SectionWithSubsections;
  types_of_rum: SectionWithSubsections;
  cultural_significance: SectionWithSubsections;
  modern_rum_industry: SectionWithSubsections;
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
  key_examples?: KeyExample[];
  brands?: Brand[];
  key_trends?: KeyTrend[];
}

export interface KeyFact {
  region?: string;
  date?: string;
  description: string;
  brands?: Brand[];
}

export interface KeyIngredient {
  description: string;
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

export interface KeyExample {
  description: string;
}

export interface Brand {
  brand?: string;
  description: string;
}

export interface KeyTrend {
  description: string;
}
