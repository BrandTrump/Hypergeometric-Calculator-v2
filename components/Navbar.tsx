import Link from "next/link";
import Container from "./Container";
import logo from "@/assets/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="py-6 bg-black/90 text-white fixed top-0 w-full border-b border-gray-500 z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-xl hover:text-[#cbfd00] transition duration-150 ease-in-out"
          >
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="logo" width={125} />
              <span>Hypergeometric Calculator</span>
            </div>
          </Link>

          <p>GitHub Repo</p>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
