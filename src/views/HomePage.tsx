import {
  AboutUs,
  Achievement,
  ActiveProcess,
  ChoosePick,
  FoodCategory,
  Footer,
  Header,
  LatesBlogPost,
  OurChef,
  Testimonials,
  WhyChooseUs
} from 'src/sections';

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <Achievement />
      <ChoosePick />
      <OurChef />
      <Testimonials />
      <ActiveProcess />
      <LatesBlogPost />
      <Footer />
    </>
  );
};

export default HomePage;
