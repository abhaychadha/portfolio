import { createRoot } from 'react-dom/client';
import RemoteAbout from './RemoteAbout';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<RemoteAbout preview />);
}
