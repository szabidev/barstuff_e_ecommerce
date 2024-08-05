export interface TequilaData {
  history: History;
  production: Production;
  types_of_tequila: TypesOfTequila;
  cultural_significance: CulturalSignificance;
  modern_tequila_industry: ModernTequilaIndustry;
}

export interface History {
  title: string;
  description: string;
  subsections: HistorySubsection[];
}

export interface HistorySubsection {
  title: string;
  description: string;
  key_facts?: KeyFact[];
}

export interface KeyFact {
  date?: string;
  description: string;
}

export interface Production {
  title: string;
  description: string;
  subsections: ProductionSubsection[];
}

export interface ProductionSubsection {
  title: string;
  description: string;
  key_ingredients?: KeyIngredient[];
  key_facts?: KeyFact[];
  key_methods?: KeyMethod[];
  aging_categories?: AgingCategory[];
}

export interface KeyIngredient {
  description: string;
}

export interface KeyMethod {
  description: string;
}

export interface AgingCategory {
  description: string;
}

export interface TypesOfTequila {
  title: string;
  description: string;
  subsections: TequilaTypeSubsection[];
}

export interface TequilaTypeSubsection {
  title: string;
  description: string;
  key_characteristics?: KeyCharacteristic[];
  brands?: Brand[];
}

export interface KeyCharacteristic {
  description: string;
}

export interface Brand {
  description: string;
}

export interface CulturalSignificance {
  title: string;
  description: string;
  subsections: CulturalSubsection[];
}

export interface CulturalSubsection {
  title: string;
  description: string;
  key_practices?: KeyPractice[];
  key_examples?: KeyExample[];
}

export interface KeyPractice {
  description: string;
}

export interface KeyExample {
  description: string;
}

export interface ModernTequilaIndustry {
  title: string;
  description: string;
  subsections: IndustrySubsection[];
}

export interface IndustrySubsection {
  title: string;
  description: string;
  key_trends?: KeyTrend[];
  brands?: Brand[];
}

export interface KeyTrend {
  description: string;
}
