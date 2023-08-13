import Image from "next/image";

const ImageStack = ({ images }) => {
  return (
    <div className="flex items-center">
      {images.slice(0, 5).map((image, index) => (
        <div
          key={index}
          className={`relative w-9 h-9 rounded-full overflow-hidden border-2 border-white ${
            index === 0 ? "" : "-ml-3"
          }`}
          style={{ zIndex: index + 1 }}
        >
          <Image
            src={image}
            width={100}
            height={100}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {images.length > 5 && (
        <div className="w-8 h-8 bg-gray-100 text-sm text-gray-600 rounded-full flex items-center justify-center z-10 -ml-3">
          +{images.length - 5}
        </div>
      )}
    </div>
  );
};

export default ImageStack;
