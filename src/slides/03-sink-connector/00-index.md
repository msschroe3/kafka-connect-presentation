## Sink Connectors

---

```java
public abstract class SinkTask implements Task {
  ... [ lifecycle methods omitted ] ...

  public void initialize(SinkTaskContext context) {
      this.context = context;
  }

  public abstract void put(Collection<SinkRecord> records);
  public abstract void flush(Map<TopicPartition, Long> offsets);

  public void open(Collection<TopicPartition> partitions) {}
  public void close(Collection<TopicPartition> partitions) {}
}
```
