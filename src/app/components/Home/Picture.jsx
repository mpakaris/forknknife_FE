import Image from 'next/image';

const Picture = ({ src, alt }) => {
  return (
    <div className="flex justify-center px-0 my-5">
      <Image 
        src={src} 
        alt={alt} 
        width={200}  
        height={100}
        className="object-contain"
      />
    </div>
  );
}

export default Picture;