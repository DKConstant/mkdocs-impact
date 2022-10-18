# Attempting to reconcile

Prerequisites:

-   Generate an export file (see [Exporting a service model](/imp/install/exporting.html)).
-   Copy the export file to the target system and log in (see [Preparing to import](/imp/install/importing2.html)).
-   Complete the initial import (see [Initiating the import](/imp/install/importing3.html)).
-   Review [Reconciling originating and target system entities](/imp/install/reconciling.html).

For more information about the zenimpactimport command and options, see
[zenimpactimport](/imp/install/zenimpactimport.html) or access the help
information:

```sh
zenimpactimport -h
```

1.   In svc_export.graphml .latest.txt or another version of the file,
    replace UNRECONCILED with an action to specify how the exception
    should be reconciled.
2.   Change directory to the directory that contains files
    svc_export.graphml .latest.txt and svc_export.graphml nnnn.txt.
3.   Initiate the reconcile attempt.

    ```sh
    zenimpactimport -r svc_export.graphml
    ```

    The zenimpactimport command attempts to reconcile the originating
    and target systems, and generates new versions of files
    svc_export.graphml .latest.txt and svc_export.graphml .nnnn.txt.

4.   Review import results in file svc_export.graphml .latest.txt, and
    proceed as follows:
    -   If Nodes unreconciled is 1 or greater, repeat the reconciliation
        process.
    -   If Nodes unreconciled is 0, proceed with [Adding the service models to the target system](/imp/install/committing.html).
    -   If the import ends in an error or you do not plan to commit the
        import, proceed with [Canceling the service model reconcile](/imp/install/reconciling3.html).


