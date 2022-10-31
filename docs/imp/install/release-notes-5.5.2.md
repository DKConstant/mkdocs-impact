# Service Impact 5.5.2

The primary focus of this release is improving the graph update process.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/imp/install/release-notes.html)
page.

## Update instructions

This release supports the following, separate update paths:

-   Update from 5.1.x, 5.2.x, or 5.3.x to 5.5.2
-   Update from 5.4.x, 5.5.0 CA or 5.5.1 to 5.5.2

Both update paths start at [the same page](/imp/install/installation-procedures.html).

!!! warning
    The order of steps in the update procedures is crucial. Please review
    the procedures in advance, and follow the instructions carefully.

## Known issues

-   Before release 5.4.5, adding a dynamic service was very quick,
    because the Service Impact database included all of the devices and
    components in the ZODB. Now, Service Impact creates a background job
    to copy the devices and components it requires, which can take a few
    minutes to complete. Scripts that utilize the Service Impact JSON
    API must be updated to wait for the job to complete before
    proceeding.
-   When you change the metatype configuration, the Service Impact
    database is updated to add or remove nodes. Depending on which items
    are changed, processing the changes can take 30-90 minutes in very
    large environments.
-   (IMP-740) During a graph update, the `zenimpactgraph`
    script creates one worker process for each available CPU core. Each
    worker requires up to 2GB of main memory. Without it, the host where
    the update is running may become unstable.
-   (ZEN-31885) Occasionally, graph update fails with traceback
    `ModelCatalogError: Exception performing search`. The
    workaround is to re-run the update.
-   After installing one or more ZenPacks that have updated relationship
    providers, rebuild the graph. For more information, see
    [Rebuilding the graph database during 5.5.x upgrades](/imp/install/upgrade/55x/graph-rebuild-5.5.html).
-   (IMP-836) After a metatype configuration change,  related service events are not
    cleared. To work around the issue, remove and then re-add the
    dynamic service.

##  Fixed issues

<table>
<tbody>
<tr markdown="1">
<th>ID</th>
<th>Description</th>
</tr>

<tr markdown="1">
<td> IMP-872,<br />
IMP-871,<br />
IMP-870,<br />
IMP-831 </td>
<td> Graph updates cannot be run while Collection Zone is running and can cause inconsistencies or remove nodes that should not be removed.   </td>
</tr>
<tr markdown="1">
<td> IMP-874,<br />
IMP-833 </td>
<td> The fields of the Custom State Policy dialog can be populated with invalid contents. </td>
</tr>
<tr markdown="1">
<td> IMP-850 </td>
<td><p>Links from Impact Dashboard Portlets to Impact Service do not work properly.</p></td>
</tr>
<tr markdown="1">
<td>IMP-849</td>
<td>Links to Dynamic Services on the Service Impact Overview page do not work.</td>
</tr>
<tr markdown="1">
<td>IMP-838</td>
<td>Changing the metatype configuration to exclude Cisco Temperature Sensor components does not remove all the components.</td>
</tr>
<tr markdown="1">
<td>IMP-837</td>
<td>Displaying the graph of a service with many components in Impact view results in an error.</td>
</tr>
<tr markdown="1">
<td>IMP-832</td>
<td>It is possible to save a Custom State Provider with empty fields.</td>
</tr>
</tbody>
</table>
