import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CardMarketplace from '../../../atoms/CardMarketplace/CardMarketplace';
import styles from './PointMarketplace.module.css';
import TokopediaLogo from '../../../../assets/Images/tokopedia.png';
import ShopeeLogo from '../../../../assets/Images/shopee.png';
import InstagramLogo from '../../../../assets/Images/instagram.png';
const Marketplace = () => {
  return (
    <Container maxWidth className={styles.container}>
      <Typography className={styles.sectionTitle} variant="h1">
        Availables On Marketplace
      </Typography>
      <Grid container>
        <Grid items className={styles.grid} md={4} xs={12}>
          <CardMarketplace title="Shopee" logo={ShopeeLogo} content="Temukan produk kami di marketplace Shopee, dan nikmati promo dan diskon menarik dari toko kami." />
        </Grid>
        <Grid items className={styles.grid} md={4} xs={12}>
          <CardMarketplace title="Instagram" logo={InstagramLogo} content="Temukan produk kami di Offical Akun Instagram Twostep Apparel, dan nikmati promo dan diskon menarik dari toko kami." />
        </Grid>
        <Grid items className={styles.grid} md={4} xs={12}>
          <CardMarketplace title="Tokopedia" logo={TokopediaLogo} content="Temukan produk kami di marketplace Tokopedia, dan nikmati promo dan diskon menarik dari toko kami." />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Marketplace;
