import { Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './FooterComponent.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BrandLogo from '../../../assets/Images/logo-2-transparent.png';
const Footer = () => {
  return (
    <>
      <Container maxWidth className={styles.container}>
        <Grid container>
          <Grid items md={4} xs={12} className={styles.logoGrid}>
            <Image src={BrandLogo} alt="Twostep Logo" width={300} height={100} />
          </Grid>
          <Grid items md={4} xs={12}>
            <Typography variant="body" className={styles.footerTitle}>
              Office
            </Typography>
            <Typography variant="body" className={styles.footerText}>
              Perumahan Sekardangan Indah, Sidoarjo, Jawa Timur
            </Typography>
            <Typography variant="body" className={styles.footerTitle}>
              Phone
            </Typography>
            <Typography variant="body" className={styles.footerText}>
              +62 123 123 1234
            </Typography>
            <Typography variant="body" className={styles.footerText}>
              (031) 123 123
            </Typography>
            <Typography variant="body" className={styles.footerTitle}>
              Email
            </Typography>
            <Typography variant="body" className={styles.footerText}>
              twostep.apparel@email.com
            </Typography>
          </Grid>
          <Grid items md={4} xs={12}>
            <Typography variant="body" className={styles.footerTitle}>
              Social Media
            </Typography>
            <IconButton>
              <InstagramIcon className={styles.icon} />
            </IconButton>
            <IconButton>
              <WhatsAppIcon className={styles.icon} />
            </IconButton>
            <IconButton>
              <FacebookIcon className={styles.icon} />
            </IconButton>
            <IconButton>
              <YouTubeIcon className={styles.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth className={styles.copyrightContainer}>
        <Typography variant="body1" className={styles.copyright}>
          Developed By Twostep Developer Team ©2022 - 2024
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
