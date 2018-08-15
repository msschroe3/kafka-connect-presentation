## Packaging a Connector

* Create an uber jar
* Place the jar onto server's plugin path

[Building a Kafka Connector with Gradle](https://objectpartners.com/2018/07/12/building-a-kafka-connector-with-gradle)

<aside class="notes">
Create an uber JAR that contains all of the connector’s JAR files and other resource files. No directory internal structure is necessary.

To install, a user simply places the connector’s uber JAR into one of the directories listed in Kafka Connect’s plugin path.

</aside>

---

## Deployment Options

Standalone vs Distributed

<aside class="notes">
  <ol>
    <li>
      Standalone mode: This is similar to how Logstash or Apache Flume are deployed. If you need to get logs from a specific machine to Kafka, you run Kafka Connect with a file connector or spooling directory connector on the machine and it reads the files and send events to Kafka.
    </li>
    <li>
      Cluster mode: This is the recommended deployment mode for Kafka Connect in production. You install Kafka Connect and its Connectors on several machines. They discover each other, with Kafka brokers serving as the synchronization layer, and they automatically load-balance and failover work between them. To start and stop Connectors anywhere on the cluster, you connect to any Kafka Connect node (known as “worker”) and use a REST API to start, stop, pause, resume, and configure Connectors. No matter which node you use to start a connector, Kafka Connect will determine the optimal level of parallelism for the Connector and start parallel tasks to pull or push data as needed on the least loaded available worker nodes.
    </li>
  </ol>
</aside>
