# Service states

Service Impact uses Resource Manager events to determine the
availability and performance states of services. From highest to lowest,
the availability states are Up, Degraded, At Risk, and Down. Performance
states are Acceptable, Degraded, and Unacceptable.

If there are no negative Resource Manager events for the elements or
dependencies of a service, then the availability state is Up and the
performance state is Acceptable. The following table summarizes the
default policies for negative events:

<table>
<tbody>
<tr markdown="1">
<th>Service state type</th>
<th>Event class</th>
<th>Event severity</th>
<th>Service state</th>
</tr>

<tr markdown="1">
<td rowspan="3">Availability</td>
<td rowspan="3"><code>/Status/*</code><br />
(except <code>/Status/SNMP</code><br />
and <code>/Status/WMI</code>)</td>
<td>Critical</td>
<td>Down</td>
</tr>
<tr markdown="1">
<td>Error</td>
<td>Degraded</td>
</tr>
<tr markdown="1">
<td>Warning</td>
<td>At Risk</td>
</tr>
<tr markdown="1">
<td rowspan="3">Performance</td>
<td rowspan="3"><code>/Perf/*</code></td>
<td>Critical</td>
<td>Unacceptable</td>
</tr>
<tr markdown="1">
<td>Error</td>
<td>Degraded</td>
</tr>
<tr markdown="1">
<td>Warning</td>
<td>Degraded</td>
</tr>
</tbody>
</table>

Note that if an event has been generated for a component of a device
(for example, a specific process), by default this event is not
interpreted by Service Impact for the purposes of the device's
availability or performance. In order for events related to a component
to be interpreted by Service Impact, the component itself must be added
to the service as an element. Administrators can identify the component
that must be added by examining the component field of the event.

For example, assume that LinuxServerA is an element of a service called
Wordpress Blog. If the HTTP process on LinuxServerA quits, a Resource
Manager event is created, but Service Impact will not interpret that
event for the purposes of LinuxServerA's availability or performance
states, and therefore the event will not affect the availability or
performance status of the Wordpress Blog service. If the administrators
of Wordpress Blog decide that the HTTP process on LinuxServerA is indeed
a dependency of the Wordpress Blog service, they must add the HTTP
process on LinuxServerA as an element of the Wordpress Blog service in
Service Impact.

## Viewing service states

You can see the current service state in multiple places. Availability
and performance states are displayed in a Service Health indicator. This
example service is At Risk for availability and Acceptable for
performance.

@lb[](img/service-states-image5.png)

Service Dashboards provide a convenient way to see the status of
multiple services concurrently. To see these dashboards, select Dynamic
Services or any Service Organizer under the Impact tab.

@lb[](img/service-states-image2.png)

## Service Impact events

When a service's availability or performance state changes, Service
Impact sends an event to Resource Manager. The following table
summarizes the default policies for negative state changes:

| Service state type | Event class                                                  | Service state | Event severity |
|--------------------|--------------------------------------------------------------|---------------|----------------|
| Availability       | `/Service/State/Availability`                 | Down          | Critical       |
|                    |                                                              | Degraded      | Error          |
|                    |                                                              | At Risk       | Warning        |
| Performance        | `/Service/State/Performance` | Unacceptable  | Critical       |
|                    |                                                              | Degraded      | Error          |

You can use the [triggers and notifications](/not-migrated.html)
feature of Resource Manager to let someone know that a service has
changed state, to create a service desk ticket, or to generate an
automated response.
