import Logo from "@components/logo/Logo";
import SearchBar from "@components/searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveOverlay,
  setSuggestionList,
} from "redux/reducer/searchBar-slice";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickOverlay = () => {
    dispatch(setActiveOverlay(false));
    dispatch(setSuggestionList([]));
  };

  const { activeOverlay } = useSelector((state) => state.searchBar);

  return (
    <div className="header-container">
      <div className="header-box">
        <Logo />
        <SearchBar />
      </div>
      <div
        className={`overlay ${activeOverlay ? "active" : ""}`}
        onClick={() => handleClickOverlay()}
      />
    </div>
  );
};

export default Header;
