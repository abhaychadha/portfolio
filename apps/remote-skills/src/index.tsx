import { createRoot } from 'react-dom/client';
import RemoteSkills from './RemoteSkills';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<RemoteSkills preview />);
}
