import { SuggestionModel } from "@models/components/searchBar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Suggestion: React.FC = () => {
  const { suggestionList } = useSelector((state: any) => state.searchBar);
  const router = useRouter();

  const handleProductTileClick = (id: string) => {
    console.log(id);
    id && router.push(`/items/${id}`);
  };

  return (
    <div
      className={`suggestion-container ${
        suggestionList?.length ? "active" : ""
      }`}
    >
      {suggestionList?.length
        ? suggestionList?.map((sugL: SuggestionModel, index: number) => (
            <div
              key={`suggestion-${index}`}
              className="suggestion-row"
              onClick={() => handleProductTileClick(sugL.id)}
            >
              {sugL.title}
            </div>
          ))
        : null}
    </div>
  );
};

export default Suggestion;
