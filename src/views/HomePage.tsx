import {
  AboutUs,
  Achievement,
  ActiveProcess,
  ChoosePick,
  FoodCategory,
  LatesBlogPost,
  OurChef,
  Testimonials,
  WhyChooseUs
} from 'src/sections';

const HomePage = () => {
  return (
    <>
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <Achievement />
      <ChoosePick />
      <OurChef />
      <Testimonials />
      <ActiveProcess />
      <LatesBlogPost />
    </>
  );
};

export default HomePage;
