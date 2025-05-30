import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes cache by default

export async function getOrSet<T>(key: string, fn: () => Promise<T>, ttl?: number): Promise<T> {
  const cached = cache.get<T>(key);
  if (cached) return cached;
  
  const data = await fn();
  cache.set(key, data, ttl);
  return data;
}
