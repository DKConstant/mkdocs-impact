# Internet connections

The following procedures will create service models of the redundant paths to the internet.

## Logical node (internet connection)

All network connections except the connection to the Internet are
modeled. Because the Internet connection is not modeled in Resource
Manager, we create a logical node to represent it. For this tutorial,
the logical node is simply a service model member that reacts to fake
events. A "real" logical node could be configured to react to events
from a zencommand that pings an Internet resource.

Follow these steps:

1.   In the Resource Manager browser interface, select SERVICES &gt;
    Logical Nodes.
2.   From the Add menu at the bottom of the tree view, select Add
    Logical Node Organizer.

    @lb[](img/internet-logical-node-organizer.png)

3.   In the Add Logical Node Organizer dialog box, enter CRM -
    Development, and then click SUBMIT.
4.   From the Add menu at the bottom of the tree view, select Add
    Logical Node.
5.   In the Add Logical Node dialog box, enter example.com, and then
    click SUBMIT.
6.   In the example.com details view, enter values to match the
    following table, and then click Save.

    | Field                                    | Description                                             |
    |:-----------------------------------------|:--------------------------------------------------------|
    |  Description                             | A node to help represent a route to the Internet.       |
    |  Criteria                                | all, Summary, contains, fakeInternet                    |
    |  Events for this node in this event class| /Status/Ping                                            |
    |  will result in these availability states| Critical: DOWN, Error: DOWN, Warning: ATRISK, Clear: UP |



## Router 12 to logical node

Create a service model member for the connection from router 12 to the
zenoss.com logical node.

1.   In the Resource Manager browser interface, select SERVICES  &gt;
    Dynamic Services.
2.   In the tree view of organizers, open CRM - Development  &gt;
    Network.

    Unless an organizer is selected, new members are created at the root
    level. From there, you can drag the new member into the correct
    organizer.

3.   From the Add menu at the bottom of the tree view, select Add
    Dynamic Service.
4.   In the Add Dynamic Service dialog box, enter txrt12 - Internet, and
    then click SUBMIT.
5.   In the Members view, click Add.
6.   In the Add to Service search field, enter fake-txrt12.

    @lb[](img/internet2-add-to-service-dialog.png)

7.   In the left column, select Device, and in the results list, select
    fake-txrt12-100g-0, and then click ADD.
8.   In the search field, enter example.com.
9.   From the search results list, select example.com, and then click
    ADD  &gt; CLOSE.

## Router 23 to logical node

To create the service model member for the connection through router 23,
clone the member for the connection through router 12.

1.   In the tree view, select service model member txrt12 - Internet.
2.   From the Action menu at the bottom of the tree view, select Clone
    Service.
3.   In the Clone Service dialog box, enter txrt23 - Internet, and then
    click SUBMIT.

    The new service is created and its contents are displayed in the
    Members view.

4.   From the list of members in the Members view, select
    fake-txrt12-100g-0, and then click Remove.

    If you click on the name of the member, Resource Manager displays
    the device overview page. To return to the correct page, click the
    browser's back button.

5.   In the Remove Items dialog box, click OK.
6.   In the Members view, click Add.
7.   In the Add to Service search field, enter 100g.
8.   In the left column, select Device.
9.   In the results list, double-click fake-txrt23-100g-0, and then
    click ADD  &gt; CLOSE.

## Combined internet connections

The previous tasks created subservices to represent the WAN connections
to the Internet. This task creates a subservice member in the service
model to represent the redundant WAN tier.

1.   In the tree view, select Network.
2.   From the Add menu, select Add Dynamic Service.
3.   In the Add Dynamic Service dialog box, enter Routers - Internet,
    and then click SUBMIT.
4.   In the Members view, click Add.
5.   In the Add to Service search field, enter Internet.
6.   In the left column, select DynamicService.
7.   In the results list, select txrt12-Internet and txrt23-Internet,
    and then click ADD  &gt; CLOSE.

## Adjust policy

Add a global availability policy to the Internet connection subservice
member.

1.   In the tree view, select Routers - Internet.
2.   From the view menu, select Impact View.
3.   In the node tile of the Routers - Internet service (the tile at the
    top of the hierarchy), right-click and then select Edit Impact
    Policies.
4.   In the Impact Policies dialog box, directly to the right of the
    Global Policy entry, click Add.

    @lb[](img/internet5-routers-internet-edit-triggers.png)

5.   In the lower-left corner of the Edit...Policy tab, click Add, and
    then add the following triggers.

    -   ATRISK if &gt;= 50% DynamicService is DOWN
    -   DOWN if &gt;= 100% DynamicService is DOWN

    !!! warning
        When you select a type for a state trigger, the selection excludes
        other types. In this case, the only options are Any and
        DynamicService, and both child members are service members, so
        exclusivity is not a concern.
