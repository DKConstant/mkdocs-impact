# Configuring relationship processing

Use this procedure to configure Resource Manager and Service Impact to
use lazy or eager relationship processing.

-   Lazy mode is the default setting for release 5.5.x, and it is the
    appropriate choice when all of the ZenPacks that you use to monitor
    devices have been updated for optimal relationship processing.

-   Eager mode ensures high-accuracy models at the potentially
    unacceptable cost of low remodeling performance. In large or complex
    environments, long remodeling times can generate inaccuracies in the
    model as changes to the underlying devices are processed. Eager mode
    is appropriate for customers with smaller and less complex models
    and a low rate of model changes.

Perform these steps:

1.  Log in to the Control Center browser interface.

2.  Navigate to the Applications &gt; Zenoss.resmgr page.

    @lb[](img/relationship-processing-app-rm.png)

3.  On the application title line, click Edit Variables.

    @lb[](img/relationship-processing-edit-vars.png)

4.  In the Edit Variables dialog box, add the following variable:

    ```sh
    global.conf.corroborating-relationship-provider True
    ```

    -   To configure lazy relationship processing, set the value to
        `True`.

    -   To configure eager relationship processing, set the value to
        `False`.

        !!! warning
            If you switch the processing mode from lazy to eager (change the
            value from `True` to
            `False` ), you must [rebuild the graph](/imp/install/graph-rebuild-5.4.html).

5.  At the bottom of the Edit Variables dialog box, click Save.

6.  On the application title line, click Restart.


