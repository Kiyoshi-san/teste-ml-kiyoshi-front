import { useSelector } from "react-redux";

const Suggestion: React.FC = () => {
  const { suggestionList } = useSelector((state) => state.searchBar);

  return (
    <div
      className={`suggestion-container ${
        suggestionList?.length ? "active" : ""
      }`}
    >
      {suggestionList?.length
        ? suggestionList?.map((sugL, index) => (
            <div
              key={`suggestion-${index}`}
              className="suggestion-row"
              onClick={() => console.log(sugL.id)}
            >
              {sugL.title}
            </div>
          ))
        : null}
    </div>
  );
};

export default Suggestion;
