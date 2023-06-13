# benchmarks-http

http benchmark

I use [fastify-benchmarks](https://github.com/fastify/benchmarks) and i add [uNetworking/uWebSockets.js](https://github.com/uNetworking/uWebSockets.js) to this bench

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ win32 x64 | 12 vCPUs | 15.9GB Mem
* __Node:__ `v20.3.0`
* __Run:__ Tue Jun 13 2023 11:49:36 GMT+0200 (heure d’été d’Europe centrale)
* __Method:__ `autocannon -c 50 -d 20 -p 5 localhost:3000` (two rounds; one to warm-up, one to measure)

|             | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--         | --:     | --:    | :-:        | --:          | --:           |
| uWebSockets | 20.20.0 | ✗      | 65852.8    | 3.32         | 9.86          |
| polkadot    | 1.0.0   | ✗      | 55368.0    | 4.03         | 9.87          |
| fastify     | 4.15.0  | ✓      | 51110.4    | 4.42         | 9.16          |
| polka       | 0.5.2   | ✓      | 49168.0    | 4.58         | 8.77          |
| rayo        | 1.4.0   | ✓      | 48752.0    | 4.62         | 8.69          |
| vanilla     | 1.0.0   | ✗      | 48747.2    | 4.66         | 8.88          |
| 0http       | 3.5.1   | ✓      | 48657.6    | 4.66         | 8.68          |
| pure-http   | 3.3.1   | ✗      | 16331.8    | 14.72        | 3.57          |
| express     | 4.18.2  | ✓      | 10783.6    | 22.69        | 1.92          |
