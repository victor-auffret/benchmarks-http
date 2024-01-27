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
* __Node:__ `v20.11.0`
* __Run:__ Sat Jan 27 2024 14:12:10 GMT+0100 (heure normale d’Europe centrale)
* __Method:__ `autocannon -c 50 -d 20 -p 5 localhost:3000` (two rounds; one to warm-up, one to measure)

|             | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--         | --:     | --:    | :-:        | --:          | --:           |
| uWebSockets | 20.41.0 | ✗      | 80380.8    | 2.41         | 12.03         |
| fastify     | 4.25.2  | ✓      | 63379.2    | 3.48         | 11.36         |
| polkadot    | 1.0.0   | ✗      | 63046.4    | 3.53         | 11.24         |
| 0http       | 3.5.2   | ✓      | 61955.2    | 3.46         | 11.05         |
| vanilla     | 1.0.0   | ✗      | 61544.0    | 3.54         | 11.21         |
| polka       | 0.5.2   | ✓      | 61099.2    | 3.61         | 10.90         |
| rayo        | 1.4.6   | ✓      | 60161.6    | 3.70         | 10.73         |
| pure-http   | 3.3.4   | ✗      | 17255.4    | 13.95        | 3.77          |
| express     | 4.18.2  | ✓      | 11317.6    | 21.60        | 2.02          |
