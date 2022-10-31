# Removing Service Impact

Use this procedure to remove Service Impact from a Resource Manager 5.x
or 6.x deployment.

1.   Log in to the Control Center master host as a user with Control
    Center CLI privileges.
2.   Create a snapshot:

    ```sh
    serviced service snapshot Zenoss.resmgr
    ```

    On completion, the `serviced`
    command returns the ID of the new snapshot. If this procedure fails,
    you can restore the snapshot created in this step. For more
    information about restoring a snapshot, see [Creating snapshots and rolling back](/not-migrated.html).

3.   Stop the Zenoss services, and then verify that the services are
    stopped.
    1.   Stop Resource Manager.

        ```sh
        serviced service stop Zenoss.resmgr/Zenoss
        ```

    2.   Wait until all services are stopped.

        Use the `watch`
        command to monitor the status.

        ```sh
        watch serviced service status Zenoss.resmgr/Zenoss
        ```

4.   Start the services that are required for the removal of Service
    Impact.
    1.  Start the zeneventserver and Zope services.

        ```sh
        serviced service start zeneventserver zope
        ```

    2.  Wait until the services are started.
        Use the `watch` command to monitor the
        status.

        ```sh
        watch serviced service status zeneventserver zope
        ```

5.   Remove the ZenPacks.zenoss.Impact ZenPack.

    Removing the ZenPack also removes the
    `zenimpactstate` service.

    ```sh
    serviced service run zope zenpack-manager uninstall ZenPacks.zenoss.Impact
    ```

6.   Stop and remove the Infrastructure/Impact service, and then remove
    the ZenPacks.zenoss.ImpactServer ZenPack.
    1.   Stop the Infrastructure/Impact service, then wait 10 seconds.

        ```sh
        serviced service stop Infrastructure/Impact
        ```

    2.   Remove the Infrastructure/Impact service.

        ```sh
        serviced service remove Infrastructure/Impact
        ```

    3.   Remove the ZenPack.

        ```sh
        serviced service run zope zenpack-manager uninstall ZenPacks.zenoss.ImpactServer
        ```

7.   Restart all Zenoss services:

    !!! warning
        If you are updating to version 5.5.x, skip this step.

    ```sh
    serviced service restart Zenoss.resmgr/Zenoss
    ```


