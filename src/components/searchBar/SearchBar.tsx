import { useState } from "react";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { BsSearch } from "react-icons/bs";
import { Form } from "components/ui/form";
import api from "services/api";
import { Suggestion } from "components/searchBar";
import { useDispatch } from "react-redux";
import {
  setSuggestionList,
  setActiveOverlay,
} from "@redux/reducer/searchBar-slice";

const SearchBar: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const ITEMS_PATH = process.env.NEXT_PUBLIC_ITEMS_PATH || "/api/items";

  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const text = e.target.elements["search-input"].value;
    try {
      const response = await api.get(`${ITEMS_PATH}?q=${text}`);
      await console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  const handleChange = async (text: string) => {
    setSearchVal(text);
    if (text.length >= 3) {
      try {
        const response = await api.get(`${ITEMS_PATH}?s=${text}`);
        dispatch(setSuggestionList(response.data));
        dispatch(setActiveOverlay(true));
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
  };

  return (
    <div className="searchbar-container">
      <Form className="searchbar-box" onSubmit={handleSubmit}>
        <Input
          name="search-input"
          type="text"
          placeholder="Pesquisar"
          autoComplete="off"
          onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(val.target.value);
          }}
        />
        <Button type="submit" icon={<BsSearch />} />
      </Form>
      <Suggestion />
    </div>
  );
};

export default SearchBar;
