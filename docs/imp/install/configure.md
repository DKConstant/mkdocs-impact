# Service Impact server configuration files

The Service Impact server configuration files are stored in the
Infrastructure/Impact container. Zenoss recommends that you edit
configurations through the Control Center browser interface, which
ensures that changes are preserved and pushed to new containers on
restarts.

Use the Control Center browser interface to edit and preserve changes to
/opt/zenoss_impact/etc/logback.xml. Modifying logback.xml in the Control
Center browser interface requires a restart of the Service Impact
service for the logging changes to take effect. If you use the command
line to implement logging changes, they are implemented immediately;
however, the changes made using the command line are lost when Service
Impact is restarted.

!!! tip
    To test changes in a pre-production environment, modify configuration
    file settings directly in the container. When Service Impact is
    restarted, all settings are returned to their default value.

 Follow these steps to edit Service
Impact configuration files:

1.  Log in to the Control Center browser interface.
2.  In the Applications table, click Zenoss.resmgr.
3.  Scroll down to the Services list and select Infrastructure/Impact.
4.  Under Configuration Files, click Edit to the right
    of /opt/zenoss/etc/dsa.zenoss-dsa.properties.
    The zenoss-dsa.properties file is displayed in the Edit
    Configuration window.
    Note: Modifying properties might change the performance of Service
    Impact. Before you modify default values, consult Zenoss Support.
5.  Make changes and then click Save.
6.  To activate the changes, restart Service Impact.


