# Graph database update tips

To maintain consistency with the Resource Manager model database, update
the Service Impact graph database when most Resource Manager services
(except Infrastructure services) are stopped. Typically, this requires a
maintenance window. For more information, see [Rebuilding the graph database during 5.4.x upgrades](/imp/install/graph-rebuild-5.4.html).

During a graph update, the `zenimpactgraph` script creates one
worker process for each available CPU core. Each worker requires up to
2GB of main memory. Without it, the host where the update is running may
become unstable.

Processing may appear stuck for tens of minutes as connected objects are
found in the ZODB and their graphs are built. For complex objects, the
build process can take a couple of minutes each. Status is reported
every 200 nodes, so processing can take a long time.

The graph update process proceeds as follows:

1.  Scan the model database for edges.
2.  Add edges to the graph database.
3.  Color the dynamic service tree.
4.  Push the tree to impact-server.

If the process fails during steps 3 or 4, you can resume the process
with the following command:

```sh
zenimpactgraph run -x color -x push
```

To determine whether steps 1 and 2 have completed successfully, look for
the following line in the output:

```sh
0 edges failed to be added to impact graph
```

The output of the graph update process may include a warning similar to
the following example:

```sh
WARNING zen.ImpactGraph: Invalid edge:source node not available for Provider: ZenPacks.zenoss.DynamicView.model.adapters.DeviceOrganizerRelationsProvider; Source: d92e8547-15bf-45b0-8688-ca6f2576593e; Target: 8608ce82-f627-44a2-8bb4-692c8e58a339 - cannot find object for d92e8547-15bf-45b0-8688-ca6f2576593e
```

The typical cause is an inconsistent ZODB catalog. If the missing edges
are important to your service models, the catalog may need to be
rebuilt. For assistance, please contact Zenoss Support.


