"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllUsers, me } from "@/api/auth.api";
import { removeKey } from "@/util/storage";
import { useRouter } from "next/navigation";
import { fetchDrinks } from "@/api/drinks.api";
import { fetchCourses } from "@/api/courses.api";
import { Course } from "@/util/types/course.types";
// import {fetchProjects} from "@/api/projects.api";
import { courseInitialState } from "@/util/types/course.types";

interface ContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;

  user: any;
  clearUser: any;
  fetchUser: any;

  allUsers: any;
  setAllUsers: any;

  adminUser: User;
  setAdminUser: any;
  barStaff: User[];
  setBarStaff: any;

  // projects: any,
  drinks: Drink[];
  setDrinks: any;
  courses: Course;
  setCourses: Dispatch<SetStateAction<Course>>;

  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
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

export interface User {
  admin_id: string | null;
  email: string;
  created_at: string;
  updated_at: string;
  id: string;
  is_admin: boolean;
  user_type: string;
  name: string;
  current_users_count: number | null;
  total_users_count: number | null;
  establishment: string;
  establishment_type: string;
  is_active: boolean;
  position: string;
  last_login_at: string;
}

const AppContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,

  user: null,
  clearUser: () => null,

  allUsers: null,
  setAllUsers: () => null,

  adminUser: {
    admin_id: null,
    email: "",
    created_at: "",
    updated_at: "",
    id: "",
    is_admin: false,
    user_type: "",
    name: "",
    current_users_count: null,
    total_users_count: null,
    establishment: "",
    establishment_type: "",
    is_active: false,
    position: "",
    last_login_at: "",
  },
  setAdminUser: () => null,
  barStaff: [],
  setBarStaff: () => null,

  fetchUser: null,

  // projects: [],
  drinks: [],
  setDrinks: () => null,
  courses: courseInitialState,
  setCourses: () => null,

  isLoading: true,
  setIsLoading: () => true,
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
  const [courses, setCourses] = useState<Course>(courseInitialState);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [adminUser, setAdminUser] = useState<User>({
    admin_id: null,
    email: "",
    created_at: "",
    updated_at: "",
    id: "",
    is_admin: false,
    user_type: "",
    name: "",
    current_users_count: null,
    total_users_count: null,
    establishment: "",
    establishment_type: "",
    is_active: false,
    position: "",
    last_login_at: "",
  });
  const [barStaff, setBarStaff] = useState<User[]>([]);

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

  const handleAllUsers = async () => {
    const response = await getAllUsers();
    const data = await response.json();
    const admin = data.find(
      (admin: User) => admin.user_type === "admin" && admin.is_admin
    );
    const notAdmin = data.filter(
      (staff: User) => staff.user_type === "user" && !staff.is_admin
    );
    setAllUsers(data);
    setAdminUser(admin);
    setBarStaff(notAdmin);
  };

  // const handleProjects = async () => {
  //     const data = await fetchProjects();
  //     setProjects(data);
  // };

  const handleDrinks = async () => {
    const data = await fetchDrinks();
    setDrinks(data);
  };

  const handleCourses = async () => {
    const data = await fetchCourses();
    setCourses(data);
  };

  useEffect(() => {
    handleDrinks();
    console.log(drinks, "drinks");
  }, []);

  const clearUser = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    fetchUser();
    // handleProjects();
    handleAllUsers();
    handleDrinks();
    handleCourses();
  }, []);
  console.log(courses, "courses");

  useEffect(() => {
    // sortUsers();
  }, [allUsers]);

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
        setDrinks,
        courses,
        setCourses,
        allUsers,
        setAllUsers,
        adminUser,
        setAdminUser,
        barStaff,
        setBarStaff,

        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppProvider = () => useContext(AppContext);
