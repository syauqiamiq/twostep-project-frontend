import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import styles from './CardComponent.module.css';
import DefaultLogo from '../../../assets/Images/logo-2-transparent.png';

const CardMarketplace = ({ logo, title, content }) => {
  return (
    <Card className={styles.card} variant="outlined">
      <Box className={styles.box}>
        <Image src={logo == null ? DefaultLogo : logo} width={50} height={50} alt="Marketplace" />
        <Typography variant="h4" className={styles.title}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" className={styles.text}>
        {content}
      </Typography>
    </Card>
  );
};

export default CardMarketplace;
