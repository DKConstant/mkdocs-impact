# Service Impact 5.5.1

 This release improves overall
performance, better handles commit conflicts, simplifies relationship
building, and reduces the time needed to change production states. To
support this release, many ZenPacks were updated, to improve performance
in defining Service Impact relationships, and reduce inconsistencies by
consolidating edge providers with the DynamicView ZenPack.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/imp/install/release-notes.html)
page.

## Update instructions

This release supports the following, separate update paths:

-   Update from 5.1.x, 5.2.x, or 5.3.x to 5.5.1
-   Update from 5.4.x or 5.5.0 CA to 5.5.1

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
-   (ZEN-31885) Occasionally, graph update fails with traceback
    `ModelCatalogError: Exception performing search`. The
    workaround is to re-run the update.
-   After installing one or more ZenPacks that have updated relationship
    providers, rebuild the graph. For more information, see
    [Rebuilding the graph database during 5.5.x upgrades](/imp/install/upgrade/55x/graph-rebuild-5.5.html).
-   (IMP-832) Currently, it is possible to save a custom state provider
    with no conditions. When a custom state provider without a clear
    mapping is part of a model, events sent to a dynamic service do not
    get cleared. The workaround is to always provide a clear mapping.
-   (IMP-836) After a metatype configuration change,  related service events are not
    cleared. To work around the issue, remove and then re-add the
    dynamic service.

## Fixed issues

|         |                                                                                                                                                                    |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID      | Description                                                                                                                                                        |
| IMP-308 | During a lengthy graph update, additional update requests aren't properly queued                                                                                   |
| IMP-420 |  Dynamic Services Tree View does not load correctly                                                                     |
| IMP-652 | Deleting an organizer does not delete portlets displaying the organizer (see [Adding an Impact Services portlet](/imp/install/adding-an-impact-services-portlet.html)) |
| IMP-659 | Impact server is blocked after upgrade from previous version                                                                                                       |
| IMP-718 | The graph is inconsistent when related nodes are added serially                                                                                                    |
| IMP-741 |  Searching for events of class /Status/ returns no results                                                              |
| IMP-747 | Unable to add a logical node to a dynamic service                                                                                                                  |
| IMP-771 | Unable to export logical nodes                                                                                                                                     |
| IMP-776 | Events detected by a logical node don't change dynamic service state                                                                                               |
| IMP-778 | Unable to add components or component groups to a dynamic service                                                                                                  |
| IMP-800 |  Unable to display Dynamic Services                                                                                     |
| IMP-806 |  Pie charts have incorrect counts                                                                                       |
| IMP-813 |  Some dynamic service states are inconsistent with RCA results                                                          |
