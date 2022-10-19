# Local networks

All connections between devices and all redundant resources are modeled.
This procedure creates service model members for the major network
segments.

1.   In the Resource Manager browser interface, select SERVICES  &gt;
    Dynamic Services.
2.   In the tree view, open CRM - Development  &gt; Network.
3.   Create new members for the major network segments. For
    instructions, see preceding steps.

    The following table shows new and existing members.

    | New service model member | Existing service model members           |
    |:-------------------------|:-----------------------------------------|
    | App Hosts - Switches     | txsw235 - App Hosts, txsw172 - App Hosts |
    | DB Hosts - Switches      | txsw235 - DB Hosts, txsw172 - DB Hosts   |
    | Firewalls - Routers      | txfw25 - Routers, txfw17 - Routers       |
    | Switches - Firewalls     | txsw235 - Firewalls, txsw172 - Firewalls |

4.   Add the following global policies (availability state triggers) to
    each new service model member. For instructions, see preceding
    steps.

    -   ATRISK if &gt;= 50% DynamicService is DOWN
    -   DOWN if &gt;= 100% DynamicService is DOWN

## Merge the network segment services

Service model members for all of the major network segments are in
place. Now consider members to represent the critical paths. To
characterize the CRM application as available, the following minimum
connections are required:

-   One connection between Internet users and an application server that
    is UP.
-   One connection between an application server and a database server
    that is UP.

If entities for these paths existed, we could create the service model
member that summarizes the network service for CRM. However, only one
segment is defined, by the Routers - Internet subservice. The following
paths require an additional subservice each:

-   The path between the routers and the application hosts.
-   The path between the application and database hosts.

1.   In the Resource Manager browser interface, select SERVICES &gt;
    Dynamic Services.
2.   In the tree view, open the CRM - Development organizer, and then
    open and select the Network organizer.
3.   Create new service model members for the network paths that affect
    users.

    Because each subservice is critical, the correct policy for these
    new service model members is the default policy. The following table
    matches new and existing service model members.

    | New service model member | Existing service model members                                  |
    |:-------------------------|:----------------------------------------------------------------|
    | Routers - App Hosts      | App Hosts - Switches, Firewalls - Routers, Switches - Firewalls |
    | App Hosts - DB Hosts     | App Hosts - Switches, DB Hosts - Switches                       |

    For detailed instructions, see the preceding steps.
