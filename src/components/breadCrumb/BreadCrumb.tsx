type BreadCrumbProps = {
  breadCrumb: string[];
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ breadCrumb }) => {
  return breadCrumb?.length ? (
    <div className="breadcrumb-container">
      {breadCrumb.map((brd, index) => (
        <div key={`breadcrumb-${index}`} className="breadcrumb-box">
          {brd}
        </div>
      ))}
    </div>
  ) : null;
};

export default BreadCrumb;
