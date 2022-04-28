import { useState } from "react";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { BsSearch } from "react-icons/bs";

const SearchBar: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>("");

  const handleSearch = (val: string) => {
    console.log(val);
  };

  return (
    <div className="searchbar-container">
      <Input
        type="text"
        placeholder="Pesquisar"
        onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
          setSearchVal(val.target.value);
        }}
      />
      <Button
        type="button"
        icon={<BsSearch />}
        onClick={() => handleSearch(searchVal)}
      />
    </div>
  );
};

export default SearchBar;
