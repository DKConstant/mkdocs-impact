# Importing service model definitions

Perform the procedures in this section to import a service export file
in graphml format that contains service model definitions.

The service models in the export file are imported into a
non-operational "sandbox" environment on the target system. The service
model remains hidden in the sandbox through the reconcile phase, and
does not appear in the browser interface until you perform the final
commit.

The import and reconcile process typically supports files that were
exported by the same or different Resource Manager instance and version
(older or newer), and Service Impact versions (older or newer). If an
export file's content is incompatible with a version of import,
incompatibilities can usually be resolved by adjusting the graphml file
content or structure.

-   [Preparing to import](/imp/install/importing2.html)
-   [Initiating the import](/imp/install/importing3.html)
-   [Reconciling originating and target system entities](/imp/install/reconciling.html)
-   [Attempting to reconcile](/imp/install/reconciling2.html)
-   [Canceling the service model reconcile](/imp/install/reconciling3.html)
-   [Adding the service models to the target system](/imp/install/committing.html)
-   [Future export scenarios and machine learning](/imp/install/committing2.html)
-   [zenimpactimport](/imp/install/zenimpactimport.html)
-   [Example export file](/imp/install/example-files.html)
-   [Example import results file](/imp/install/example-files2.html)

</p>

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

# Initiating the import

In the initial import, service models from the exported file are
imported into the sandbox, the product attempts to reconcile service
model members from the originating system with entities on the target
system, and output files are generated to show the result of the
reconciliation attempt and actions to take.

Prerequisites:

-   Generate an export file (see [Exporting a service model](/imp/install/exporting.html)).
-   Copy the export file to the target system and log in (see [Preparing to import](/imp/install/importing2.html)).

1.   Initiate the import.

    ```sh
    zenimpactimport svc_export.graphml
    ```

    The exported data is imported to the target system; the first
    reconciliation attempt is made, and generated text files report the
    results.

2.   Review import results in file svc_export.graphml .latest.txt, and
    then proceed as follows:
    -   If Nodes unreconciled is 0, proceed with [Adding the service models to the target system](/imp/install/committing.html).
    -   If Nodes unreconciled is 1 or greater, proceed with [Reconciling originating and target system entities](/imp/install/reconciling.html).
    -   If the import ends in an error or you do not plan to commit the
        import, proceed with [Canceling the service model reconcile](/imp/install/reconciling3.html).
