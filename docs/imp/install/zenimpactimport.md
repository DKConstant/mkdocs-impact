# zenimpactimport

## DESCRIPTION

zenimpactimport - Imports a
[GraphML](http://graphml.graphdrawing.org/){.external-link} file that
contains Service Impact the service model definitions for a dynamic
service; imports multiple subsequent calls to process new actions in
order to reconcile a service model against the entities in Resource
Manager.

The import process generates files that report the result of the import
and recommend actions. The files follow the same format as the --action
command line parameter. An action consists of an action keyword followed
by parameters for that type of action. Actions and parameters are
separated by white space, with each action on a separate line.

For more information about the import process, see [Importing service model definitions](/imp/install/importing.html).

## SYNTAX

```sh
zenimpactimport (IMPORT_FILE | IMPORT_ID | ACTION_FILE) ACTIONS* [TRANSACTION]
```

## COMMANDS and OPTIONS

--import, -i:   Perform the import operation.

--reconcile, -r:   Perform the reconcile operation.

--help, -h:   Show the help information.

 --list-imports:   Displays a list of existing imports and their status. Each import is
    uniquely identified by source and version identifiers.

 --list-adapters:   Displays a list of adapters that are installed to parse and
    recognize export file content and structure. The "zenoss" adapter
    expects a Zenoss Service Impact service export file in graphml
    format.

<!-- -->

IMPORT_FILE:    --import IMPORT_FILENAME \[--adapter ADAPTER\]
:   Performs the initial import of a file in graphml format that
    generates and attempt to reconcile service model members with
    entities on the target Resource Manager system.
:

    IMPORT_FILENAME:   The file that contains the data in a format that the ADAPTER
        recognizes. The default file name is svc_export.graphml.

    ADAPTER:   The name of an input adapter. Currently, only the default
        adapter for the Zenoss graphml export format is supported.

IMPORT_ID:    --source SOURCEID --import-version VERSIONID:   Performs the import of the attempt that you specify by source ID,
    version ID, or both. Each import is uniquely identified by source
    and version identifiers. To display imports, issue the
    --list-imports command.

    The \*.latest.txt file is rewritten by the latest command that uses
    the specified combination of *sourceID* and *versionID* .

ACTION_FILE:    (--actionFile \| --reconcileFile) FILENAME:   Performs the import using data in the specified file.

    FILENAME:   A text file that contains reconcile actions. If no FILENAME is
        specified on the command line, file svc_export.graphml.
        file.latest.txt is used as input.

ACTIONS:    --action ACTION:   Provides a way to execute a single reconciliation action on the
    command line, rather than editing the input file or the parameter
    --actionFile. For more information about the actions, see
    [Reconciling originating and target system entities](/imp/install/reconciling.html).
:

    CREATE NodeID:   Creates the specified node on the target system.

    DELETE NodeID:   Deletes the specified node from the target system.

    MAP NodeID TargetNodeID:   Replaces the specified node on the originating system with the
        specified node on the target system.

    IGNORE NodeID:   Takes no action for the specified node.

    UNRESOLVED NodeID:   The specified node is referenced in the service model but it
        cannot be reconciled with a node on the target system.

TRANSACTION:    {--abort\|--commit}:   Abort or commit the import attempt that is identified by its unique
    combination of source ID and version ID. Aborting destroys the
    import sandbox. Committing makes all entries in the input file
    permanent and operational in the target system. The last committed
    combination is the final result.


