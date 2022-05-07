import { Box, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import HeroImage from '../../../../assets/Images/logo-1-transparent.png';
import CustomButton from '../../../atoms/CustomButton/CustomButton';

const Hero = () => {
  return (
    <Container>
      <Grid container className={styles.wrapper}>
        <Grid items xs={12} md={6}>
          <Box className={styles.heroImageWrapper}>
            <Image src={HeroImage} width={500} height={500} alt="TwoStep Apparel" />
          </Box>
        </Grid>
        <Grid items xs={12} md={6}>
          <Box className={styles.heroContent}>
            <Box className={styles.textWrapper}>
              <Typography variant="h1" component="div" className={styles.heroTitle}>
                TWOSTEP APPAREL
              </Typography>
              <Typography variant="body1" component="div" className={styles.subTitle} textAlign="justify">
                Twostep Apparel is a brand automotive fashion founded in 2019. Twostep Apparel specializes in automotive design and products include T-shirt. we have 4 series design for our concept limited edition to bring feel executive
                product. We deliver same passion as automotive enthusiast
              </Typography>
            </Box>
            <Box className={styles.btnWrapper}>
              <CustomButton title="Order Now" styling={styles.btnOrder} />
              <CustomButton title="Contact Us" styling={styles.btnContact} type="outlined" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
