import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import '@radix-ui/themes/styles.css';
import './index.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Theme>
        <App />
    </Theme>
);
