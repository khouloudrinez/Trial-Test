import { Suspense } from 'react';
import TransitionClient from './TransitionClient';

export default function TransitionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransitionClient />
    </Suspense>
  );
}
