import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import IntroImage from '../../../../assets/Images/product-7.jpg';
import styles from './FirstSection.module.css';

const FirstIntro = () => {
  return (
    <Container className={styles.container}>
      <Grid container>
        <Grid items md={6} xs={12} className={styles.gridLeft}>
          <Image src={IntroImage} className={styles.image} width={400} height={400} alt="Twostep Apparel" />
        </Grid>
        <Grid items md={6} xs={12} className={styles.gridRight}>
          <Typography variant="h3" className={styles.title}>
            Best Quality Product
          </Typography>
          <Typography variant="h3" className={styles.subTitle}>
            Produk kami dibuat dengan bahan kualitas terbaik
          </Typography>
          <Typography variant="body1" className={styles.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure, voluptates laboriosam voluptatum quis saepe ut omnis corporis, ipsa ea autem! Quos animi vitae sapiente eaque vel! Iure, neque fuga?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FirstIntro;
