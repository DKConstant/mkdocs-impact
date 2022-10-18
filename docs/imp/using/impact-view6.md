# Impact view 6

Use a custom state provider to add state triggers (rules) for custom
device and component service model members. You can customize Resource
Manager to gather state data from events that belong to other classes.
For example, you can customize state providers to define state triggers
for members that are monitored through customized classes that the
ZenVMware and CiscoUCS ZenPacks provide.

@lb[](img/impact-view6-policy-dialog-custom-state.png)

<table>
<tbody>
<tr markdown="1">
<th>Field</th>
<th>Description</th>
</tr>

<tr markdown="1">
<td> Event Class </td>
<td>Choose the Resource Manager event class to monitor. You can configure one event class per device.</td>
</tr>
<tr markdown="1">
<td>Event severity fields (Critical, Error,<br />
Warning, Info, Debug, Clear)</td>
<td>Choose the state for this member if the event severity is observed. Possible states are UP, ATRISK, DEGRADED, DOWN.</td>
</tr>
<tr markdown="1">
<td> Apply to </td>
<td>Choose the nodes (components) to which the state override applies.
<ul>
<li> This node only: The selected component on the specific device.</li>
<li> Nodes of the same type on the same device: The same component type on the same device. If a component is associated with another device, it is not affected in that context.</li>
<li> Nodes of the same type in the same device class: The same component type on any device with the same device class.</li>
<li> Nodes of the same type system-wide: The same component type, regardless of the device or the device class.</li>
</ul></td>
</tr>
</tbody>
</table>


