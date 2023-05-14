import { MotiView } from 'moti'

export default function App() {
  return (
    <MotiView
      from={{ scale: 0 }}
      animate={{ scale: [0, 100] }}
    />
  );
}
