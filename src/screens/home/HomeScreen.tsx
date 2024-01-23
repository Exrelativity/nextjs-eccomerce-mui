import BestSellerProduct from "@/components/BestSellerProduct/BestSellerProduct";
import BestServices from "@/components/BestServices/BestServices";
import DesigningBetterExperience from "@/components/DesigningBetterExperience/DesigningBetterExperience";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import SubFooter from "@/components/Footer/SubFooter";
import HeroSection from "@/components/HeroSection/HeroSection";
import MiniAboutUs from "@/components/MiniAboutUs/MiniAboutUs";
import GuestLayout from "@/layout/GuestLayout";
import { Box } from "@mui/material";

export default function HomeScreen() {

  return (
    <GuestLayout>
      <Box className="relative flex h-auto w-full flex-col items-center justify-center gap-[150px]">
        <HeroSection />
        <BestSellerProduct loadMore={true} />
        <BestServices />
        <FeaturedPost />
        <MiniAboutUs />
        {/* <DesigningBetterExperience /> */}
      </Box>
      <Box className="relative flex h-auto w-full flex-col items-center justify-center gap-[150px] bg-[#FAFAFA]">
        <SubFooter />
      </Box>
    </GuestLayout>
  );
}
