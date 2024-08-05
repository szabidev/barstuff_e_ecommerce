import { AperitifsAndBittersData } from "./aperitifs_and_bitters.types";
import { BeerData } from "./beer.types";
import { BrandyData, CognacData } from "./brandy.types";
import { CachacaData } from "./cachaca.types";
import { Distillation } from "./distillation.types";
import { Fermentation } from "./fermentation.types";
import { GinData } from "./gin.types";
import { HistoryOfAlcohol } from "./history.types";
import { IngredientsData } from "./ingredients.types";
import { LiqueursData } from "./liqueurs.types";
import { MezcalData } from "./mezcal.types";
import { OtherSpiritsData } from "./other_spirits";
import { RumData } from "./rum.types";
import { TequilaData } from "./tequila.types";
import { ToolsAndTechniques } from "./tools_and_techniques.types";
import { VodkaData } from "./vodka.types";
import { WhiskeyData } from "./whiskey.types";
import { WineData } from "./wine.types";

export interface Course {
  history_of_alcohol: HistoryOfAlcohol;
  bartendingtoolsandtechniques: ToolsAndTechniques;
  fermentation: Fermentation;
  alcohol_distillation: Distillation;
  // ! Genereate data
  maturation?: any;
  vodka: VodkaData;
  gin: GinData;
  rum: RumData;
  whiskey: WhiskeyData;
  brandy: BrandyData;
  cognac: CognacData;
  tequila: TequilaData;
  mezcal: MezcalData;
  liqueurs: LiqueursData;
  beer: BeerData;
  wine: WineData;
  cachaca: CachacaData;
  aperitifs_and_bitters: AperitifsAndBittersData;
  other_spirits: OtherSpiritsData;
  ingredients: IngredientsData;
}

export const courseInitialState: Course = {
  history_of_alcohol: {
    introduction: {
      title: "",
      description: "",
    },
    origins_of_fermentation: {
      title: "",
      description: "",
      key_findings: [],
    },
    ancient_civilizations: {
      title: "",
      description: "",
      subsections: [],
    },
    medieval_period: {
      title: "",
      description: "",
      subsections: [],
    },
    renaissance_and_enlightenment: {
      title: "",
      description: "",
      subsections: [],
    },
    xixth_century_developments: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_age: {
      title: "",
      description: "",
      subsections: [],
    },
    global_perspectives: {
      title: "",
      description: "",
      subsections: [],
    },
    future_trends: {
      title: "",
      description: "",
      subsections: [],
    },
    glossary: {
      title: "",
      description: "",
      terms: [],
    },
  },
  bartendingtoolsandtechniques: {
    title: "",
    description: "",
    subsections: [],
  },
  fermentation: {
    introduction: {
      title: "",
      description: "",
    },
    types_of_fermentation: {
      title: "",
      subtypes: [],
    },
    detailed_alcohol_fermentation: {
      title: "",
      overview: {
        title: "",
        description: "",
      },
      biochemistry: {
        title: "",
        description: "",
        glycolysis: {
          title: "",
          description: "",
        },
        alcoholic_fermentation: {
          title: "",
          description: "",
        },
      },
      yeast_role: {
        title: "",
        list: [],
      },
      factors_affecting_fermentation: {
        title: "",
        description: "",
        factors: [],
      },
      applications_in_brewing: {
        title: "",
        description: "",
        brewing: {
          title: "",
          description: "",
        },
        winemaking: {
          title: "",
          description: "",
        },
      },
      historical_context: {
        title: "",
        description: "",
      },
      health_and_safety: {
        title: "",
        description: "",
        safety_guidelines: {
          title: "",
          list: [],
        },
      },
    },
  },
  alcohol_distillation: {
    introduction: {
      title: "",
      description: "",
    },
    types_of_distillation: {
      title: "",
      description: "",
      subtypes: [],
    },
    distilling_devices: {
      title: "",
      description: "",
      types: [],
    },
    how_they_work: {
      title: "",
      description: "",
      pot_still: {
        title: "",
        description: "",
        steps: [],
      },
      column_still: {
        title: "",
        description: "",
        steps: [],
      },
      reflux_still: {
        title: "",
        description: "",
        steps: [],
      },
    },
    spirits_and_applications: {
      title: "",
      description: "",
      types_of_spirits: [],
    },
    history_of_distillation: {
      title: "",
      description: "",
    },
    health_and_safety: {
      title: "",
      description: "",
      safety_guidelines: {
        title: "",
        list: [],
      },
    },
  },
  vodka: {
    introduction: {
      title: "",
      description: "",
    },
    history: {
      title: "",
      description: "",
      subsections: [
        {
          title: "",
          description: "",
          key_facts: [],
        },
        {
          title: "",
          description: "",
          key_contributions: [],
        },
      ],
    },
    production: {
      title: "",
      description: "",
      subsections: [
        {
          title: "",
          description: "",
          key_materials: [],
        },
        {
          title: "",
          description: "",
          key_processes: [],
        },
        {
          title: "",
          description: "",
          key_processes: [],
        },
        {
          title: "",
          description: "",
          key_methods: [],
        },
      ],
    },
    types_of_vodka: {
      title: "",
      description: "",
      subsections: [
        {
          title: "",
          description: "",
          key_characteristics: [],
          brands: [],
        },
        {
          title: "",
          description: "",
          key_flavors: [],
        },
        {
          title: "",
          description: "",
          key_characteristics: [],
          brands: [],
        },
      ],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [
        {
          title: "",
          description: "",
          key_practices: [],
        },
        {
          title: "",
          description: "",
          key_examples: [],
        },
      ],
    },
    modern_vodka_industry: {
      title: "",
      description: "",
      subsections: [
        {
          title: "",
          description: "",
          key_trends: [],
        },
        {
          title: "",
          description: "",
        },
      ],
    },
  },
  gin: {
    introduction: {
      title: "",
      description: "",
    },
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_gin: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_gin_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  brandy: {
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_brandy: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_brandy_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  cognac: {
    title: "",
    description: "",
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_cognac: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_cognac_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  whiskey: {
    overview: {
      title: "",
      description: "",
      subsections: [],
    },
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production_methods: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_whiskey: {
      title: "",
      description: "",
      subsections: [],
    },
    notable_brands: {
      title: "",
      description: "",
      brands: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_whiskey_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  rum: {
    introduction: { title: "", description: "" },
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_rum: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_rum_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  cachaca: {
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_cachaca: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_cachaca_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  tequila: {
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_tequila: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_tequila_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  mezcal: {
    history: {
      title: "",
      description: "",
      subsections: [],
    },
    production: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_mezcal: {
      title: "",
      description: "",
      subsections: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_mezcal_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  liqueurs: {
    overview: {
      title: "",
      description: "",
      subsections: [],
    },
    production_methods: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_liqueurs: {
      title: "",
      description: "",
      subsections: [],
    },
    notable_brands: {
      title: "",
      description: "",
      brands: [],
    },
    liqueur_cocktails: {
      title: "",
      description: "",
      key_cocktails: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_liqueur_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  aperitifs_and_bitters: {
    overview: {
      title: "",
      description: "",
      subsections: [],
    },
    production_methods: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_aperitifs: {
      title: "",
      description: "",
      subsections: [],
    },
    types_of_bitters: {
      title: "",
      description: "",
      subsections: [],
    },
    notable_brands: {
      title: "",
      description: "",
      brands: [],
    },
    cocktail_applications: {
      title: "",
      description: "",
      key_cocktails: [],
    },
    cultural_significance: {
      title: "",
      description: "",
      subsections: [],
    },
    modern_industry: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  beer: {
    overview: {
      title: "",
      description: "",
      subsections: [],
    },
    brewing_process: {
      title: "",
      description: "",
      subsections: [],
    },
    beer_styles: {
      title: "",
      description: "",
      subsections: [],
    },
    beer_brands: {
      title: "",
      description: "",
      brands: [],
    },
    beer_culture: {
      title: "",
      description: "",
      subsections: [],
    },
    beer_industry: {
      title: "",
      description: "",
      subsections: [],
    },
    beer_recipes: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  wine: {
    overview: {
      title: "",
      description: "",
      subsections: [],
    },
    wine_production: {
      title: "",
      description: "",
      subsections: [],
    },
    wine_styles: {
      title: "",
      description: "",
      subsections: [],
    },
    wine_regions: {
      title: "",
      description: "",
      subsections: [],
    },
    wine_tasting: {
      title: "",
      description: "",
      subsections: [],
    },
    wine_pairing: {
      title: "",
      description: "",
      subsections: [],
    },
  },
  other_spirits: {
    title: "",
    description: "",
    subsections: [],
  },
  ingredients: {
    title: "",
    description: "",
    subsections: [],
  },
};
