# Updating only ZenPacks.zenoss.ImpactServer

Before performing this procedure, complete prerequisites listed in
[Installing or updating Service Impact](/imp/install/installation-procedures.html).

Perform this procedure to upgrade only the ZenPacks.zenoss.ImpactServer
ZenPack.

1.   Log in to the Control Center browser interface.
2.   In the Application column of the Applications table, click Resource
    Manager.
3.   Scroll down to the Services table, and then locate the Impact
    service in the Infrastructure section.
4.   Click Impact, and then locate the State Change Queue Length graph.
5.   Log in to the Control Center master host as a user with serviced
    CLI privileges.
6.   Stop the zenimpactstate service, and then verify that it stopped.
    1.   Stop the zenimpactstate service.

        ```sh
        serviced service stop zenimpactstate
        ```

    2.   Verify that the service is stopped.

        ```sh
        watch serviced service status zenimpactstate
        ```

7.   In the Control Center browser interface, monitor the length of the
    state change queue.

    When the queue length is 0 (zero), proceed to the next step.

8.   Stop the Infrastructure/Impact service, and then verify that it
    stopped.
    1.   Stop the Infrastructure/Impact service.

        ```sh
        serviced service stop Infrastructure/Impact
        ```

    2.   Verify that the service is stopped.

        ```sh
        watch serviced service status Infrastructure/Impact
        ```

9.   Extract the upgrade script from the ZenPacks.zenoss.ImpactServer
    ZenPack, make the script executable, and start the upgrade script.
    1.   Change to the directory in which the Service Impact ZenPack egg
        file is located.

        For example, the /tmp/impact directory:

        ```sh
        cd /tmp/impact
        ```

    2.   Extract the upgrade script from the
        ZenPacks.zenoss.ImpactServer egg file.

        Replace Version with the ZenPack version number:

        ```sh
        unzip -p ZenPacks.zenoss.ImpactServer-Version-py2.7.egg \
          ZenPacks/zenoss/ImpactServer/upgrade/upgrade.sh > upgrade.sh
        ```

    3.   Make the script executable.

        ```sh
        chmod +x upgrade.sh
        ```

    4.   Start the upgrade script.

        ```sh
        ./upgrade.sh
        ```

        Note: The upgrade script might display CRITICAL warning
        messages, which can be ignored.

10.  Start the Infrastructure/Impact service, and then verify that it
    started.
    1.   Start the Infrastructure/Impact service.

        ```sh
        serviced service start Infrastructure/Impact
        ```

    2.   Verify that the service is started.

        ```sh
        watch serviced service status Infrastructure/Impact
        ```

11.  Log in to the Control Center browser interface.
12.  Restart Zenoss services.

    ```sh
    serviced service restart Zenoss.resmgr/Zenoss
    ```

    Alternatively, restart the Zenoss services by using the Control
    Center browser interface.


