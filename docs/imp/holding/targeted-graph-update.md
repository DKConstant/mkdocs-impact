# Targeted graph update

Occasionally, Service Impact receives information about an unknown
component or device that is needed for an event. When this occurs, a
targeted graph update is performed.

To rapidly update its knowledge of an unknown entity and its impact
model, Service Impact targets modeling of only that entity's subgraphs.
To allow the modeling workflow to complete, a "placeholder" is
immediately created for the unknown entity. Impact graphs are quickly
refreshed without delay to event processing.

The targeted graph update allows mission-critical event and service
event monitoring and alerting to resume with minimal downtime. During
the restore and rebuild of the Neo4j graph database, service event
processing resumes quickly, regardless of the size and number of service
models.

You can tune targeted graph updates by changing configuration
parameters.

Targeted graph update occurs automatically and requires no user
intervention. However, in unusual circumstances, Zenoss Support might
recommend the following actions:

-   Adjusting configuration parameters to better tune performance.
-   Repairing information by manually rebuilding impact models with
    missing entities and impact relationships.

The following sections provide additional information:

-   [Tuning targeted graph update](/imp/holding/targeted-graph-update2.html)
-   [Manually rebuilding an impact graph](/imp/holding/targeted-graph-update3.html)

</p>


