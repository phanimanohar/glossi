import LayoutOne from "../../components/Layout/LayoutOne";
import SliderTwo from "../../components/Sections/Slider/SliderTwo";
import sliderData from "../../data/slider/sliderOne.json";
import IntroductionOne from "../../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../../data/introduction/introductionOne.json";
import ProductSlideOne from "../../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../../data/products.json";
import TestimonialOne from "../../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../../data/testimonial/data.json";
import CTAOne from "../../components/Sections/CallToAction/CTAOne";

export default function homepage1() {
  return (
    <LayoutOne title="Homepage 1" data={sliderData} className="-style-1">
      <SliderTwo data={sliderData} className="-style-1" showDots />
      <IntroductionOne data={introductionOneData} />
      <ProductSlideOne data={productSlideOneData} />
      <TestimonialOne data={testimonialOneData} />

      <CTAOne />
    </LayoutOne>
  );
}
