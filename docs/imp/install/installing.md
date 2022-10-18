# Installing Service Impact

Before performing this procedure, complete the steps in [Preparing to install or update Service Impact](/imp/install/preparing.html).

1.   Log in to the Control Center master host as a user with Control
    Center CLI privileges.

2.   Create a snapshot:

    ```sh
    serviced service snapshot Zenoss.resmgr
    ```

    On completion, the `serviced` command
    returns the ID of the new snapshot. If the installation of a ZenPack
    fails, you can restore the snapshot created in this step. For more
    information about restoring a snapshot, see [Creating snapshots and rolling back](/not-migrated.html).

3.  Stop the Zenoss services, and then verify that the services are
    stopped.
    1.  Stop Resource Manager.

        ```sh
        serviced service stop Zenoss.resmgr/Zenoss
        ```

    2.  Wait until all services are stopped.
        Use the `watch` command to monitor the status.

        ```sh
        watch serviced service status Zenoss.resmgr/Zenoss
        ```

4.   Start the zeneventserver service.
    1.   Start zeneventserver.

        ```sh
        serviced service start zeneventserver
        ```

    2.  Wait until the service is started.
        Use the `watch` command to monitor the status.

        ```sh
        watch serviced service start zeneventserver
        ```

5.   Install the ZenPacks.zenoss.ImpactServer ZenPack.
    1.   Change directory to the directory in which the Service Impact
        ZenPack egg files are located.

        For example, the
        `/tmp/impact` directory:

        ```sh
        cd /tmp/impact
        ```

    2.   Install the ZenPack.

        Replace *VERSION* with the ZenPack version number:

        ```sh
        serviced service run zope zenpack-manager install ZenPacks.zenoss.ImpactServer-VERSION-py2.7.egg
        ```

6.   Start the Infrastructure/Impact service, and then verify that it
    started.
    1.   Start the Impact service.

        ```sh
        serviced service start Infrastructure/Impact
        ```

    2.   Verify that the service is started.

        ```sh
        watch serviced service status Infrastructure/Impact
        ```

7.  Install the ZenPacks.zenoss.Impact ZenPack.
    Replace *VERSION* with the ZenPack version number:

    ```sh
    serviced service run zope zenpack-manager install ZenPacks.zenoss.Impact-VERSION-py2.7.egg
    ```

8.  Identify the delegate hosts where Resource Manager is running.

    ```sh
    serviced host list --show-fields=Pool,Name
    ```

    The name of the resource pool where Resource Manager is running is
    not standardized.

9.  Log in to a delegate host, and then start a Zope container.

    !!! warning
        The following steps may take minutes to hours to complete, based on
        database size and the speed of the underlying delegate host.  Zenoss
        recommends running the remaining steps of this procedure through a
        terminal multiplexer like screen or tmux.

    1.  Log in to a delegate host in the Resource Manager pool as root
        or as a user with `serviced` CLI privileges.

    2.  Start a Zope container on the host.

        ```sh
        serviced service shell zope
        ```

    3.  In the container, log in as user zenoss.

        ```sh
        su - zenoss
        ```

10. Update the catalog and then initialize the server.
    1.  Update the catalog.

        ```sh
        zenimpactgraph run -x catclean
        ```

    2.  Create the Service Impact graph in ZODB and Neo4j.

        ```sh
        zenimpactgraph run --update
        ```

        Processing may appear stuck for tens of minutes as connected
        objects are found in the ZODB. This is normal.

    3.  Exit the zenoss user account.

        ```sh
        exit
        ```

    4.  Exit the Zope container.

        ```sh
        exit
        ```

11. Restart all Zenoss
     services:

    ```sh
    serviced service restart Zenoss.resmgr/Zenoss
    ```


