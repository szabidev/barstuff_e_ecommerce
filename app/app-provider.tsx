"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { me } from "@/api/auth.api";
import { removeKey } from "@/util/storage";
import { useRouter } from "next/navigation";
import { fetchDrinks } from "@/api/drinks";
// import {fetchProjects} from "@/api/projects.api";

interface ContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  user: any;
  clearUser: any;
  fetchUser: any;

  // projects: any,
  drinks: Drink[];
}

export interface Drink {
  name: string;
  image: string;
  country: string;
  category: string;
  tasting_notes?: string;
  food_pairing?: string;
  abv: string;
  description: string;
  price: string;
  other_ingredients: string[];
  raw_material: string;
  production_method: string;
}

const AppContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,

  user: null,
  clearUser: () => null,

  fetchUser: null,

  // projects: [],
  drinks: [],
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [user, setCurrentUser] = useState<any>(null);
  // const [projects, setProjects] = useState<any>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);

  const fetchUser = async () => {
    const response = await me();
    if (response.status === 401) {
      await removeKey("token");
      setCurrentUser(null);

      setTimeout(() => {
        router.replace("/signin");
      }, 1000);
    }

    if (response.status === 200) {
      setIsLoading(false);
      const user = await response.json();
      setCurrentUser(user);
    } else {
      const responseJSON = await response.json();
      console.error(responseJSON);
    }

    setIsLoading(false);
  };

  // const handleProjects = async () => {
  //     const data = await fetchProjects();
  //     setProjects(data);
  // };

  const handleDrinks = async () => {
    const data = await fetchDrinks();
    setDrinks(data);
  };

  const clearUser = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    fetchUser();
    // handleProjects();
    handleDrinks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        // Sidebar
        sidebarOpen,
        setSidebarOpen,

        // Auth
        user,
        fetchUser,
        clearUser,

        // Customize...
        // projects
        drinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppProvider = () => useContext(AppContext);
