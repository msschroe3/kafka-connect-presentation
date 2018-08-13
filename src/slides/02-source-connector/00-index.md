## Source Connectors

---

### Open Source

* Variety of connectors on Github
* Confluent Hub: https://www.confluent.io/hub/

---

### Creating a Connector

Every connector boils down to a few pieces

* ConfigDef
* Connector
* Task

---

```
ConfigDef()
        .define(
                SPOTIFY_USERNAME_CONF,
                ConfigDef.Type.STRING,
                "anonymous",
                ConfigDef.Importance.HIGH,
                "Spotify username."
        )
        .define(
                SPOTIFY_OAUTH_ACCESS_TOKEN_CONF,
                ConfigDef.Type.PASSWORD,
                "",
                ConfigDef.Importance.MEDIUM,
                "Access token for Spotify API."
        )

// name, type, default, documentation, group info, order, width, display name
```

---

```
SourceConnector
- start(Map config)
- stop()
- version(): String
- taskClass(): Class<Task>
- taskConfigs(int maxTasks): List<Map>
- config(): ConfigDef
```

---

```
SourceTask
- start(Map config)
- stop()
- version(): String
- poll(): List<SourceRecord>
```

---

# Schema

---

```
SchemaBuilder.struct()
      .name(LOGICAL_NAME)
      .version(VERSION)
      .field(PLAYED_AT_FIELD, Timestamp.SCHEMA)
      .field(TRACK_FIELD, Track.SCHEMA)
      .field(CONTEXT_FIELD, Context.SCHEMA)
      .build()
```

---

### Extension functions FTW!

```
fun PlayHistoryModel.toStruct(): Struct = Struct(PlayHistory.SCHEMA)
        .put(PlayHistory.PLAYED_AT_FIELD, this.playedAt)
        .put(PlayHistory.TRACK_FIELD, this.track.toStruct())
        .put(PlayHistory.CONTEXT_FIELD, this.context?.toStruct())
```
