import { AboutFragment } from "../fragments/about";
import { BannerFragment } from "../fragments/banner.";
import { OurArrivalsFragment } from "../fragments/our-arrivals";
import { OurPropertiesFragment } from "../fragments/our-properties";
import { OurServicesFragment } from "../fragments/our-services";
import { TheTeamFragment } from "../fragments/the-team";

export default function Home() {
  return (
    <>
     <BannerFragment />
     <AboutFragment />
     <OurPropertiesFragment />
     <OurArrivalsFragment />
     <OurServicesFragment />
     <TheTeamFragment />
    </>
  );
}
