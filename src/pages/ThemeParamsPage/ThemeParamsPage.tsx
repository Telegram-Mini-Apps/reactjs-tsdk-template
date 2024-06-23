import WebApp from '@twa-dev/sdk';
import type { FC } from 'react';
import { List } from '@telegram-apps/telegram-ui';

import { DisplayData } from '@/components/DisplayData/DisplayData.tsx';

export const ThemeParamsPage: FC = () => {
  return (
    <List>
      <DisplayData
        rows={
          Object
            .entries(WebApp.themeParams)
            .map(([title, value]) => ({ title, value }))
        }
      />
    </List>
  );
};
