# Exporting service models from one system to another

You can create a service model on one Resource Manager system (the
originating system) and export that model to another system (the target
system). This feature is useful for tasks such as repopulating a test or
staging environment from a production environment, and performing
repeated exporting and model synchronization from develop, to staging,
to production environments. Review the following use case example and
process overview.

"Project Zebra" is a complicated new E-commerce web application with
many clustered entities. The application has been tested in a staging
environment (the originating Resource Manager system), and the service
model is ready to export from staging to the production environment (the
target Resource Manager system). The following diagram illustrates the
steps in the process; System A is the originating system and System B is
the target system.

@lb[](img/exporting-overview-ex-im.png)

## Exporting

On the originating system, select the dynamic service, dynamic service
organizer, or set of dynamic services to export their service models.
The export process generates a file in GraphML XML format that describes
the structural properties of the service models, including the devices,
components, logical nodes, and their relationships. On your workstation,
save the exported file (referred to in this document as
svc_export.graphml).

The export file contains definitions for entities that are explicitly
defined in the service model. It does not include nodes that Service
Impact identified as having an impact relationship and added. For
example, service model SM1 defines only an application server device
member, App Server A. However, Service Impact evaluated App Server A and
infrastructure dependencies on the VM, VM OS, VM host, and file systems
on which it resides. Service Impact automatically added the related
service model members to the service model SM1. When service model SM1
is exported, the export file contains only service model SM1 and App
Server A. When service model SM1 is imported and committed on the target
system, a new version of service model SM1 is generated that is unique
to the infrastructure dependencies of the target system.

## Importing

On the target system, you import the exported file, which imports the
service model definitions to view into a working "sandbox" testing
environment. While in the sandbox, service models are not operational
and are not available in the Resource Manager browser interface. Before
moving a service model out of the sandbox, you must complete the
reconcile and commit steps.

The initial import process automatically attempts to reconcile (match)
each service model member that the exported file references with a
corresponding entity on the target system. For example, for Project
Zebra, some devices in the staging and production environments might be
shared. Others, like the database, will be replaced in the production
environment by different entities in the same role. With the higher
scalability that production requires, the clusters in the production
environment might have more entities. Some entities might not exist or
be known on the target system. Such differences must be reconciled
before the new application is moved into production.

The import process generates text files to report the results and
identify UNRECONCILED entities. This document refers to the files as
svc_export.graphml.latest.txt and svc_export.graphml.nnnn.txt.

## Reconciling

The generated text files provide known details about UNRECONCILED
entities. Using that information, you search for and edit
svc_export.graphml.latest.txt to identify corresponding entities on the
target system. Your edited version of svc_export.graphml.latest.txt
provides input for each reconcile attempt.

## Committing

After you have reconciled the service models in the sandbox, perform the
final commit. The committed service models are active and begin
analyzing Resource Manager events when appropriate, and generating
service events. View and work with the service models in the SERVICES
tab of the Resource Manager browser interface.

Details about entities that required manual reconciliation are retained
on the target system. Future service model imports of the same entities
will be reconciled automatically. For example, for Project Zebra, the
first import-reconcile-commit process on System B required a manual
mapping of database "Test_DB1" to "Prodxn_DB1." Future imports on System
B of service models that reference "Test_DB1" will automatically refer
to "Prodxn_DB1" instead.

You cannot reverse a commit; however, you can start a new import process
or edit the service model definition in the Resource Manager browser
interface.


