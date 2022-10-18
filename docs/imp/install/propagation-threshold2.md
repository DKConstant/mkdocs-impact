# Configuring the production state propagation threshold

The default value of the Service Impact production state propagation
threshold is Production. You can select a different production state for
the threshold.

!!! warning
    Zenoss recommends changing this threshold only during installation.
    Changes to this this value are not retroactive; the updated value will
    be considered when evaluating new, incoming events.

1.   Log in to the Resource Manager browser interface as a user with
    ZenManager or Manager privileges.
2.   Select the ADVANCED tab, and then click the Impact link in the left
    column.

    @lb[](img/propagation-threshold2-advanced-settings.png)

3.   From the Production State Propagation Threshold list, select a new
    production state, and then click Save.

    Devices are evaluated against the new threshold at the next
    modelling interval. To update all devices before the next modelling
    interval, perform a graph update.


