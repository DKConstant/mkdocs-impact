# Combined networks

The critical network paths are defined. Create a service model member to
represent the network service for the CRM application.

1.   In the Resource Manager browser interface, select SERVICES &gt;
    Dynamic Services.
2.   In the tree view, open the CRM - Development organizer, and then
    select it.

    Service model members that represent a category should be peers of
    their sub-organizers.

3.   Create a new service model member, named CRM - Network Service.
4.   Add the following subservice model members to the new service model
    member.

    -   App Hosts - DB Hosts
    -   Routers - App Hosts
    -   Routers - Internet

    The correct policy for this member is the default policy.


