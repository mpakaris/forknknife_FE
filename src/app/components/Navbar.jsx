import Image from 'next/image';
 
export default function Navbar() {
  return (
    <div className="flex justify-center border-teal-600 border-b-2">
      <Image
        src="/images/forkknife_logo.png"
        width={100}
        height={100}
        alt="Picture of the author"
      />
    </div>
  );
}