export interface BrandyData {
  history: History;
  production: Production;
  types_of_brandy: TypesOfBrandy;
  cultural_significance: CulturalSignificance;
  modern_brandy_industry: ModernBrandyIndustry;
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
  aging_categories?: AgingCategory[];
}

export interface KeyIngredient {
  ingredient: string;
  description: string;
}

export interface AgingCategory {
  description: string;
}

export interface TypesOfBrandy {
  title: string;
  description: string;
  subsections: BrandyTypeSubsection[];
}

export interface BrandyTypeSubsection {
  title: string;
  description: string;
  key_characteristics?: KeyCharacteristic[];
  brands?: Brand[];
}

export interface KeyCharacteristic {
  description: string;
}

export interface Brand {
  brand: string;
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
  examples?: Example[];
  key_celebrations?: KeyCelebration[];
  key_cocktails?: KeyCocktail[];
}

export interface Example {
  description: string;
}

export interface KeyCelebration {
  description: string;
}

export interface KeyCocktail {
  description: string;
}

export interface ModernBrandyIndustry {
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

export interface CognacData {
  title: string;
  description: string;
  history: History;
  production: Production;
  types_of_cognac: TypesOfCognac;
  cultural_significance: CulturalSignificance;
  modern_cognac_industry: ModernCognacIndustry;
}

export interface TypesOfCognac {
  title: string;
  description: string;
  subsections: CognacTypeSubsection[];
}

export interface CognacTypeSubsection {
  title: string;
  description: string;
  brands?: Brand[];
}

export interface ModernCognacIndustry {
  title: string;
  description: string;
  subsections: IndustrySubsection[];
}
