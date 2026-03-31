/**
 * Turing Robot API module.
 * Sends messages to Turing chatbot and returns JSONP response.
 * @author wsscat
 */

import * as http from 'http';
import * as querystring from 'querystring';

/** Query parameters for the Turing API. */
interface TuringParams {
  message: string;
  callback: string;
}

/**
 * Send a message to the Turing chatbot API and respond with JSONP.
 * @param param - Query parameters from the URL
 * @param callback - Callback for programmatic usage (non-HTTP)
 * @param response - HTTP response object for server usage
 */
export function turingApi(
  param: TuringParams,
  callback: (data: string) => void,
  response?: http.ServerResponse,
): void {
  const data = {
    key: 'c75ba576f50ddaa5fd2a87615d144ecf',
    info: param.message,
  };

  http.request({
    hostname: 'www.tuling123.com',
    port: 80,
    path: `/openapi/api?${querystring.stringify(data)}`,
    method: 'GET',
  }, (request) => {
    request.setEncoding('utf8');
    let str = '';
    request.on('data', (data: string) => {
      str += data;
    });
    request.on('end', () => {
      if (response) {
        response.end(`${param.callback}(${str})`);
      } else {
        callback(str);
      }
    });
  }).on('error', (e: Error) => {
    console.error(`Problem with request: ${e.message}`);
  }).end();
}