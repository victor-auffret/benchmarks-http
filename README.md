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
* __Node:__ `v19.8.1`
* __Run:__ Sat Mar 25 2023 20:11:55 GMT+0100 (heure normale d’Europe centrale)
* __Method:__ `autocannon -c 50 -d 20 -p 5 localhost:3000` (two rounds; one to warm-up, one to measure)

|             | Version | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--         | --:     | --:    | :-:        | --:          | --:           |
| uWebSockets | 20.20.0 | ✗      | 66068.8    | 3.36         | 9.89          |
| polkadot    | 1.0.0   | ✗      | 50974.4    | 4.37         | 9.09          |
| fastify     | 4.15.0  | ✓      | 48584.0    | 4.68         | 8.71          |
| vanilla     | 1.0.0   | ✗      | 47585.6    | 4.74         | 8.67          |
| rayo        | 1.4.0   | ✓      | 46161.6    | 4.95         | 8.23          |
| 0http       | 3.5.1   | ✓      | 46140.8    | 5.07         | 8.23          |
| polka       | 0.5.2   | ✓      | 45688.0    | 5.01         | 8.15          |
| pure-http   | 3.3.1   | ✗      | 15396.0    | 15.71        | 3.36          |
| express     | 4.18.2  | ✓      | 11106.0    | 22.03        | 1.98          |
