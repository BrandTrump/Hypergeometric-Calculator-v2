import CardGrid from "@/components/CardGrid";
import Container from "@/components/Container";
import FileUpload from "@/components/FileUpload";

export default function Home() {
  return (
    <Container>
      <FileUpload />
      <section className="border border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-20">
        <div className="p-4 bg-gray-800 mb-2">
          <h1 className="font-semibold text-white text-2xl">Information</h1>
        </div>
        <p className="p-4">
          This application is a tool that provides detailed probability
          information for specifically the Yu-Gi-Oh! Card Game. Paraphrased from
          wikipedia in simpler terms-the hypergeometric distribution is a way to
          figure out the chance of getting something you want when you pick a
          certain number of things from a group without putting them back. The
          binomial distribution is similar, but you put the things back after
          each pick.
        </p>
      </section>
    </Container>
  );
}
