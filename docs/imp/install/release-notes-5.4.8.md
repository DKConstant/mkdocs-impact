# Service Impact 5.4.8

This release includes a major new feature, selective synchronization.

In releases before 5.4.1, the Resource Manager Zope Object Database
(ZODB) and the Service Impact graph database were tightly synchronized,
and all of the relationships among Resource Manager devices and
components in your environment (the "model") were copied to the Service
Impact graph database. In larger environments, when Resource Manager
model updates were underway, the synchronization process reduced
performance in Resource Manager and caused Service Impact to make
analyses with incomplete data.

In this release, you can refine the list of components that are copied
from ZODB to Service Impact. This approach works well in environments
where the critical services defined in Service Impact are a relatively
small part of the Resource Manager model.

Additional highlights of this release:

-   The SERVICES &gt; Metatype Configuration page is the new interface
    for deciding which device components to exclude from Service Impact.
    The page includes counts of the overall number of entities in the
    Resource Manager model and the Service Impact model, updated
    regularly.
-   The export/import/reconciliation process has been re-implemented to
    improve accuracy, reduce reconciliation conflicts, and provide
    progress information.
-   The `zenimpactgraph run --update` process has been
    re-implemented to scale out to the available host resources. The
    update time is reduced from days to hours.
-   The zenimpactworker process is no longer necessary.

## Compatibility

For version information, please see the compatibility matrix on the
[Release Notes](/not-migrated.html)
page.

## Update instructions

## Updating from releases before 5.4.x

The update procedures for this release are unique and a special section
has been created for them:

[Updating Service Impact](/imp/install/installation-procedures.html)

The order of steps in the update procedures is crucial. Please review
the procedures in advance, and follow the instructions carefully.

## Updating from 5.4.x

To update Service Impact to this release from a previous release of
5.4.x, follow the standard update procedure:

[Updating Service Impact](/imp/install/installation-procedures.html)

When the update is complete, run the following command to synchronize
`impact-server`:

```sh
zenimpactgraph run -x push
```

## Known issues

-   In previous releases, adding a dynamic service was very quick,
    because the Service Impact database included all of the devices and
    components in the ZODB. In this release, Service Impact creates a
    background job to copy the devices and components it requires, which
    can take a few minutes to complete. Scripts that utilize the Service
    Impact JSON API must be updated to wait for the job to complete
    before proceeding.
-   When you change the metatype configuration, the Service Impact
    database is updated to add or remove nodes. Depending on which items
    are changed, processing the changes can take 30-90 minutes in very
    large environments.
-   (IMP-699) The upgrade to 5.4.x silently removes leading spaces from
    dynamic service names, which changes their sort order. To work
    around the issue, rename the services after the upgrade.
-   (IMP-709) When logged in as Admin, changing the Impact View from
    performance to availability briefly raises a server exception
    dialog.

## Fixed issues

|         |                                                                                                      |
|---------|------------------------------------------------------------------------------------------------------|
| ID      | Description                                                                                          |
| IMP-649 | Dynamic service names and organizer names must be updated manually to meet new requirements          |
| IMP-676 | Sequential API calls to addToDynamicService results in zenjobs hanging                               |
| IMP-700 |  The Service Impact view includes more virtual machines than are defined in a dynamic service        |
| IMP-707 | zenimpactgraph throws a traceback, `global name 'IRelationshipNode' is not defined` |


