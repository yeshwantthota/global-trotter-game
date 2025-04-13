'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ChallengeFriend from '@/components/ChallengeFriend';
import { api } from '@/services/api';

export default function ChallengePage() {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get('challengeId');
  const [challengerInfo, setChallengerInfo] = useState<{ username: string; score: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallengerInfo = async () => {
      if (challengeId) {
        try {
          const challenge = await api.getChallenge(challengeId);
          console.log(challenge);
          setChallengerInfo({
            username: challenge.username,
            score: challenge.score
          });
        } catch (error) {
          console.error('Error fetching challenge:', error);
        }
      }
      setLoading(false);
    };

    fetchChallengerInfo();
  }, [challengeId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <ChallengeFriend
      challengerUsername={challengerInfo?.username}
      challengerScore={challengerInfo?.score}
    />
  );
} 