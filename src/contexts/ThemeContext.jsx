import { createContext,useContext,useEffect,useState } from "react";

// Khởi tạo 1 - kênh themeContext
const ThemeContext = createContext(null);

// Provider - nơi data sống
export function ThemeProvider({ children }){

  const [isDark, setIsDark] = useState(localStorage.getItem('isDarkMode') == 'true' ?? false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark',isDark);
    localStorage.setItem('isDarkMode',isDark);
  },[isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(){
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("Lỗi !");
  }
  return context;
}


