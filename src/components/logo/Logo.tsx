import { Image } from "components/ui/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <a>
        <div className="logo-container">
          <Image src="/img/mercado-livre.png" alt="logo" />
        </div>
      </a>
    </Link>
  );
};

export default Logo;
