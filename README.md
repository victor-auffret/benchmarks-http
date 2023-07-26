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
* __Node:__ `v20.5.0`
* __Run:__ Wed Jul 26 2023 20:40:32 GMT+0200 (heure d’été d’Europe centrale)
* __Method:__ `autocannon -c 50 -d 20 -p 5 localhost:3000` (two rounds; one to warm-up, one to measure)

|             | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--         | --:     | --:    | :-:        | --:          | --:           |
| uWebSockets | 20.20.0 | ✗      | 68816.0    | 3.18         | 10.30         |
| polkadot    | 1.0.0   | ✗      | 54353.6    | 4.08         | 9.69          |
| fastify     | 4.15.0  | ✓      | 51080.0    | 4.39         | 9.16          |
| polka       | 0.5.2   | ✓      | 49139.2    | 4.59         | 8.76          |
| 0http       | 3.5.1   | ✓      | 48499.2    | 4.79         | 8.65          |
| vanilla     | 1.0.0   | ✗      | 47640.0    | 4.76         | 8.68          |
| rayo        | 1.4.0   | ✓      | 47102.4    | 4.81         | 8.40          |
| pure-http   | 3.3.1   | ✗      | 16263.2    | 14.81        | 3.55          |
| express     | 4.18.2  | ✓      | 10914.4    | 22.39        | 1.95          |
