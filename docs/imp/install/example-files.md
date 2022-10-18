# Example export file

The generated export file name is in the format
export_impact_svcname_YYYYMMDDHHMMSS.graphml, where

-   export is the name of the action that is performed.
-   impact is the name of the Resource Manager plugin that performs the
    action.
-   service is the name of the service model, a service organizer, or
    dynamic services environment that you selected for export.
-   YYYYMMDDHHMMSS is the timestamp of the export action.

For example, export_impact_DynamicServices_20160331135219.graphml.
Note: This document refers to the file as svc_export.graphml.

The export file name is included in the names of the text files that the
import process and each reconciliation attempt generate. For example, if
file export_impact_DynamicServices_20160331135219.graphml is imported,
then the text file names are:

export_impact_DynamicServices_20160331135219.graphml.latest.txt
export_impact_DynamicServices_20160331135219.graphml.nnnn.txt

The following example shows the export file for a service named BizSvcA.
The service model contains types DEVICE, SERVICE, and COMPONENT (PROP_element_type_id).

-   The service is named BizSvcA (PROP_name) and it is a dynamic
    **service** (PROP_meta_type).
-   The devices are named PROD_SQL SERVER and vcloud-01.zenosslabs.com (PROP_name). They are a device and a vCloudCell, respectively (PROP_meta_type).
-   The components are named APP_DB1 and tempdb (PROP_name). They are
    a WinSQLDatabases (PROP_meta_type).
-   Four impact relationship edge members from each device and
    component.

```sh
<?xml version="1.0" encoding="utf-8"?>
<graphml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://graphml.graphdrawing.org/xmlns/1.1/graphml.xsd">
  <key attr.name="PROP_production" attr.type="string" for="node"/>
  <key attr.name="INTRINSIC_STATE_AVAILABILITY" attr.type="string" for="node"/>
  <key attr.name="PROP_priority" attr.type="string" for="node"/>
  <key attr.name="INTRINSIC_STATE_PERFORMANCE" attr.type="string" for="node"/>
  <key attr.name="RELATED_EVENT_IDS" attr.type="string" for="node"/>
  <key attr.name="NODE_TYPE" attr.type="string" for="node"/>
  <key attr.name="DERIVED_STATE_PERFORMANCE" attr.type="string" for="node"/>
  <key attr.name="IN_ANY_CONTEXT" attr.type="string" for="node"/>
  <key attr.name="PROP_element_type_id" attr.type="string" for="node"/>
  <key attr.name="DERIVED_STATE_AVAILABILITY" attr.type="string" for="node"/>
  <key attr.name="ID" attr.type="string" for="node"/>
  <key attr.name="PROP_name" attr.type="string" for="node"/>
  <key attr.name="INTRINSIC_STATE_CAPACITY" attr.type="string" for="node"/>
  <key attr.name="PROP_meta_type" attr.type="string" for="node"/>
  <key attr.name="ORGANIZER" attr.type="string" for="node"/>
  <key attr.name="DESCRIPTION" attr.type="string" for="node"/>
  <key attr.name="LN_CRITERIA" attr.type="string" for="node"/>
  <key attr.name="LN_AVAILABILITY_MAP" attr.type="string" for="node"/>
  <key attr.name="LN_PERFORMANCE_MAP" attr.type="string" for="node"/>
  <key attr.name="CUSTOM_STATE_PROVIDER" attr.type="string" for="node"/>
  <key attr.name="LABEL" attr.type="string" for="edge"/>
  <graph edgedefault="directed">
    <node>
      <data key="PROP_production">1000</data>
      <data key="PROP_priority">3</data>
      <data key="NODE_TYPE">ELEMENT</data>
      <data key="DERIVED_STATE_PERFORMANCE">__DERIVED_STATE__|ACCEPTABLE|</data>
      <data key="IN_ANY_CONTEXT">true</data>
      <data key="PROP_element_type_id">DEVICE</data>
      <data key="DERIVED_STATE_AVAILABILITY">__DERIVED_STATE__|DOWN|</data>
      <data key="ID">8ddcc69b-e6a7-4370-8f3d-4a53f897b9f4</data>
      <data key="PROP_name"PROD_SQL Server</data>
      <data key="PROP_meta_type">Device</data>
      <data key="CUSTOM_STATE_PROVIDER">{}</data>
    </node>
    <node>
      <data key="PROP_production">1000</data>
      <data key="NODE_TYPE">ELEMENT</data>
      <data key="DERIVED_STATE_PERFORMANCE">__DERIVED_STATE__|ACCEPTABLE|</data>
      <data key="IN_ANY_CONTEXT">true</data>
      <data key="PROP_element_type_id">COMPONENT</data>
      <data key="DERIVED_STATE_AVAILABILITY">__DERIVED_STATE__|UP|</data>
      <data key="ID">fc6ab26d-75cd-491a-8c71-75fb25845f97</data>
      <data key="PROP_name">APP_DB1</data>
      <data key="PROP_meta_type">WinSQLDatabase</data>
      <data key="CUSTOM_STATE_PROVIDER">{}</data>
    </node>
    <node>
      <data key="PROP_production">1000</data>
      <data key="NODE_TYPE">ELEMENT</data>
      <data key="DERIVED_STATE_PERFORMANCE">__DERIVED_STATE__|ACCEPTABLE|</data>
      <data key="IN_ANY_CONTEXT">true</data>
      <data key="PROP_element_type_id">COMPONENT</data>
      <data key="DERIVED_STATE_AVAILABILITY">__DERIVED_STATE__|UP|</data>
      <data key="ID">d66416a5-7db7-47df-b9ab-ed9422700efe</data>
      <data key="PROP_name">tempdb</data>
      <data key="PROP_meta_type">WinSQLDatabase</data>
      <data key="CUSTOM_STATE_PROVIDER">{}</data>
    </node>
    <node>
      <data key="IN_ANY_CONTEXT">true</data>
      <data key="PROP_element_type_id">SERVICE</data>
      <data key="DERIVED_STATE_AVAILABILITY">__DERIVED_STATE__|DOWN|</data>
      <data key="ID">0dcda951-9885-449c-af1b-0adb37aeec95</data>
      <data key="NODE_TYPE">SERVICE</data>
      <data key="PROP_name">BizSvcA</data>
      <data key="DERIVED_STATE_PERFORMANCE">__DERIVED_STATE__|ACCEPTABLE|</data>
      <data key="PROP_meta_type">DynamicService</data>
      <data key="ORGANIZER">/Zreconsvcs</data>
      <data key="DESCRIPTION"/>
    </node>
    <node>
      <data key="PROP_production">1000</data>
      <data key="PROP_priority">3</data>
      <data key="NODE_TYPE">ELEMENT</data>
      <data key="DERIVED_STATE_PERFORMANCE">__DERIVED_STATE__|ACCEPTABLE|</data>
      <data key="IN_ANY_CONTEXT">true</data>
      <data key="PROP_element_type_id">DEVICE</data>
      <data key="DERIVED_STATE_AVAILABILITY">__DERIVED_STATE__|UP|</data>
      <data key="ID">6fca9724-6c92-4fd9-b8fa-c72bb133fda8</data>
      <data key="PROP_name">vcloud-01.zenosslabs.com</data>
      <data key="PROP_meta_type">vCloudCell</data>
      <data key="CUSTOM_STATE_PROVIDER">{}</data>
    </node>
    <edge source="8ddcc69b-e6a7-4370-8f3d-4a53f897b9f4" target="0dcda951-9885-449c-af1b-0adb37aeec95">
      <data key="LABEL">IMPACTS</data>
    </edge>
    <edge source="fc6ab26d-75cd-491a-8c71-75fb25845f97" target="0dcda951-9885-449c-af1b-0adb37aeec95">
      <data key="LABEL">IMPACTS</data>
    </edge>
    <edge source="d66416a5-7db7-47df-b9ab-ed9422700efe" target="0dcda951-9885-449c-af1b-0adb37aeec95">
      <data key="LABEL">IMPACTS</data>
    </edge>
    <edge source="6fca9724-6c92-4fd9-b8fa-c72bb133fda8" target="0dcda951-9885-449c-af1b-0adb37aeec95">
      <data key="LABEL">IMPACTS</data>
    </edge>
  </graph>
</graphml>
```

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
