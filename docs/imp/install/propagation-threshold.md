# Production state propagation threshold

Service Impact relies on device production states to decide whether to
propagate availability and performance states within a service graph.

The following table characterizes the device production states that are
available in Resource Manager.

|                  |                    |                      |
|:-----------------|:-------------------|:---------------------|
| Production state | Devices monitored? | Appear on dashboard? |
| Production       | Yes                | Yes                  |
| Pre-Production   | Yes                | No                   |
| Test             | Yes                | No                   |
| Maintenance      | Yes                | Might appear         |
| Decommissioned   | No                 | No                   |

Devices are displayed in the [ Impact View ](/imp/using/impact-view.html)
as determined by production state and production state propagation
threshold. Each threshold setting indicates which states are considered
to be "in production." For example:

-   The threshold value Production indicates that only production-level
    devices are to be considered "in production."
-   The threshold value Decommissioned indicates that devices in all
    production states are to be considered "in production."

In the Impact View, background color indicates the node's production
state. In the following table,

-   FALSE indicates that the node is displayed with a gray background,
    and its state is not propagated upwards to other members.
-   TRUE indicates that the node is displayed with a white background,
    and interacts with other members as "in production."

<table>
<tbody>
<tr markdown="1">
<th>Device production state</th>
<th><p>Threshold=<br />
Production</p></th>
<th><p>Threshold=<br />
Pre-Production</p></th>
<th><p>Threshold=<br />
Test</p></th>
<th><p>Threshold=<br />
Maintenance</p></th>
<th><p>Threshold=<br />
Decommissioned</p></th>
</tr>

<tr markdown="1">
<td>Decommissioned</td>
<td>FALSE</td>
<td>FALSE</td>
<td>FALSE</td>
<td>FALSE</td>
<td>TRUE</td>
</tr>
<tr markdown="1">
<td>Maintenance</td>
<td>FALSE</td>
<td>FALSE</td>
<td>FALSE</td>
<td>TRUE</td>
<td>TRUE</td>
</tr>
<tr markdown="1">
<td>Test</td>
<td>FALSE</td>
<td>FALSE</td>
<td>TRUE</td>
<td>TRUE</td>
<td>TRUE</td>
</tr>
<tr markdown="1">
<td>Pre-Production</td>
<td>FALSE</td>
<td>TRUE</td>
<td>TRUE</td>
<td>TRUE</td>
<td>TRUE</td>
</tr>
<tr markdown="1">
<td>Production</td>
<td>TRUE</td>
<td>TRUE</td>
<td>TRUE</td>
<td>TRUE</td>
<td>TRUE</td>
</tr>
</tbody>
</table>

For more information about production states, see [Production states and maintenance windows](/not-migrated.html).

## Configuring the production state propagation threshold

The default value of the Service Impact production state propagation
threshold is Production. You can select a different production state for
the threshold.

!!! warning
    Zenoss recommends changing this threshold only during installation.
    Changes to this this value are not retroactive; the updated value will
    be considered when evaluating new, incoming events.

1.   Log in to the Resource Manager browser interface as a user with
    ZenManager or Manager privileges.
2.   Select the ADVANCED tab, and then click the Impact link in the left
    column.

    @lb[](img/propagation-threshold2-advanced-settings.png)

3.   From the Production State Propagation Threshold list, select a new
    production state, and then click Save.

    Devices are evaluated against the new threshold at the next
    modelling interval. To update all devices before the next modelling
    interval, perform a graph update.
