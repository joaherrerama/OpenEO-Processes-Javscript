const OEProcessGraph = require('../../src/processgraph/processgraph');

const testSample = [
  118.27296, 204.25503, 212.10663, 230.25095, 80.54336, 235.14836, 155.7913,
  221.19719, 110.14106, 40.38973, 75.6123, 213.85845, 116.03147, 187.13213,
  248.57372, 147.17481, 218.31493, 44.67931, 72.57314, 210.69626, 205.9332,
  207.49778, 184.43759, 236.56073, 68.6963, 131.13863, 53.27227, 182.571,
  159.18912, 204.82936, 244.44716, 142.74689, 39.16767, 235.50871, 140.4137,
  95.54936, 245.32683, 227.74626, 46.02271, 33.26719, 18.5906, 182.42781,
  53.82573, 144.83387, 240.1377, 50.21911, 149.68784, 188.39401, 96.92923,
  112.54878, 109.48831, 12.0925, 168.35428, 200.16229, 189.41962, 139.24593,
  5.02666, 45.64177, 111.88692, 97.6578, 125.72877, 237.26467, 203.33796,
  141.63079, 133.28631, 77.55914, 106.57565, 107.34392, 37.97721, 143.23317,
  171.31934, 180.33606, 245.27175, 84.66159, 166.50608, 23.69196, 89.57879,
  26.29093, 206.78527, 161.52928, 49.52038, 152.19409, 47.47351, 184.8048,
  75.5857, 60.72712, 240.15484, 143.18756, 85.67561, 15.56787, 12.07114,
  66.3378, 0.66047, 195.91757, 213.04585, 106.82425, 68.47638, 113.93222,0];

/** Using ProcessGraph */
const jsonProcess = {
  "process_graph": {
    "min": {
      "process_id": "min",
      "arguments": {
        "data": testSample
      },
      "description": "Max test",
      "result": true
    }
  }
};

const Utils = require('../../src/processgraph/utils');
const processGraph = JSON.parse(JSON.stringify(jsonProcess));
const registry = Utils.getRegistry('./src/processes');
const pg = new OEProcessGraph(processGraph, registry);
async function exc(pg) {
    const exce = await pg.execute();
    return exce.computedResult;
}

test('Min value in an typearray (Image Format)', async () => {
  await expect( await exc(pg)).toEqual(0);
});
