import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Prefrences from "@/components/Preferences";
import Reviewers from "@/components/Reviewers";
import Search from "@/components/Search";
import Work from "@/components/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Work />
      <Prefrences />
      <Plans />
      <Reviewers />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
