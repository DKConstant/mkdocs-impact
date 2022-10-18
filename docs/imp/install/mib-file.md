# Service Impact MIB file

Service Impact includes its own SNMP management information base (MIB)
file. The file is located here:

`/opt/zenoss/ZenPacks/ZenPacks.zenoss.Impact-VERSION-py2.7.egg/ZenPacks/zenoss/Impact/share/mibs/ZENOSS-IMPACT-MIB.txt`

The file is a supplement to the standard Zenoss MIB file, containing
definitions for events that are unique to Service Impact. To use this
MIB file in other applications that receive traps, you must install both
this file and the Zenoss MIB file.

Optionally, the events defined in this file may be used in
[notifications](/not-migrated.html).


