type BreadCrumbProps = {
  breadCrumb: {
    id: string;
    name: string;
    results: number;
  }[];
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ breadCrumb }) => {
  console.log(breadCrumb);
  return (
    <div className="breadcrumb-container">
      {breadCrumb.map((brd, index) => (
        <div key={`breadcrumb-${index}`} className="breadcrumb-box">
          {brd.name}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
