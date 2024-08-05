export interface GinData {
  introduction: Introduction;
  history: History;
  production: Production;
  types_of_gin: TypesOfGin;
  cultural_significance: CulturalSignificance;
  modern_gin_industry: ModernGinIndustry;
}

export interface Introduction {
  title: string;
  description: string;
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
  key_events?: KeyEvent[];
}

export interface KeyFact {
  region: string;
  date: string;
  description: string;
  brands?: Brand[];
}

export interface KeyEvent {
  description: string;
}

export interface Brand {
  brand: string;
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
  key_materials?: KeyMaterial[];
  key_botanicals?: KeyBotanical[];
  key_methods?: KeyMethod[];
}

export interface KeyMaterial {
  description: string;
}

export interface KeyBotanical {
  description: string;
}

export interface KeyMethod {
  description: string;
}

export interface TypesOfGin {
  title: string;
  description: string;
  subsections: GinTypeSubsection[];
}

export interface GinTypeSubsection {
  title: string;
  description: string;
  key_characteristics?: KeyCharacteristic[];
  brands?: Brand[];
}

export interface KeyCharacteristic {
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

export interface ModernGinIndustry {
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
