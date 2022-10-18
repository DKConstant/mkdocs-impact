# Rebuilding the graph database during 5.4.x upgrades

Use this procedure after updating Service Impact **from version 5.4.x to 5.5.5 ** . If you
are updating from a different release, use a different procedure. For
more information, see [Installing or updating Service Impact](/imp/install/installation-procedures.html).

!!! warning
    The rebuild process can take a long time. Perform this procedure during
    a maintenance window.

Perform these steps:

1.

    Log in to the Control Center master host as root or as a user with
    superuser privileges.

2.   Stop the Zenoss services, and then verify that the services are
    stopped.
    1.   Stop Resource Manager.

        ```sh
        serviced service stop Zenoss.resmgr/Zenoss
        ```

    2.   Wait until all services are stopped.
        Use the `watch` command to
        monitor the status.

        ```sh
        watch serviced service status Zenoss.resmgr/Zenoss
        ```

3.  Rename the Service Impact database file.
    1.  Stop the Impact server.

        ```sh
        serviced service stop Infrastructure/Impact
        ```

    2.  Wait until the service is stopped.

        ```sh
        serviced service status Infrastructure/Impact
        ```

    3.  Display the Control Center tenant identifier.

        ```sh
        ls /opt/serviced/var/volumes
        ```

        The result should be one 24-character string. If the result is
        more than one string, please contact Zenoss Support.

    4.  Rename the database file.
        Replace Tenant-ID with the result from the previous command.

        ```sh
        mv /opt/serviced/var/volumes/Tenant-ID/impact/db  /opt/serviced/var/volumes/Tenant-ID/impact/db.pre-5.5.x
        ```

    5.  Start the Impact server.

        ```sh
         serviced service start Infrastructure/Impact
        ```

    6.  Wait until the service is started.

        ```sh
         serviced service status Infrastructure/Impact
        ```

4.  Start the Zenoss service that is needed to perform the graph
    rebuild.
    1.  Start the zeneventserver service.

        ```sh
        serviced service start zeneventserver
        ```

    2.  Wait until the service is started.
        Use the watch command to monitor the status.

        ```sh
        watch serviced service status zeneventserver
        ```

5.  Identify the delegate hosts where Resource Manager is running.

    ```sh
    serviced host list --show-fields=Pool,Name
    ```

    The name of the resource pool where Resource Manager is running is
    not standardized.

6.  Log in to a delegate host, and then start a Zope container.

    !!! warning
        The rebuild process requires approximately 1GB to 2GB per CPU core.
        If the delegate host does not have adequate main memory, the host
        may become unstable.

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

7.  Update the catalog and then initialize the server.
    1.  Update the catalog.

        ```sh
        zenimpactgraph run -x catclean
        ```

    2.  Update the Service Impact graph in ZODB and
        [Neo4j](http://neo4j.com/){.external-link}.

        ```sh
        zenimpactgraph run --update
        ```

        For more information about the update process, see [Graph update tips](/imp/install/graph-update-tips.html).

    3.  Exit the zenoss user account.

        ```sh
        exit
        ```

    4.  Exit the Zope container.

        ```sh
        exit
        ```

8.  Restart all Zenoss services:

    ```sh
    serviced service restart Zenoss.resmgr/Zenoss
    ```

9.  Refresh the cache in your browser. The procedure varies by browser.


