import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LotteryDrinkPage } from './pages/LotteryDrinkPage';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LotteryDrinkPage />
  </StrictMode>,
);
