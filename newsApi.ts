/**
 * News API module.
 * Fetches news data from Baidu API and returns JSONP response.
 * @author wsscat
 */

import * as http from 'http';

/** Query parameters for the news API. */
interface NewsParams {
  channelId: string;
  page: number;
  callback: string;
}

/**
 * Fetch news from Baidu API and respond with JSONP.
 * @param param - Query parameters from the URL
 * @param callback - Callback for programmatic usage (non-HTTP)
 * @param response - HTTP response object for server usage
 */
export function newsApi(
  param: NewsParams,
  callback: (data: string) => void,
  response?: http.ServerResponse,
): void {
  http.request({
    hostname: 'apis.baidu.com',
    port: 80,
    path: `/showapi_open_bus/channel_news/search_news?channelId=${param.channelId}&title=%E4%B8%8A%E5%B8%82&page=${param.page}&needContent=0&needHtml=0`,
    method: 'GET',
    headers: {
      apikey: '0aea38d1a7c4443f2f00adc86c4c3e72',
    },
  }, (request) => {
    request.setEncoding('utf-8');
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
  }).end();
}