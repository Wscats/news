/**
 * News module test entry point.
 * Tests the newsApi and turingApi modules programmatically.
 */

import { newsApi } from './newsApi';
import { turingApi } from './turingApi';

// Test news API
newsApi(
  { channelId: '5572a109b3cdc86cf39001db', page: 1, callback: 'JSON_CALLBACK' },
  (data: string) => {
	console.log('News data:', data);
  },
);

// Test Turing chatbot API
turingApi(
  { message: '你好', callback: 'JSON_CALLBACK' },
  (data: string) => {
	console.log('Turing data:', data);
  },
);