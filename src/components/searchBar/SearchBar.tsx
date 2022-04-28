import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { BsSearch } from "react-icons/bs";

const SearchBar: React.FC = () => {
  return (
    <div className="searchbar-container">
      <Input type="text" placeholder="Pesquisar" />
      <Button type="submit" icon={<BsSearch />} />
    </div>
  );
};

export default SearchBar;
