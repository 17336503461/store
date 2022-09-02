import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { PostData } from '@/types/global';
const { Random } = Mock;
import { GetParams } from '@/types/global';
import qs from 'query-string';

const data = Mock.mock({
  'list|55': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      'number|2-3': /[0-9]/,
      'name|4-8': /[A-Z]/,
      'contentType|1': ['img', 'horizontalVideo', 'verticalVideo'],
      'count|2-3': /[0-9]/,
      'status|1': ['online', 'offline'],
      'filterType|1': ['artificial', 'rules'],
      'createdTime': Random.datetime(),
    },
  ],
});

setupMock({
  setup() {
    Mock.mock(
      new RegExp('/api/public-opinion-analysis'),
      (params: PostData) => {
        const { quota = 'visitors' } = JSON.parse(params.body);
        if (['visitors', 'comment'].includes(quota)) {
          const year = new Date().getFullYear();
          const getLineData = (name: number) => {
            return new Array(12).fill(0).map((_item, index) => ({
              x: `${index + 1}月`,
              y: Mock.Random.natural(0, 100),
              name: String(name),
            }));
          };
          return successResponseWrap({
            count: 5670,
            growth: 206.32,
            chartData: [...getLineData(year), ...getLineData(year - 1)],
          });
        }
        if (['published'].includes(quota)) {
          const year = new Date().getFullYear();
          const getLineData = (name: number) => {
            return new Array(12).fill(0).map((_item, index) => ({
              x: `${index + 1}日`,
              y: Mock.Random.natural(20, 100),
              name: String(name),
            }));
          };
          return successResponseWrap({
            count: 5670,
            growth: 206.32,
            chartData: [...getLineData(year)],
          });
        }
        return successResponseWrap({
          count: 5670,
          growth: 206.32,
          chartData: [
            // itemStyle for demo
            { name: '文本类', value: 25, itemStyle: { color: '#8D4EDA' } },
            { name: '图文类', value: 35, itemStyle: { color: '#165DFF' } },
            { name: '视频类', value: 40, itemStyle: { color: '#00B2FF' } },
          ],
        });
      }
    );

    Mock.mock(new RegExp('/api/content-period-analysis'), () => {
      const getLineData = (name: string) => {
        return {
          name,
          value: new Array(12).fill(0).map(() => Mock.Random.natural(30, 90)),
        };
      };
      return successResponseWrap({
        xAxis: new Array(12).fill(0).map((_item, index) => `${index * 2}:00`),
        data: [
          getLineData('纯文本'),
          getLineData('图文类'),
          getLineData('视频类'),
        ],
      });
    });

    Mock.mock(new RegExp('/api/content-publish'), () => {
      const generateLineData = (name: string) => {
        const result = {
          name,
          x: [] as string[],
          y: [] as number[],
        };
        new Array(12).fill(0).forEach((_item, index) => {
          result.x.push(`${index * 2}:00`);
          result.y.push(Mock.Random.natural(1000, 3000));
        });
        return result;
      };
      return successResponseWrap([
        generateLineData('纯文本'),
        generateLineData('图文类'),
        generateLineData('视频类'),
      ]);
    });

    Mock.mock(new RegExp('/api/popular-author/list'), () => {
      const generateData = () => {
        const list = new Array(7).fill(0).map((_item, index) => ({
          ranking: index + 1,
          author: Mock.mock('@ctitle(5)'),
          contentCount: Mock.mock(/[0-9]{4}/),
          clickCount: Mock.mock(/[0-9]{4}/),
        }));
        return {
          list,
        };
      };
      return successResponseWrap({
        ...generateData(),
      });
    });

    Mock.mock(new RegExp('/api/list/policy'), (params: GetParams) => {
      const { current = 1, pageSize = 10 } = qs.parseUrl(params.url).query;
      const p = current as number;
      const ps = pageSize as number;
      return successResponseWrap({
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55,
      });
    });
  },
});
