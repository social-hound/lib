import {youtube as YouTubeClient} from '@googleapis/youtube';

if (!process.env.YOUTUBE_KEY) {
  throw new Error('Missing YOUTUBE_KEY environment variable!');
}

export const youtube = YouTubeClient({
  version: 'v3',
  auth: process.env.YOUTUBE_KEY,
});
