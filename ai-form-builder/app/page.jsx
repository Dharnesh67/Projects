import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <footer>
        <div className='text-center p-5 bg-primary text-white w-screen fixed bottom-0'>
          <p>© Developed By Dharmesh Raikwar</p>
        </div>
      </footer>
    </div>

  );
}
