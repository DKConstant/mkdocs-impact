# Manually rebuilding an impact graph

Service Impact graphs are regularly updated automatically, and rarely
require manual actions. However, in unusual circumstances, the Service
Impact data store might have inconsistencies that require a manual
rebuild of an impact graph to rediscover children of the problem node.

For best performance, do not manually rebuild an impact graph during a
time that overlaps a maintenance window. The graph update and
maintenance window operations use the same target graph database.
Performing them together might lengthen the time to complete the
operations, and might result in transaction rollbacks.

Entities that are defined in the
Resource Manager object database (ZODB) are normally
synchronized and defined in the
Service Impact Neo4j datastore. You can manually check
consistency between the ZODB and the datastore, and if necessary,
rebuild a subset of or all service models.

The manual options allow more granular repair to just a subset of entity
impact graphs for all service contexts in which the entity participates.
This approach can be much faster than repairing all information.
However, if a large amount of entity information must be repaired,
rebuilding all with one action might be faster.

To check for consistency between the Resource Manager ZODB and the
Service Impact Neo4j datastore, run the following command:

```sh
zenimpactgraph run --check
```

To update impact dependencies for one or more entity nodes for all
service contexts in which they participate, run the following command

```sh
zenimpactgraph run --update --sb <node_name | node_id | node_path> --direction <0 | 1> --depth <0 | integer>
```

Commands for zenimpactgraph run update are as follows:

-   Specify the subgraph by name, path, or ID.

    ```sh
    --sb=SUBGRAPH, --sub-graph=SUBGRAPH
    ```

    The node path must start with /zport/dmd/ . Separate multiple nodes
    with a comma.

-   Specify the maximum traversal depth level of the graph to update.

    ```sh
    --depth=DEPTH
    ```

    If no depth is specified, the default is to update all nodes in the
    graph, regardless of the number. Specify an integer value to limit
    the maximum levels of the graph to be updated.

-   Specify the traversal direction:

    ```sh
    --direction=DIRECTION
    ```

    0 indicates INCOMING, to discover or rediscover all nodes that
    impact the target node. If no direction is specified, the default is
    INCOMING.

    1 indicates OUTGOING, to discover or rediscover all nodes that the
    target node impacts.

1.   Log in to the Control Center master host as a user with serviced
    CLI privileges.
2.   Connect to the zenimpactstate container as the zenoss user.

    ```sh
    serviced service attach zenimpactstate su - zenoss
    ```

3.   Run zenimpactgraph run update with commands.

    See the following examples.

## Example 1: Basic command using defaults

The following commands use default values to discover nodes for the
target node. The target node is specified by name,
vxchnge-vcenter-02.zenoss.loc. All nodes that impact the target node
(incoming direction) and all nodes that the target node impacts
(outgoing direction) are discovered. All levels of the graph will be
updated (unlimited depth).

```sh
zenimpactgraph run --update --sb vxchnge-vcnter-02.zenoss.loc
```

## Example 2: Discover outgoing nodes for the named subgraph

The following commands discover all nodes that are impacted by the
target node, vxchnge-vcenter-02.zenoss.loc. All levels of the graph will
be updated (unlimited depth).

```sh
zenimpactgraph run --update --sb vxchnge-vcenter-02.zenoss.loc --direction 1
```

## Example 3: Discover incoming nodes for the named subgraph

The following commands discover all nodes that impact the target node,
vSphere, and limit the updates to a depth of 10 levels of the graph.

```sh
zenimpactgraph run --update --sb vSphere --direction 0 --depth 10
```

## Example 4: Discover outgoing nodes for the subgraph at the specified path

The following commands discover all nodes that are impacted by the
target node, vxchnge-vcenter-02.zenoss.loc, and limit the updates to a
depth of 100 levels of the graph.

```sh
zenimpactgraph run --update --sb /zport/dmd/Devices/vSphere/devices/vSphere --direction 1  --depth 100
```

## Example 5: Discover incoming nodes for the subgraph at the specified path

The following commands discover all nodes that impact the target node,
vxchnge-vcenter-02.zenoss.loc. All levels of the graph will be updated
(unlimited depth).

```sh
zenimpactgraph run -update --sb /zport/dmd/Devices/vSphere/devices/vxchnge-vcenter-02.zenoss.loc --direction 0 
```


