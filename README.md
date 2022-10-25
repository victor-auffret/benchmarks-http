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
* __Node:__ `v18.11.0`
* __Run:__ Tue Oct 25 2022 14:40:12 GMT+0200 (heure d’été d’Europe centrale)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|             | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--         | --:     | --:    | :-:        | --:     | --:           |
| uWebSockets | 20.14.0 | ✗      | 61956.8    | 3.36    | 7.09          |
| polkadot    | 1.0.0   | ✗      | 53148.8    | 4.27    | 9.48          |
| fastify     | 4.9.2   | ✓      | 50633.6    | 4.47    | 9.08          |
| 0http       | 3.4.1   | ✓      | 48483.2    | 4.74    | 8.65          |
| vanilla     | 1.0.0   | ✗      | 48150.4    | 4.59    | 8.77          |
| rayo        | 1.3.10  | ✓      | 47966.4    | 4.73    | 8.55          |
| polka       | 0.5.2   | ✓      | 47660.8    | 4.77    | 8.50          |
| pure-http   | 3.3.1   | ✗      | 15702.4    | 15.37   | 3.43          |
| express     | 4.18.2  | ✓      | 11711.2    | 20.86   | 2.09          |
