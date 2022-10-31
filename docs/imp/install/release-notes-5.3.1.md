# Service Impact 5.3.1

This release features the enhancements that were introduced in version
5.3.0:

-   Faster graph updates and state propagation in environments with many
    nodes.
-   A new right-click menu option enables you to center the Impact View
    on a node that you select. The graph shifts to display the selected
    node in the center, but does not change the zoom level. The new
    Selected Node field enables you to select from a list of nodes that
    match the partial text string that you specify. Enhanced filtering
    enables you to find and view nodes by availability and performance
    states and partial name string.

The following table identifies the files to download for each supported
installation or upgrade scenario.

<table>
<tbody>
<tr markdown="1">
<th>Resource Manager</th>
<th>Required files</th>
</tr>

<tr markdown="1">
<td rowspan="3"><p>6.x</p>
<p>5.3.x</p>
<p>5.2.x</p>
<br />
<br />
</td>
<td><code>ZenPacks.zenoss.ImpactServer-5.3.1.0.0-py2.7.egg</code></td>
</tr>
<tr markdown="1">
<td><code>ZenPacks.zenoss.Impact-5.3.1.0.0-py2.7.egg</code></td>
</tr>
<tr markdown="1">
<td><code>install-zenoss-impact_5.3_5.3.1.0.0.run</code></td>
</tr>
</tbody>
</table>

Download files from
[delivery.zenoss.io](https://delivery.zenoss.io){.external-link}. Use
your [Zenoss Support](https://support.zenoss.com/hc/en-us){.external-link}
credentials to log in.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/imp/install/release-notes.html)
page.

## Fixed issues

|         |                                                                                                                |
|---------|----------------------------------------------------------------------------------------------------------------|
| ID      | Description                                                                                                    |
| IMP-39  | GraphML file that was exported from an older version of Service Impact cannot be imported into latest version. |
| IMP-284 | Implicit bug in setting event state during propagation process.                                                |
| IMP-285 | Improve performance and responsiveness under high workload environments.                                       |
| IMP-290 | Do batching of production state updates in Service Impact server.                                              |
| IMP-307 | In a large database, cannot remove nonexistent nodes because requests time out.                                |
| IMP-309 | Impact state propagation takes too long on devices with thousands of components.                               |
| IMP-316 | Multithreaded implementation of related event processing.                                                      |
| IMP-320 | Unable to delete top level logical node organizer when it contains children.                                   |
| IMP-321 | A state node accumulates best state events.                                                                    |
| IMP-322 | Import of a GraphML file associates incorrect devices to components.                                           |
| IMP-323 | Need to repair Neo4j objects with large number of non-relevant events.                                         |
| IMP-349 | Refactor handling Neo4j resources in multi-threaded environment.                                               |
| IMP-351 | When updating a graph, errors occurr for some ZenPack objects.                                                 |
| IMP-357 | State propagation process takes an unacceptable amount of time on devices with thousands of components.        |
| IMP-369 |  graphreset (update) does not prune orphaned nodes.                                                            |

## Considerations and workarounds

### Reidentifying devices

Resource Manager provides the ability to reidentify devices. The
reidentification process deletes and re-adds the device with a new ID
and GUID. When the GUID is changed, the device is removed from that
particular Service Impact service. If you reidentify a device, you must
manually re-add the device to the service model.

### Impact graph update best practices

Graph updates and maintenance window operations use the same target
graph database. Concurrent access of shared data increases time required
to complete the operations, risk of transaction rollbacks and deadlocks,
and risk of inconsistent state updates to the graph database. For best
performance when updating an impact graph,

-   Do not manually rebuild an impact graph during a time that overlaps
    a maintenance window or another graph update operation.
-   Do not import dynamic service models while a graph update operation
    is in progress.

For more information, see [Manually rebuilding an impact graph](/imp/holding/targeted-graph-update3.html).

### Upgrade considerations

When you initially upgrade from Service Impact 5.2.3 to 5.3.1, the new
version of the product removes accumulated event history that is no
longer needed. A temporary performance slowdown might occur while nodes
are read.

### Limitations

After Service Impact is installed, Service Impact and Resource Manager
are interdependent. However, Resource Manager issues affect Service
Impact more frequently than Service Impact issues affect Resource
Manager. For this reason, the list of known issues for a given Service
Impact release might include items that manifest in Service Impact but
are not caused by Service Impact software. Such items are noted in the
list of known issues.
