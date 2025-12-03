import StatusBoard from './StatusBoard';
export default function App() {
  return <StatusBoard src="/status.json" title="ethereal status" refreshMs={60000} />;
}
