# Updating 5.4.x to 5.5.5

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
    1.  [Prepare to update](/imp/install/upgrade/54x/preparing.html)
    2.  [Update both ZenPacks](/imp/install/upgrade/54x/upgrade-zenpacks.html)
3.  [Rebuild the graph database](/imp/install/upgrade/54x/graph-rebuild-5.4.html)
