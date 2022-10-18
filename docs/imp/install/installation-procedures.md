# Installing or updating Service Impact

Service Impact is packaged as a Docker image and two ZenPacks:
ZenPacks.zenoss.Impact and ZenPacks.zenoss.ImpactServer. The files are
available from
[delivery.zenoss.io](https://delivery.zenoss.io){.external-link}. The
ZenPacks require customized installation and update procedures,
documented here.

The `Impact` service includes the Service Impact server and
database. The install process adds the service to
the Infrastructure hierarchy of Resource Manager. Its requirements are
minimal, compared to the other services in that hierarchy. The resource
pool you select for the Infrastructure hierarchy easily accommodates the
Impact service.

The `zenimpactstate` service includes the `zenimpactstate`
daemon. The service is included in the Events category of
the Zenoss hierarchy of Resource Manager.

!!! warning
    Once Service Impact is installed, Resource Manager is dependent on it.
    If Service Impact services are unavailable, Resource Manager continues
    to monitor devices, but is unable to perform modeling, or properly
    install or remove ZenPacks.

For optimum results, review installation or update procedures before
starting either process.

!!! tip
    Keep this page open and open new tabs or windows for each procedure.

## Installing Service Impact

1.  [Prepare to install](/imp/install/preparing.html)
2.  [Install Service Impact](/imp/install/installing.html)

## Updating Service Impact

## Updating 5.5.0 CA or 5.5.x to 5.5.5

Before performing this update, [verify that Resource Manager is running normally](/not-migrated.html). The update procedures stop, start, or restart specific services, but
the required starting point is Resource Manager running normally.

To update:

1.  Update
    [DynamicView](https://help.zenoss.com/display/in/Dynamic+Service+View){.external-link}
    to v1.7.1 or a more recent version:
    1.  [Prepare to update the ZenPack](/not-migrated.html)
    2.  [Update the ZenPack](/not-migrated.html)
2.  Update to Service Impact v5.5.5:
    1.  [Prepare to update](/imp/install/preparing.html)
    2.  [Update both ZenPacks](/imp/install/upgrade-zenpacks.html)
3.  [Rebuild the graph database](/imp/install/graph-rebuild-5.5.html)

## Updating 5.4.x to 5.5.5

Before performing this update:

-   [Verify that Resource Manager is running normally](/not-migrated.html). The update procedures stop, start, or restart specific services,
    but the required starting point is Resource Manager running
    normally.

-   [Export service models](/imp/install/exporting-overview.html). Exporting before an update provides a quick restore option if the
    update fails. If necessary, you can uninstall, remove the ZenPack,
    install the working version, and then import the service models.

To update:

1.  Update
    [DynamicView](https://help.zenoss.com/display/in/Dynamic+Service+View){.external-link}
    to v1.7.1 or a more recent version:
    1.  [Prepare to update the ZenPack](/not-migrated.html)
    2.  [Update the ZenPack](/not-migrated.html)
2.  Update to Service Impact v5.5.5:
    1.  [Prepare to update](/imp/install/preparing.html)
    2.  [Update both ZenPacks](/imp/install/upgrade-zenpacks.html)
3.  [Rebuild the graph database](/imp/install/graph-rebuild-5.4.html)

## Updating 5.1.x, 5.2.x, or 5.3.x to 5.5.5

1.  [Prepare to update](/imp/install/upgrade.html)
2.  Update to intermediate version:
    1.  [Download and stage packages](/imp/install/pre-upgrade-download-intermediate.html)
    2.  [Update both ZenPacks](/imp/install/upgrade-zenpacks.html)
3.  [Export all dynamic services](/imp/install/pre-upgrade-export.html)
4.  [Download and stage 5.5.x packages](/imp/install/pre-upgrade-download.html)
5.  [Remove the intermediate version](/imp/install/removing.html)
6.  [Install Service Impact packages](/imp/install/upgrade-install.html)
7.  [Integrate Service Impact and Resource Manager](/imp/install/upgrade-integration.html)


