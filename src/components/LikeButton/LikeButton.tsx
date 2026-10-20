'use client';

import { useSyncExternalStore } from 'react';
import styles from './LikeButton.module.css';

const STORAGE_KEY = 'likedArticles';
const listeners = new Set<() => void>();

const readRaw = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? '[]';
  } catch {
    return '[]';
  }
};

const parseLiked = (raw: string): string[] => {
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

// The native `storage` event fires only in other tabs, so same-tab updates notify manually.
const subscribe = (onChange: () => void) => {
  listeners.add(onChange);
  window.addEventListener('storage', onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener('storage', onChange);
  };
};

const toggleLiked = (name: string) => {
  const liked = parseLiked(readRaw());
  const next = liked.includes(name)
    ? liked.filter((item) => item !== name)
    : [...liked, name];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    return;
  }
  listeners.forEach((listener) => listener());
};

const LikeButton = ({ articleName }: { articleName: string }) => {
  const raw = useSyncExternalStore(subscribe, readRaw, () => '[]');

  const liked = parseLiked(raw).includes(articleName);

  return (
    <button
      type="button"
      className={styles.button}
      aria-pressed={liked}
      onClick={() => toggleLiked(articleName)}
    >
      <span aria-hidden="true">{liked ? '♥' : '♡'}</span> Like
    </button>
  );
};

export default LikeButton;
