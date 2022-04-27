import type { ImageModel } from 'models/components/image';

const Image: React.FC<ImageModel> = ({ src, alt }) => {
    return (<div className="image-container">
        <img src={src} alt={alt} />
    </div>)
};

export default Image;
