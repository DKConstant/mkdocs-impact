# Updating only ZenPacks.zenoss.Impact

Before performing this procedure, complete prerequisites listed in
[Installing or updating Service Impact](/imp/install/installation-procedures.html).

This procedure describes how to update only the ZenPacks.zenoss.Impact
ZenPack.

1.   Log in to the Control Center master host as a user with Control
    Center CLI privileges.
2.   Create a snapshot:

    ```sh
    serviced service snapshot Zenoss.resmgr
    ```

    On completion, the serviced command returns the ID of the new
    snapshot. If the installation of a ZenPack fails, you can restore
    the snapshot created in this step. For more information about
    restoring a snapshot, see [Creating snapshots and rolling back](/not-migrated.html).

3.   Stop the zenimpactstate service, and then verify that it stopped.
    1.   Stop the zenimpactstate service.

        ```sh
        serviced service stop zenimpactstate
        ```

    2.   Verify that the service is stopped.

        ```sh
        watch serviced service status zenimpactstate
        ```

4.   Install the ZenPacks.zenoss.Impact ZenPack

    Replace Version with the ZenPack version number:

    ```sh
    serviced service run zope zenpack-manager install ZenPacks.zenoss.Impact-Version-py2.7.egg
    ```

5.   Start the zenimpactstate service, and then verify that it stopped.
    1.   Start the zenimpactstate service.

        ```sh
        serviced service start zenimpactstate
        ```

    2.   Verify that the service is started.

        ```sh
        watch serviced service status zenimpactstate
        ```


