import Link from "next/link";
import Container from "./Container";
import logo from "@/assets/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="py-6 bg-black/90 text-white fixed top-0 w-full border-b border-gray-500 z-50">
      <Container>
        <div className="flex flex-col space-y-5 justify-between items-end md:items-center md:flex-row md:space-y-0">
          <Link
            href="/"
            className="font-bold text-xl hover:text-[#cbfd00] transition duration-150 ease-in-out"
          >
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="logo" width={125} />
              <span className="text-2xl">Hypergeometric Calculator</span>
            </div>
          </Link>

          <Link
            href={"https://github.com/BrandTrump/Hypergeometric-Calculator-v2"}
            className="hover:text-[#cbfd00] transition duration-150 ease-in-out"
          >
            GitHub Repo
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
