export interface IngredientsData {
  title: string;
  description: string;
  subsections: Subsection[];
}

export interface Subsection {
  title: string;
  description: string;
  types: Type[];
}

export interface Type {
  name: string;
  description: string;
  examples: Example[];
}

export interface Example {
  name: string;
  origin: string;
  sugar_content: string;
  ph: string;
  uses: string[];
  best_used_fresh: string;
}
