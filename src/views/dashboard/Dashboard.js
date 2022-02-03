import React, { Fragment } from "react";
import CorouselDarkVarient from "../../components/DarkVarient";

import bloodImg from "../../assets/images/blood.jpg";
import aboutImg from "../../assets/images/about.jpg";
import researchImg from "../../assets/images/research.jpg";

const coursels = [
  {
    name: "Blood",
    imageUrl: bloodImg,
    description:
      "Your blood is precious, and your donations are truly life-saving. From how donating works to who needs it, there's so much to know about blood. ",
  },
  {
    name: "About Us",
    imageUrl: aboutImg,
    description:
      "Our purpose is life-giving blood, plasma, transplantation and biological products for world-leading health outcomes. Through the power of humanity.",
  },
  {
    name: "Research",
    imageUrl: researchImg,
    description:
      "World-leading research guides everything we do, from bringing donors through the doors, to making our life-saving products fit for purpose and among the safest in the world.",
  },
];

const Dashboard = () => {
  return (
    <Fragment>
      Game ch
      <CorouselDarkVarient items={coursels} />
    </Fragment>
  );
};

export default Dashboard;
