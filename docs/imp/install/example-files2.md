# Example import results file

The initial import generates svc_export.graphml .latest.txt to report
the results of the process. The following example shows unreconciled,
created, and mapped service model members.

Be aware that the svc_export.graphml .latest.txt is rewritten by the
latest command that uses the specified combination of *sourceID* and
*versionID* .

## UNRECONCILED

In this example, the initial import could not match databases DB3From,
DB2From, and tempdbFrom with databases on the target system. Manual
reconciliation is needed. For UNRECONCILED entries, known information is
displayed so that you can search the target system for a corresponding
entity. In the example, PROP_meta_type indicates that a WinSQLDatabase
is referenced, PROP_element_type_id shows that it is a COMPONENT, and
PROP_name shows the database name. After the EXTERNAL_ID has been
reconciled, subsequent outputs do not include these details.

## CREATE

For imported service DBSvcExpTarget, a matching service does not exist
on the target system. The import command generated a CREATE statement
for that service and displays related details about the service that is
being created.

## MAP

For the SQL Server device and database from the originating system, the
import process found and mapped the same members on the target system.
Details about the members are not displayed because manual
reconciliation is not needed.

```sh
$ cat DBSvcExpFROM.graphml.latest.txt
SOURCE      d96ce0f4-2d06-11e6-b939-0242ac110026
VERSION     1481917173580       # 2016-12-16 19:39:33

## CUSTOM_STATE_PROVIDER:      {}
## DERIVED_STATE_AVAILABILITY: __DERIVED_STATE__|UP|
## DERIVED_STATE_PERFORMANCE:  __DERIVED_STATE__|ACCEPTABLE|
## EXTERNAL_ID:                d05e3670-0bbf-4e76-bcd2-a8a1cd333333
## ID:                         d05e3670-0bbf-4e76-bcd2-a8a1cd333333
## IN_ANY_CONTEXT:             true
## NODE_TYPE:                  ELEMENT
## PROP_element_type_id:       COMPONENT
## PROP_meta_type:             WinSQLDatabase
## PROP_name:                  DB3From
## PROP_production:            1000
UNRECONCILED    d05e3670-0bbf-4e76-bcd2-a8a1cd333333

## CUSTOM_STATE_PROVIDER:      {}
## DERIVED_STATE_AVAILABILITY: __DERIVED_STATE__|UP|
## DERIVED_STATE_PERFORMANCE:  __DERIVED_STATE__|ACCEPTABLE|
## EXTERNAL_ID:                d4176972-bb0e-44b3-90d2-bb8e96222222
## ID:                         d4176972-bb0e-44b3-90d2-bb8e96222222
## IN_ANY_CONTEXT:             true
## NODE_TYPE:                  ELEMENT
## PROP_element_type_id:       COMPONENT
## PROP_meta_type:             WinSQLDatabase
## PROP_name:                  DB2From
## PROP_production:            1000
UNRECONCILED    d4176972-bb0e-44b3-90d2-bb8e96222222

## CUSTOM_STATE_PROVIDER:      {}
## DERIVED_STATE_AVAILABILITY: __DERIVED_STATE__|UP|
## DERIVED_STATE_PERFORMANCE:  __DERIVED_STATE__|ACCEPTABLE|
## EXTERNAL_ID:                d66416a5-7db7-47df-b9ab-ed9422666666
## ID:                         d66416a5-7db7-47df-b9ab-ed9422666666
## IN_ANY_CONTEXT:             true
## NODE_TYPE:                  ELEMENT
## PROP_element_type_id:       COMPONENT
## PROP_meta_type:             WinSQLDatabase
## PROP_name:                  tempdbFrom
## PROP_production:            1000
UNRECONCILED      d66416a5-7db7-47df-b9ab-ed9422666666

## DERIVED_STATE_AVAILABILITY: __DERIVED_STATE__|DOWN|
## DERIVED_STATE_PERFORMANCE:  __DERIVED_STATE__|ACCEPTABLE|
## DESCRIPTION:                
## EXTERNAL_ID:                1f3e3f0b-35a4-4851-8863-b94f36AAAAAA
## ID:                         1f3e3f0b-35a4-4851-8863-b94f36AAAAAA
## IN_ANY_CONTEXT:             true
## NODE_TYPE:                  SERVICE
## ORGANIZER:                  /Zreconsvcs
## PROP_element_type_id:       SERVICE
## PROP_meta_type:             DynamicService
## PROP_name:                  DBSvcExpTarget
## RECONCILE_ACTION:           CREATE
CREATE      1f3e3f0b-35a4-4851-8863-b94f36AAAAAA

MAP      8ddcc69b-e6a7-4370-8f3d-4a53f897b9f4   /zport/dmd/Devices/Server/Microsoft/Windows/devices/10.111.5.81

MAP      fc6ab26d-75cd-491a-8c71-75fb25845f97   /zport/dmd/Devices/Server/Microsoft/Windows/devices/10.111.5.81/
                                                     os/winsqlinstances/INSTANCE1/databases/INSTANCE15
```


