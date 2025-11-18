import { NavLink } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

const Navbar = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <header className={`header ${isRTL ? 'flex-row-reverse' : ''}`}>
      <NavLink to='/' className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
        OCD{"{"}ev{"}"}
      </NavLink>
      <nav className={`flex text-lg gap-7 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          {t('navbar.about')}
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          {t('navbar.projects')}
        </NavLink>
        <button
          onClick={toggleLanguage}
          className='px-3 py-1 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors'
          aria-label='Toggle language'
        >
          {language === 'en' ? 'HE' : 'EN'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
