# Reconciling originating and target system entities

The reconcile phase is an iterative process in which you attempt to
match devices or components from the originating system with their
equivalents on the target system.

Multiple attempts to reconcile are often required before you can commit
a service model that originated on another system. For faster progress,
make multiple small changes and frequent attempts to reconcile.

Begin by reviewing the text files that the initial import generated.
Files svc_export.graphml.latest.txt and svc_export.graphml.0001.txt are
identical. Each attempt to reconcile generates a new "latest" file and a
new, sequentially numbered file to provide a record of your changes. Do
not modify the numbered files.

For each service model member, one of the following results or actions
exists. When the attempt to reconcile succeeds, results are reported.
When you must manually correct exceptions in the model, actions provide
guidance. &lt;NodeID&gt; identifies the imported service model member.
Do not modify the node ID. &lt;TargetNodeID&gt; is the DMD ID, name, or
GUID of the target entity to apply to the imported service model member.

UNRECONCILED &lt;NodeID&gt;
:   The result for any member on the originating system that the service
    model references but which cannot be identified on the target
    system.

MAP &lt;NodeID&gt; &lt;TargetNodeID&gt;
:   The result if a matching entity was found on the target system or an
    action to take for an UNRECONCILED service model member. Replace
    UNRECONCILED with MAP and specify the DMD ID, name, or GUID for the
    target entity. For example, you might MAP to specify that device
    "stage-AppSvr1" should reference "prod-AppSvr1" in production.

    ```sh
    MAP stage-AppSvr1  prod-AppSvr1
    ```

    Note: Some cases might require that you first define and model a
    device in Resource Manager so that the next reconcile attempt can
    detect it either automatically or manually through use of the MAP
    action.

CREATE &lt;NodeID&gt;

:   An action to take when no matching entity was found in the target
    system, but an entity can be created through import. For example,
    you might CREATE to add a device for production when a similar
    device does not exist in staging.

    ```sh
    CREATE prod-AppSvr1
    ```

DELETE &lt;NodeID&gt;
:   The result when a matching entity was found in the target system,
    and it is marked to be deleted in the import file, or an action to
    take when an entity is not needed. Use DELETE to delete the device,
    not just remove it from the service model. Replace UNRECONCILED with
    DELETE and specify the DMD ID, name, or GUID.

    For example, you might DELETE to remove a device in production.

    ```sh
    DELETE prod-AppSvr1
    ```

:   If the &lt;NodeID&gt; does not exist in the target system, the
    action is converted to IGNORE.

IGNORE &lt;NodeID&gt;

:   An action to take for an imported service model member. For example,
    you might IGNORE because a similar entity does not exist in
    production.

    ```sh
    IGNORE stage-AppSvr1
    ```

Before you commit, you must edit svc_export.graphml .latest.txt (or
another version of the file) to specify action data. That is, replace
UNRECONCILED entries with MAP, CREATE, DELETE, or IGNORE action syntax,
and then attempt to reconcile.

Note: In some cases, such as when target devices are not yet online, you
might commit and make the service model active even with a few
UNRECONCILED entries. Reconcile the remaining UNRECONCILED entries later
by importing the same export file or a new file. This approach is useful
if you plan to repeat the export to the same target, such as after
upgrades or service model changes. You will not need to manually
reconcile the same entries each time. You can also manually adjust
committed service model definitions later in the target system by using
the browser interface.

## Attempting to reconcile

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

## Canceling the service model reconcile

You might need to remove an uncommitted import attempt from the target
system sandbox and free up sandbox resources.

Prerequisites:

-   Generate an export file (see [Exporting a service model](/imp/install/exporting.html)).
-   Copy the export file to the target system and log in (see [Preparing to import](/imp/install/importing2.html)).
-   Complete the initial import (see [Initiating the import](/imp/install/importing3.html)).

You can specify the import attempt to cancel in the following ways:

By import file name:

```sh
zenimpactimport --import filename.graphml --abort
```

By reconcile file name:

```sh
zenimpactimport --reconcileFile filename.graphml.latest.txt --abort
```

By action file name:

```sh
zenimpactimport --actionFile filename.graphml*.latest.txt* --abort
```

By source and version. First, generate a list of import attempts:

```sh
zenimpactimport --list-imports
```

Then specify source, version, or both:

```sh
zenimpactimport --source  sourceID  --abort
```

```sh
zenimpactimport --import-version  versionID  --abort
```

```sh
zenimpactimport --source  sourceID --import-version  versionID  --abort
```

The following example lists the import versions, the command to remove
an uncommitted import, and the resulting list of import versions.

```sh
$ zenimpactimport --list-imports
Date                 Source                  Version        Status      
2018-02-13 14:59:36  d6fc-b4fe-00505694381d  1481662776493  COMMITTED   
2018-02-14 13:50:48  bd6d-a34a-0242ac110013  1481745048516  COMMITTED   
2018-02-14 14:22:11  bd70-945b-0242ac11003d  1481746931561  UNCOMMITTED
2018-02-14 14:46:43  bd70-945b-0242ac11003d  1481748403174  UNCOMMITTED

$ zenimpactimport -r svc_export.graphml --import -version 1481746931561 --abort
INFO:zen.impact.import:Reading action data from svc_export.graphml.latest.txt
INFO:zen.impact.import:Aborting import bd70-945b-0242ac11003d  1481746931561 ...
INFO:zen.impact.import:Printing report to svc_export.graphml.0003.txt
INFO:zen.impact.import:Printing report to svc_export.graphml.latest.txt
INFO:zen.impact.import:Nodes unreconciled: 0
INFO:zen.impact.import:Import node status: aborted
INFO:zen.impact.import:Done

$ zenimpactimport --list-imports
Date                 Source                  Version        Status      
2018-02-13 14:59:36  d6fc-b4fe-00505694381d  1481662776493  COMMITTED   
2018-02-14 13:50:48  bd6d-a34a-0242ac110013  1481745048516  COMMITTED   
2018-02-14 14:46:43  bd70-945b-0242ac11003d  1481748403174  UNCOMMITTED
```
