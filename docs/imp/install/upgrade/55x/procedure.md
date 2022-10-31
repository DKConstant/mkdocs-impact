# Updating 5.5.0 CA or 5.5.x to 5.5.5

Before performing this update, [verify that Resource Manager is running normally](/not-migrated.html). The update procedures stop, start, or restart specific services, but
the required starting point is Resource Manager running normally.

To update:

1.  Update
    [DynamicView](https://help.zenoss.com/display/in/Dynamic+Service+View){.external-link}
    to v1.7.1 or a more recent version:
    1.  [Prepare to update the ZenPack](/not-migrated.html)
    2.  [Update the ZenPack](/not-migrated.html)
2.  Update to Service Impact v5.5.5:
    1.  [Prepare to update](/imp/install/upgrade/55x/preparing.html)
    2.  [Update both ZenPacks](/imp/install/upgrade/55x/upgrade-zenpacks.html)
3.  [Rebuild the graph database](/imp/install/upgrade/55x/graph-rebuild-5.5.html)
