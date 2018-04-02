import * as dotenv from 'dotenv-safe';
import { logger } from '../src/lib/logger';

dotenv.load({
  allowEmptyValues: true,
  path: './.env.test',
});

console.error = jest.fn((error) => { });

