import { List } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import type { FC } from 'react';

import { DisplayData } from '@/components/DisplayData/DisplayData.tsx';

export const LaunchParamsPage: FC = () => {
  return (
    <List>
      <DisplayData
        rows={[
          { title: 'tgWebAppPlatform', value: WebApp.platform },
          { title: 'tgWebAppVersion', value: WebApp.version },
          { title: 'tgWebAppStartParam', value: WebApp.initDataUnsafe?.start_param },
          { title: 'tgWebAppData', type: 'link', value: '/init-data' },
          { title: 'tgWebAppThemeParams', type: 'link', value: '/theme-params' },
        ]}
      />
    </List>
  );
};
