import ReactDOM from 'react-dom/client';
import '@twa-dev/sdk';

import { Root } from '@/components/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
