import { useState, ChangeEvent, FC } from 'react';
import { GetServerSideProps } from 'next';

import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import Cookie from 'js-cookie';

import { Layout } from 'components/layout';

interface Props {
  theme: string;
}

const ThemeChange:FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    console.log(selected);
    
    Cookie.set('theme', selected);
    setCurrentTheme(selected);
  };

  return (
    <Layout title="Change Theme">
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup row value={currentTheme} onChange={onChangeTheme}>
              <FormControlLabel
                value="ligth"
                control={<Radio />}
                label="Ligth"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme } = req.cookies;
  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark',
    },
  };
};

export default ThemeChange;
