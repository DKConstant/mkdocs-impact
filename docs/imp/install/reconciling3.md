# Canceling the service model reconcile

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


