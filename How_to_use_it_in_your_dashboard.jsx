// # this is a React component that demonstrates how to use the GrokBot component in your dashboard. It manages the state of the bot based on your app's logic and renders it accordingly.

import { GrokBot } from './GrokBot';

// Example usage
function Dashboard() {
  const [botState, setBotState] = useState<'idle' | 'thinking' | 'loading' | 'excited'>('idle');

  // Example: switch state based on your app logic
  useEffect(() => {
    if (isLoading) setBotState('loading');
    else if (isThinking) setBotState('thinking');
    else if (hasGoodNews) setBotState('excited');
    else setBotState('idle');
  }, [isLoading, isThinking, hasGoodNews]);

  return (
    <div className="flex items-center gap-4">
      <GrokBot
        state={botState}
        size={64}
        color="#111"
        eyeColor="#fff"
        followCursor={true}
      />
      <span>Grok is {botState}…</span>
    </div>
  );
}