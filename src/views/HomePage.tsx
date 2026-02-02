import {
  AboutUs,
  Achievement,
  ChoosePick,
  FoodCategory,
  Header,
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
    </>
  );
};

export default HomePage;
