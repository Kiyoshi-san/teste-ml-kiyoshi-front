import { Image } from "components/ui/image";

const Notfound: React.FC = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <div className="magnifier-container">
          <Image src="/img/magnifier.png" alt="pesquisa" />
        </div>
        <div className="notfound-text-container">Busca não encontrada</div>
      </div>
    </div>
  );
};

export default Notfound;
