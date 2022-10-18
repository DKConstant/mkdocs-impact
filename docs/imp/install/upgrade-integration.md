# Integrating Service Impact and Resource Manager

Before performing this procedure, perform all of the previous update
procedures. For more information, see [Installing or updating Service Impact](/imp/install/installation-procedures.html).

1.  Log in to the Control Center master host as a user with
    `serviced` CLI privileges.

2.  Stop Resource Manager services.

    1.   Check the status of Zenoss services.

        ```sh
        serviced service status Zenoss.resmgr/Zenoss  --show-fields 'Name,ServiceID,Status'
        ```

        * If the status of Zenoss services is stopped, continue to the
        next step.
        * If the status is started, perform the next substep.

    2.   Stop Zenoss services.

        ```sh
        serviced service stop Zenoss.resmgr/Zenoss
        ```

3.  Start Infrastructure services.
    1.   Start the services.

        ```sh
        serviced service start Zenoss.resmgr/Infrastructure 
        ```

    2.  Wait until the services are started.

        ```sh
        watch serviced service status Zenoss.resmgr/Infrastructure
        ```

4.   Start additional services.
    1.   Start `zeneventserver` and
        `zenimpactstate`.

        ```sh
        serviced service start zeneventserver zenimpactstate
        ```

    2.  Wait until the services are started.
        Use the `watch` command to monitor the status.

        ```sh
        watch serviced service status zeneventserver zenimpactstate
        ```

5.  Identify the delegate host where the `zenimpactstate`
    container is running.

    ```sh
    serviced service status zenimpactstate --show-fields=Name,Hostname
    ```

6.   On your workstation, copy [the GraphML file exported previously](/imp/install/upgrade.html) to a
    temporary directory on the delegate host identified in the previous
    step.

7.  Log in to the delegate host as root or as a user with superuser
    privileges.

8.  Display the ID of the container in which the
    `zenimpactstate` service is running.

    ```sh
    docker ps -aqf "name=$(serviced service list | awk '/zenimpactstate/ { print $2}')"
    ```

9.   Copy the GraphML file from the delegate host to a directory inside
    the `zenimpactstate` container.

    1.  Copy the file to the `/tmp` directory inside the
        container.
        Replace MyExportFile with the name of your GraphML file, and
        replace ContainerID with the result of the
        `docker` command in step 8:

        ```sh
        docker cp /tmp/MyExportFile.graphml ContainerID:/tmp
        ```

    2.  Log in to the zenimpactstate container as root.

        ```sh
        serviced service attach zenimpactstate
        ```

    3.  Move the GraphML file the zenoss user HOME directory and change
        its owner and group.

        ```sh
        mv /tmp/MyExportFile.graphml /home/zenoss
        chown zenoss:zenoss /home/zenoss/MyExportFile.graphml
        ```

    4.  Start a shell as user `zenoss`.

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

11. Import the GraphML file into Service Impact.
    For detailed information about importing the file, see [Importing service model definitions](/imp/install/importing.html). The
    following substeps provide an outline of the procedures.

    1.  Initiate the import.

        ```sh
        zenimpactimport ./MyExportFile.graphml | tee reconcile.file
        ```

    2.  Reconcile entities as necessary.
        For more information, see [Reconciling originating and target system entities](/imp/install/reconciling.html).

    3.  Commit the reconciled entities.

        ```sh
        zenimpactimport -r ./reconcile.file --commit ./MyExportFile.graphml 2>&1 | tee error.out 
        ```

        Zenoss recommends saving both `reconcile.file`
        and `error.out` for review.

    4.  Exit the `zenoss` user shell.

        ```sh
        exit
        ```

    5.  Exit the container.

        ```sh
        exit
        ```

12. On the Control Center master host, restart all Zenoss services.

    ```sh
    serviced service restart Zenoss.resmgr/Zenoss
    ```


