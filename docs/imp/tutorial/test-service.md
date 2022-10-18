# Send events to service members

To see how they affect the availability of the CRM application, send
events to the fake devices.

1.   In the tree view, open the Dashboard organizer, and then select
    CRM - Development Service.
2.   In the main view area, select Impact View.
3.   Gain access to the Resource Manager CLI environment in the ZenHub
    container.
    1.   Log in to the Control Center master host as a user with
        `serviced` CLI
        privileges.
    2.   Start an interactive session in a Zope container as the zenoss
        user.

        ```sh
        serviced service attach zenhub su - zenoss
        ```

4.   Send ping down events to the fake network interface card components
    in the txap15 and txap16 hosts.

    ```sh
    zensendevent -d fake-txap15-nic-0 -c /Status/Ping -s Critical "Impact Tutorial - fake device is DOWN"
    zensendevent -d fake-txap15-nic-1 -c /Status/Ping -s Critical "Impact Tutorial - fake device is DOWN"
    zensendevent -d fake-txap16-nic-0 -c /Status/Ping -s Critical "Impact Tutorial - fake device is DOWN"
    ```

5.   In the browser, click Refresh.

    The Impact View shows that the CRM application availability state
    changed to ATRISK, and the nodes involved in the state change are
    highlighted with yellow and red.

    To see all nodes in the Service Impact graph, click Expand All.

6.   Change the view to Impact Events, and then in the Impact Events
    list, click CRM - Development Service.

    @lb[](img/test-service-crm-impact-events.png)
    The events that contribute to the current state of the CRM
    application are weighted by the root-cause analysis that Service
    Impact performs (the Confidence column). To view the impact chain of
    an event, click the plus button in the left column.

7.   Send ping down events to the fake network interface card components
    in the txdb27 and txdb28 hosts, and then click Refresh.

    ```sh
    zensendevent -d fake-txdb27-nic-0 -c /Status/Ping -s Critical "Impact Tutorial - fake device is DOWN"
    zensendevent -d fake-txdb27-nic-1 -c /Status/Ping -s Critical "Impact Tutorial - fake device is DOWN"
    zensendevent -d fake-txdb28-nic-0 -c /Status/Ping -s Critical "Impact Tutorial - fake device is DOWN"
    ```

    The list of contributing events grows, and the rankings change to
    reflect the added events.

8.   Send clear events to all fake devices that are down.

    ```sh
    zensendevent -d fake-txap15-nic-0 -c /Status/Ping -s Clear "Impact Tutorial - fake device is UP"
    zensendevent -d fake-txap15-nic-1 -c /Status/Ping -s Clear "Impact Tutorial - fake device is UP"
    zensendevent -d fake-txap16-nic-0 -c /Status/Ping -s Clear "Impact Tutorial - fake device is UP"
    zensendevent -d fake-txdb27-nic-0 -c /Status/Ping -s Clear "Impact Tutorial - fake device is UP"
    zensendevent -d fake-txdb27-nic-1 -c /Status/Ping -s Clear "Impact Tutorial - fake device is UP"
    zensendevent -d fake-txdb28-nic-0 -c /Status/Ping -s Clear "Impact Tutorial - fake device is UP"
    ```


