"use client"


import { ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'
import styles from './page.module.css'
import Container from '@mui/material/Container';
import Reward from '@/components/reward';
import Chip from '@/components/chip';
import CoreValue from '@/components/coreValue';
import Working from '@/components/howWeWorks';
import Pricing from '@/components/pricing';
import UseCase from '@/components/useCase';
import ResponsiveAppBar from '@/components/navBar';
export default function Home() {
  return (<>
    <ResponsiveAppBar/>
    <Container sx={{width:'90%', fontFamily: 'Book antique', pb:18}}>
          <Reward />
          <Chip />
          <CoreValue />
          <Working />
          <UseCase />
          <Pricing/>
        </Container>
        </>
  )
}
