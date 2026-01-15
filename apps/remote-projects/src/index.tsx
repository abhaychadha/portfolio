import { createRoot } from 'react-dom/client';
import ProjectsShowcase from './ProjectsShowcase';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<ProjectsShowcase preview />);
}
