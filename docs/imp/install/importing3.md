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


