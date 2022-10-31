# Service Impact 5.5.3

This is a bug fix release; there are no new features.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/imp/install/release-notes.html)
page.

## Update instructions

This release supports the following, separate update paths:

-   Update from 5.1.x, 5.2.x, or 5.3.x to 5.5.3
-   Update from 5.4.x to 5.5.3
-   Update from 5.5.0 CA or 5.5.x to 5.5.3

All update paths start at [the same page](/imp/install/installation-procedures.html).

!!! warning
    The order of steps in the update procedures is crucial. Please review
    the procedures in advance, and follow the instructions carefully.

## Known issues

-   When you change the metatype configuration, the Service Impact
    database is updated to add or remove nodes. Depending on which items
    are changed, processing the changes can take 30-90 minutes in very
    large environments.
-   (IMP-740) During a graph update, the `zenimpactgraph`
    script creates one worker process for each available CPU core. Each
    worker requires up to 2GB of main memory. Without it, the host where
    the update is running may become unstable.
-   After installing one or more ZenPacks that have updated relationship
    providers, rebuild the graph. For more information, see
    [Rebuilding the graph database during 5.5.x upgrades](/imp/install/upgrade/55x/graph-rebuild-5.5.html).
-   (IMP-836) After a metatype configuration change,  related service events are not
    cleared. To work around the issue, remove and then re-add the
    dynamic service.

##  Fixed issues

| ID        | Description                                                                                          |
|-----------|------------------------------------------------------------------------------------------------------|
|  IMP-901  | Processing updates from large vSphere environments takes hours, then fails due to timeouts           |
|  IMP-900  | Service is shown as healthy when it should be shown as degraded                                      |
|  IMP-888  | Production state changes in Resource Manager block Service Impact's API due to blocked Jetty threads |
