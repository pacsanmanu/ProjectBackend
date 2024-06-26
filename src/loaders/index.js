import expressLoader from './express-loader.js';
import mongoDBLoader from './mongodb-loader.js';
import config from '../config.js';

export default function init(server) {
  expressLoader(server);
  mongoDBLoader(config.database);
}
