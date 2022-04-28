import Logo from "@components/logo/Logo";
import SearchBar from "@components/searchBar/SearchBar";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-box">
        <Logo />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
