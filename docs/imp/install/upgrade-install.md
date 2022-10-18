# Installing Service Impact 5.5.x packages

Before performing this procedure, remove the previous version. For more
information, see [Installing or updating Service Impact](/imp/install/installation-procedures.html).

Perform these steps:

1.

    Log in to the Control Center master host as root or as a user with
    superuser privileges.

2.  Rename the Service Impact database file.

    1.   Display the Control Center tenant identifier.

        ```sh
        ls /opt/serviced/var/volumes
        ```

        The result should be one 24-character string. If the result is
        more then one string, please contact Zenoss Support.

    2.  Rename the database file.
        Replace Tenant-ID with the result from the previous command.

        ```sh
        mv /opt/serviced/var/volumes/Tenant-ID/impact/db  /opt/serviced/var/volumes/Tenant-ID/impact/db.pre-5.5.x
        ```

3.  Install the new Service Impact image.
    1.  Change to the directory in which the Service Impact image is
        located.

        ```sh
        cd /tmp/impact
        ```

    2.  Install the image.

        ```sh
        yes | ./install-zenoss-impact_*.run
        ```

4.  Install the ZenPacks.zenoss.ImpactServer ZenPack.
    Replace *VERSION* with the ZenPack version number:

    ```sh
    serviced service run zope zenpack-manager install ZenPacks.zenoss.ImpactServer-VERSION-py2.7.egg
    ```

5.  Start the Impact service, and then verify that it started.
    1.  Start the Impact service.

        ```sh
        serviced service start Infrastructure/Impact
        ```

    2.  Verify that the service is started.

        ```sh
        watch serviced service status Infrastructure/Impact
        ```

6.  Install the ZenPacks.zenoss.Impact ZenPack.
    Replace *VERSION* with the ZenPack version number:

    ```sh
    serviced service run zope zenpack-manager install ZenPacks.zenoss.Impact-VERSION-py2.7.egg
    ```

7.  Identify the delegate hosts where Resource Manager is running.

    ```sh
    serviced host list --show-fields=Pool,Name
    ```

    The name of the resource pool where Resource Manager is running is
    not standardized.

8.  Log in to a delegate host, and then start a Zope container.
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

9.  Update the catalog and then initialize the server.
    1.  Update the catalog.

        ```sh
        zenimpactgraph run -x catclean
        ```

    2.  Initialize the Service Impact server ([Neo4j](http://neo4j.com/){.external-link}) database.

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

10. Rename dynamic services and organizers, if necessary.

    ```sh
    zenimpactgraph run -x change_nodes_ids
    ```

    The script checks for characters that are not allowed in names and
    replaces them. Changes are reported as they are made.

11. Restart all Zenoss services:

    ```sh
    serviced service restart Zenoss.resmgr/Zenoss
    ```

12. Refresh the reverse proxy cache:

    ```sh
    serviced service restart Zenoss.resmgr --auto-launch=False
    ```

13. Refresh the cache in your browser. The procedure varies by browser.


