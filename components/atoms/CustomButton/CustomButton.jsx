import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ type, title, styling }) => {
  if (type == 'outlined') {
    return (
      <div>
        <Button className={styling} variant="outlined">
          {title}
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button className={styling} variant="contained">
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
