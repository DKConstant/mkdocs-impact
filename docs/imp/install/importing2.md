# Preparing to import

Before you can import, you must copy the export file from your
workstation to the target system master host and connect to that master
host.

Prerequisite: Generate an export file (see [Exporting a service model](/imp/install/exporting.html)).

1.   Log in to the Control Center host running the zenimpactstate
    service, or the ControlCenter host with the most available memory in
    the pool in which the Resource Manager services are running.
2.   Create a directory for the exported file on the Control Center
    host.

    The directory that contains the exported file must be a local
    directory (not mounted) and must be readable, writable, and
    executable by all users. The following example creates a directory
    in /tmp:

    ```sh
    mkdir /tmp/impact && chmod 777 /tmp/impact
    ```

3.   Change directory to the directory you created.

    For example:

    ```sh
    cd /tmp/impact
    ```

4.   Log in to the host as a user with
    `serviced` CLI privileges.
5.   Copy the exported graphml file from your workstation to the new
    directory (if on the same host) or use scp to perform a network
    copy.

    For example:

    ```sh
    scp export_impact_svcname_20161215203455.graphml zenossuser@impacthost.company.com:/tmp/impact
    ```

6.   Connect to the zenimpactstate container.

    ```sh
    serviced service shell -i zenimpactstate
    ```

7.   In the new session, switch user from root to zenoss.

    ```sh
    su - zenoss
    ```

8.   Change directory to the pwd directory:

    For example:

    ```sh
    cd /mnt/pwd
    ```

Proceed with the initial import.


