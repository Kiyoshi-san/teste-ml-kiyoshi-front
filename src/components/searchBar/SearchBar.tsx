import { useState } from "react";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { BsSearch } from "react-icons/bs";
import { Form } from "components/ui/form";

const SearchBar: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchVal(e.target.elements["search-input"].value);
    console.log(searchVal);
  };

  return (
    <Form className="searchbar-container" onSubmit={handleSubmit}>
      <Input
        name="search-input"
        type="text"
        placeholder="Pesquisar"
        onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
          setSearchVal(val.target.value);
        }}
      />
      <Button type="submit" icon={<BsSearch />} />
    </Form>
  );
};

export default SearchBar;
