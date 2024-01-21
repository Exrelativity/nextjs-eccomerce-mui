import BestSellerProduct from "@/components/BestSellerProduct/BestSellerProduct";
import BestServices from "@/components/BestServices/BestServices";
import DesigningBetterExperience from "@/components/DesigningBetterExperience/DesigningBetterExperience";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import HeroSection from "@/components/HeroSection/HeroSection";
import MiniAboutUs from "@/components/MiniAboutUs/MiniAboutUs";
import GuestLayout from "@/layout/GuestLayout";

export default function HomeScreen() {

  return (
    <GuestLayout>
      <HeroSection />
      <BestSellerProduct />
      <BestServices />
      <FeaturedPost />
      <MiniAboutUs />
      <DesigningBetterExperience />
    </GuestLayout>
  );
}
