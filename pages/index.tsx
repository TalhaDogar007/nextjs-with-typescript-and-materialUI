import * as React from "react";
import HomeCard from "../src/components/home/home";
import MasterLayout from "../src/layout/masterLayout";

export default function Index() {
  return (
    <MasterLayout>
      <HomeCard />
    </MasterLayout>
  );
}
