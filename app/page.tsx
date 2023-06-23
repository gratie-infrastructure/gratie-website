"use client"

import React from "react";
import Reward from '@/components/reward';
import Chip from '@/components/chip';
import CoreValue from '@/components/coreValue';
import Working from '@/components/howWeWorks';
import Pricing from '@/components/pricing';
import UseCase from '@/components/useCase';
import ResponsiveAppBar from '@/components/navBar';
// @ts-ignore
import {Element} from "react-scroll";

export default function Home() {
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <Element name="about">
                <Reward/>
                <Chip/>
                <CoreValue/>
                <Working/>
            </Element>
            <Element name="pricing">
                <UseCase/>
            </Element>
            <Element name="community">
                <Pricing/>
            </Element>
        </React.Fragment>
    )
}
