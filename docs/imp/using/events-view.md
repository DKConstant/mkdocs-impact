# Impact Events view

The Impact Events view shows summary and detail information about events
that are affecting a service.

The following example shows an Impact Events view with key features
highlighted. The last event in the details area is expanded to show the
Impact chain, which is the hierarchy of service model members that are
associated with the event.

@lb[](img/events-view-impact-events.png)

## Event tools

The event tools provide options for manipulating the list of events.

<table>
<tbody>
<tr markdown="1">
<th>Tool</th>
<th>Function</th>
</tr>

<tr markdown="1">
<td>
<p> <img src="img/events-view-event-ack.png" /> </p>
</td>
<td>Acknowledge the selected event.</td>
</tr>
<tr markdown="1">
<td>
<p> <img src="img/events-view-event-close.png" /> </p>
</td>
<td>Close the selected event. The event is moved to the archive.</td>
</tr>
<tr markdown="1">
<td>
<p> <img src="img/events-view-event-nak.png" /> </p>
</td>
<td>Undo acknowledgement of the selected event.</td>
</tr>
<tr markdown="1">
<td>
<p> <img src="img/events-view-event-select-menu.png" /> </p>
</td>
<td><p>Display the event selection menu.</p>
<dl>
<dt> Select All </dt>
<dd>Select all events in the list.
</dd>
<dt> None </dt>
<dd>Deselect all selected events.
</dd>
</dl></td>
</tr>
</tbody>
</table>

## Root-cause analysis (RCA) confidence rankings

The second column of the details list contains the event's confidence
ranking. Service Impact knows which members affect which service models,
and automatically performs RCA when an event occurs. The analysis yields
a probability value that an event is the cause of the service's current
state. Often, multiple events contribute to a state, so the confidence
rankings enable you to quickly focus resources on the most likely cause.


