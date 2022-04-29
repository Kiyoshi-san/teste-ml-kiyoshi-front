import { Image } from "components/ui/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <Link href="/" passHref>
        <a>
          <Image src="/img/mercado-livre.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
