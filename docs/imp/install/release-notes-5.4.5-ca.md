# Service Impact 5.4.5 CA

!!! warning
    This is a controlled-availability release. If you are interested in
    updating to this release, please contact your Zenoss representative.

 This release introduces a major
new feature, selective synchronization.

In previous releases, the Resource Manager Zope Object Database (ZODB)
and the Service Impact graph database were tightly synchronized, and all
of the relationships among Resource Manager devices and components in
your environment (the "model") were copied to the Service Impact graph
database. In larger environments, when Resource Manager model updates
were underway, the synchronization process reduced performance in
Resource Manager and caused Service Impact to make analyses with
incomplete data.

In this release, you can refine the list of components that are copied
from ZODB to Service Impact. This approach works well in environments
where the critical services defined in Service Impact are a relatively
small part of the Resource Manager model.

Additional highlights of this release:

-   The SERVICES &gt; Metatype Configuration page is the new interface
    for deciding which device components to exclude from Service Impact.
    The page includes counts of the overall number of entities in the
    Resource Manager model and the Service Impact model, updated
    regularly.
-   The export/import/reconciliation process has been re-implemented to
    improve accuracy, reduce reconciliation conflicts, and provide
    progress information.
-   The zenimpactworker process is no longer necessary.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/not-migrated.html)
page.

## Update instructions

The update procedures for this release are unique and a special section
has been created for them:

[Updating Service Impact](/imp/install/installation-procedures.html)

The order of steps in the update procedures is crucial. Please review
the procedures in advance, and follow the instructions carefully.

## Known issues

-   In previous releases, adding a dynamic service was very quick,
    because the Service Impact database included all of the devices and
    components in the ZODB. In this release, Service Impact creates a
    background job to copy the devices and components it requires, which
    can take a few minutes to complete. Scripts that utilize the Service
    Impact JSON API must be updated to wait for the job to complete
    before proceeding.

-   When you change the metatype configuration, the Service Impact
    database is updated to add or remove nodes. Depending on which items
    are changed, processing the changes can take 30-90 minutes in very
    large environments.

-   (IMP-306) The list of allowed characters in the names of dynamic
    services and dynamic service organizers is constrained. For more
    information, see [Preparing to update to 5.5.x](/imp/install/upgrade.html).

-   (IMP-685) During the `zenimpactgraph run --update`
    process, you may receive a message similar to the following:

    ```sh
    WARNING zen.ImpactGraph: Exception while adding impact batch:'NoneType' object has no attribute '__module__', number tried: 9 (a retry number > 5) 
    ```

    Repeat the `zenimpactgraph run -x catclean` and retry the
    `zenimpactgraph run --update` process again.

## Fixed issues

<table>
<tbody>
<tr markdown="1">
<th>ID</th>
<th>Description</th>
</tr>

<tr markdown="1">
<td>IMP-69</td>
<td>The <a href="/imp/using/logical-nodes.html#criteria">criteria for logical nodes</a> must consider the numbering system of source events</td>
</tr>
<tr markdown="1">
<td>IMP-276</td>
<td>The health check for webservice-status fails, which causes additional failures</td>
</tr>
<tr markdown="1">
<td>IMP-306</td>
<td>Special characters not supported in service or organizer names</td>
</tr>
<tr markdown="1">
<td>IMP-399</td>
<td>(IMP-557) Reconciliation does not consider relationships in imported graph </td>
</tr>
<tr markdown="1">
<td>IMP-425</td>
<td>Null pointer exception in Neo4j before state change events stop processing</td>
</tr>
<tr markdown="1">
<td>IMP-431</td>
<td>The zenimpactworker service times out during long graph updates</td>
</tr>
<tr markdown="1">
<td>IMP-432</td>
<td>zenimpactgraph loses connection to zodb after a long graph update</td>
</tr>
<tr markdown="1">
<td>IMP-435</td>
<td>Both device and component production state are sent to the impact server</td>
</tr>
<tr markdown="1">
<td>IMP-438</td>
<td>Exports do not include logical nodes that are not part of a dynamic service</td>
</tr>
<tr markdown="1">
<td> IMP-444 </td>
<td>Inconsistent production states when graph updates are run during a maintenance window</td>
</tr>
<tr markdown="1">
<td> IMP-450 </td>
<td>No retry when certain add node operations fail</td>
</tr>
<tr markdown="1">
<td> IMP-451 </td>
<td>Rollback exception not handled properly</td>
</tr>
<tr markdown="1">
<td> IMP-452 </td>
<td>updateGraph API cannot support large number of interlocking changes in one transaction</td>
</tr>
<tr markdown="1">
<td> IMP-459 </td>
<td>Upgrading the LinuxMonitor ZenPack fails due to large number of model changes at once</td>
</tr>
<tr markdown="1">
<td> IMP-465 </td>
<td>Strange behavior when following dynamic service member link</td>
</tr>
<tr markdown="1">
<td> IMP-475 </td>
<td>Can't add a service or organizer because Submit button is inactive</td>
</tr>
<tr markdown="1">
<td> IMP-476 </td>
<td>The Impact view does not support the dark theme in the Resource Manager browser interface</td>
</tr>
<tr markdown="1">
<td> IMP-482 </td>
<td>In some cases, Impact events are not shown on a service's Events view</td>
</tr>
<tr markdown="1">
<td> IMP-490 </td>
<td>The Impact View does not immediately show updates to the model</td>
</tr>
<tr markdown="1">
<td> IMP-514 </td>
<td>A warning message is displayed constantly during normal use</td>
</tr>
<tr markdown="1">
<td>IMP-543</td>
<td>The upgrade.sh script is not working properly</td>
</tr>
<tr markdown="1">
<td> IMP-552 </td>
<td>Impact does not provide accurate data to the Zenoss call home feature</td>
</tr>
<tr markdown="1">
<td>IMP-559</td>
<td>Loading search results is slow on larger devices with many components</td>
</tr>
<tr markdown="1">
<td> IMP-572 </td>
<td>Value for check-box in Suppress service events is not persistent</td>
</tr>
<tr markdown="1">
<td> IMP-573 </td>
<td>Changing a service name does not propagate everywhere</td>
</tr>
<tr markdown="1">
<td> IMP-585 </td>
<td>Error when attempting to save a policy with empty fields</td>
</tr>
<tr markdown="1">
<td> IMP-586 </td>
<td>Policies are not included in service export/import</td>
</tr>
<tr markdown="1">
<td> IMP-588 </td>
<td>Import process does not include progress information</td>
</tr>
<tr markdown="1">
<td> IMP-589 </td>
<td>Production state changes during maintenance windows are not reflected in Impact</td>
</tr>
<tr markdown="1">
<td> IMP-603 </td>
<td>Events that match logical node criteria aren't processed</td>
</tr>
<tr markdown="1">
<td> IMP-616 </td>
<td>Font color in Impact portlet makes text difficult to read</td>
</tr>
<tr markdown="1">
<td>IMP-625</td>
<td>Removing Impact components takes many seconds with no UI notification</td>
</tr>
<tr markdown="1">
<td>IMP-651</td>
<td>Indexing is slow</td>
</tr>
<tr markdown="1">
<td>IMP-654</td>
<td>Unable to click an object in the Impact View and go to the device in Resource Manager</td>
</tr>
<tr markdown="1">
<td>IMP-648,<br />
IMP-657</td>
<td>Graph update takes a long time on a large system</td>
</tr>
<tr markdown="1">
<td>IMP-666</td>
<td>Warning message <code>Could not adapt</code> during graph update</td>
</tr>
<tr markdown="1">
<td>IMP-671</td>
<td>ZenPack update fails due to Impact state changes</td>
</tr>
<tr markdown="1">
<td> IMP-672 </td>
<td>Restoring omitted components is not working</td>
</tr>
<tr markdown="1">
<td>IMP-673</td>
<td>Unable to create file for edges due to missing parent directory</td>
</tr>
</tbody>
</table>


