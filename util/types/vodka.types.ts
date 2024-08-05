// ! Main interface
export interface VodkaData {
  introduction: Introduction;
  history: History;
  production: Production;
  types_of_vodka: TypesOfVodka;
  cultural_significance: CulturalSignificance;
  modern_vodka_industry: ModernVodkaIndustry;
}

interface Introduction {
  title: string;
  description: string;
}

interface History {
  title: string;
  description: string;
  subsections: HistorySubsection[];
}

interface HistorySubsection {
  title: string;
  description: string;
  key_facts?: KeyFact[];
  key_contributions?: KeyContribution[];
}

interface KeyFact {
  region: string;
  date: string;
  description: string;
  brands?: Brand[];
}

interface KeyContribution {
  contribution: string;
  description: string;
  brands?: Brand[];
}

interface Brand {
  brand: string;
  description: string;
}

interface Production {
  title: string;
  description: string;
  subsections: ProductionSubsection[];
}

interface ProductionSubsection {
  title: string;
  description: string;
  key_materials?: KeyMaterial[];
  key_processes?: KeyProcess[];
  key_methods?: KeyMethod[];
}

interface KeyMaterial {
  material: string;
  description: string;
  brands?: Brand[];
}

interface KeyProcess {
  process: string;
  description: string;
}

interface KeyMethod {
  method: string;
  description: string;
}

interface TypesOfVodka {
  title: string;
  description: string;
  subsections: VodkaTypeSubsection[];
}

interface VodkaTypeSubsection {
  title: string;
  description: string;
  key_characteristics?: KeyCharacteristic[];
  key_flavors?: KeyFlavor[];
  brands?: Brand[];
}

interface KeyCharacteristic {
  description: string;
}

interface KeyFlavor {
  flavor: string;
  description: string;
}

interface CulturalSignificance {
  title: string;
  description: string;
  subsections: CulturalSubsection[];
}

interface CulturalSubsection {
  title: string;
  description: string;
  key_practices?: KeyPractice[];
  key_examples?: KeyExample[];
}

interface KeyPractice {
  description: string;
}

interface KeyExample {
  description: string;
}

interface ModernVodkaIndustry {
  title: string;
  description: string;
  subsections: IndustrySubsection[];
}

interface IndustrySubsection {
  title: string;
  description: string;
  key_trends?: KeyTrend[];
  brands?: Brand[];
}

interface KeyTrend {
  description: string;
}
