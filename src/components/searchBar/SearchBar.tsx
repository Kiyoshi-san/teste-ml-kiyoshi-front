import { useState } from "react";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { BsSearch } from "react-icons/bs";
import { Form } from "components/ui/form";
import api from "services/api";

const SearchBar: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const ITEMS_PATH = process.env.NEXT_PUBLIC_ITEMS_PATH || "/api/items";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSearchVal(e.target.elements["search-input"].value);
    try {
      const response = await api.get(`${ITEMS_PATH}?q=${searchVal}`);
      await console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
      }
    }
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
