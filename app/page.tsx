import { createCustomerWithCustomId, getCustomers } from './server/functions/customers';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import GridPattern from "@/components/magicui/grid-pattern";


export const runtime = 'edge';

import * as React from "react";

import { SlideNavTabs } from "../components/Header";
import Footer from '@/components/Footer';
import { Navbar } from '@/components/ui/floating-navbar';
import Hero from '@/components/Hero';
import DotPattern from '@/components/magicui/dot-pattern';
import { Showcases } from '../components/ShowCase';
import Services from '../components/Services';
import Quality from '@/components/Quality';
import RotatingIcons from '@/components/RotatingIcons';
import Cta from '@/components/Cta';



export default async function Home() {
  'use server';

  // either use server actions
  const customers = await getCustomers();
  return (
    <>
      <Navbar />

      <div className="relative flex-col flex w-full items-center  justify-center overflow-hidden rounded-lg  bg-background md:p-20 p-6 ">
        <Hero />

        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={2}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
            "inset-x-0 inset-y-[-50%] h-[400%] skew-y-12",
          )}
        />
      </div>


      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-b-0  bg-background md:p-20 p-6  ">
        <Showcases />
        <GridPattern
          width={80}
          height={80}
          x={-1}
          y={-1}
          strokeDasharray={"8"}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
            "inset-x-0 inset-y-[-50%] h-[300%] ",
          )}
        />

      </div>

      <Services />
      <Quality />

      {/* <RotatingIcons /> */}

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg  border-b-0 bg-background p-20 ">
        <RotatingIcons />

        <DotPattern
          width={20}
          height={20}
          cx={2}
          cy={2}
          cr={2}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
            "inset-x-0 inset-y-[-50%] h-[300%] ",

          )}
        />
      </div>


      <div className="relative flex h-full w-full mt-10 items-center justify-center overflow-hidden rounded-lg  border-b-0 bg-background md:p-20 p-6  ">
        <Cta />
        <GridPattern
          width={80}
          height={80}
          x={-1}
          y={-1}
          strokeDasharray={"8"}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
            "inset-x-0 inset-y-[-50%] h-[300%] ",
          )}
        />

      </div>




      <Footer />
    </>

  );
}