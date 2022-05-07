import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './SecondSection.module.css';
import IntroImage from '../../../../assets/Images/product-4.jpg';

const SecondIntro = () => {
  return (
    <Container className={styles.container}>
      <Grid container>
        <Grid items md={6} xs={12} className={styles.gridLeft}>
          <Image src={IntroImage} className={styles.image} width={400} height={400} alt="Twostep Apparel" />
        </Grid>
        <Grid items xs={12} md={6} className={styles.gridRight}>
          <Typography variant="h3" className={styles.title}>
            Providing Best Trending Design
          </Typography>
          <Typography variant="h3" className={styles.subTitle}>
            Kami memberikan design terbaik sesuai dengan trend terkini
          </Typography>
          <Typography variant="body1" className={styles.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure, voluptates laboriosam voluptatum quis saepe ut omnis corporis, ipsa ea autem! Quos animi vitae sapiente eaque vel! Iure, neque fuga?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondIntro;
