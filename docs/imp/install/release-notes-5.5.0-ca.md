# Service Impact 5.5.0 CA

!!! warning
    This is a controlled-availability release. If you are interested in
    updating to this release, please contact your Zenoss representative.

This release improves overall performance, better handles commit
conflicts, simplifies relationship building, and reduces the time needed
to change production states. To support this release, many ZenPacks were
updated, to improve performance in defining Service Impact
relationships, and reduce inconsistencies by consolidating edge
providers with the DynamicView ZenPack.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/imp/install/release-notes.html)
page.

## Update instructions

This release supports the following, separate update paths:

-   Update from 5.1.x, 5.2.x, or 5.3.x to 5.5.0
-   Update from 5.4.x to 5.5.0

Both update paths start at [the same page](/imp/install/installation-procedures.html).

!!! warning
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
-   (IMP-740) During a graph update, the `zenimpactgraph`
    script creates one worker process for each available CPU core. Each
    worker requires up to 2GB of main memory. Without it, the host where
    the update is running may become unstable.
-   (ZEN-31884) Occasionally, graph update fails with traceback
    `ModelCatalogError: Exception performing search`. The
    workaround is to re-run the update.
-   After installing one or more ZenPacks that have updated relationship
    providers, rebuild the graph. For more information, see
    [Rebuilding the graph database during 5.5.x upgrades](/imp/install/upgrade/55x/graph-rebuild-5.5.html).

## Fixed issues

| ID      | Description                                                                                                                |
|---------|----------------------------------------------------------------------------------------------------------------------------|
| IMP-124 | Exporting an empty dynamic service organizer results in a traceback.                                                       |
| IMP-405 | When debug logging is enabled, the log files consume all available space within 10 minutes and crash the Impact container. |
| IMP-412 | Impact diagrams show the wrong content in the icon type field.                                                             |
| IMP-425 | State change events stop processing, and a null pointer exception is thrown.                                               |
| IMP-430 | Performance during graph update deteriorates under certain conditions.                                                     |
| IMP-452 | Graph updates cannot handle a large number of interlocking changes at the same time.                                       |
| IMP-454 | The upgrade script does not properly handle the starting version information.                                              |
| IMP-688 | Solr timeouts during graph updates.                                                                                        |
| IMP-699 | The upgrade to 5.4.x silently removes leading spaces from dynamic service names, which changes their sort order.           |
| IMP-711 | The relationship edges built during graph update are not cached, which slows overall update performance.                   |
| IMP-716 | Building relationships is slower in 5.4.x than in 5.3.x.                                                                   |
| IMP-720 | Impact state is calculated using event tags, not elements or subelements.                                                  |
| IMP-724 | Adding a device organizer generates asymmetric relationships.                                                              |
| IMP-727 | Model changes can cause lengthy graph updates.                                                                             |
| IMP-731 | Relationships among Cisco UCS devices are missing (Impact 5.4.x installed).                                                |
| IMP-734 | Model change events that do not affect any dynamic services are being sent to Impact for processing.                       |
| IMP-740 | Graph update consumes more memory until memory is exhausted and the container crashes.                                     |
