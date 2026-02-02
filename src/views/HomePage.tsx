import {
  AboutUs,
  Achievement,
  ActiveProcess,
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
      <ActiveProcess />
    </>
  );
};

export default HomePage;
