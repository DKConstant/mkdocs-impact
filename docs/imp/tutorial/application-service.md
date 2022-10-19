# Create the final service for the application

After all resource categories are modeled, the application as a whole
can be modeled.

1.   In the Resource Manager browser interface, select SERVICES &gt;
    Dynamic Services.
2.   In the tree view, select the Dashboard organizer.

    Keep service model members that represent a service model as a whole
    in a separate, root-level organizer. This way, you can quickly
    determine the state of all service models in the environment.

3.   Create a service model member named CRM - Development Service and
    add the following subservice model members to it.

    -   CRM - Application Service
    -   CRM - Compute Service
    -   CRM - Network Service

To view the graph of the service model, select the new service in the tree
view, and then select Impact View. After hiding child nodes and zooming in,
the graph looks similar to the following image. If necessary, to reposition
the graph, click and drag it.

  @lb[](img/application-service-crm-svc-all.png)
