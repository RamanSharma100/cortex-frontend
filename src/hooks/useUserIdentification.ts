'use client';

import {
  identifyUser,
  setUserProperties,
  resetUser,
} from '@/services/analytics';

export function useUserIdentification() {
  return {
    identifyUser,
    setUserProperties,
    resetUser,
  };
}
