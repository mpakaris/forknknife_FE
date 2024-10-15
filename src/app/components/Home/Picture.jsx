import Image from 'next/image';

const Picture = ({ src, alt }) => {
  return (
    <div className="flex justify-center p-10">
      <Image 
        src={src} 
        alt={alt} 
        width={500}  
        height={200}
        className="object-contain"
      />
    </div>
  );
}

export default Picture;