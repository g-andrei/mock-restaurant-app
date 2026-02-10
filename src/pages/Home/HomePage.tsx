import { AboutUs } from './AboutUs';
import { Achievement } from './Achievement';
import { ActiveProcess } from './ActiveProcess';
import { ChoosePick } from './ChoosePick';
import { FoodCategory } from './FoodCategory';
import { LatesBlogPost } from './LatesBlogPost';
import { OurChef } from './OurChef';
import { Testimonials } from './Testimonials';
import { WhyChooseUs } from './WhyChooseUs';

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
