## Sink Connector

---

## Build Your Own

_see Source Connector slides_

---

```java
public abstract class SinkTask implements Task {
  public abstract void put(Collection<SinkRecord> records);
  public abstract void flush(Map<TopicPartition, Long> offsets);

  public void open(Collection<TopicPartition> partitions) {}
  public void close(Collection<TopicPartition> partitions) {}
}
```

<aside class="notes">
where the source task pulls, the sinktask pushes <br/>
lifecycle methods are shared with sourcetask <br/>
put() does not need to ensure the data has been fully written to the destination system before returning. In fact, in many cases some internal buffering will be useful so an entire batch of records can be sent at once <br/>
SinkRecord is essentially the same as SourceRecord <br/>
internally, tasks are using consumer/consumer groups
</aside>
