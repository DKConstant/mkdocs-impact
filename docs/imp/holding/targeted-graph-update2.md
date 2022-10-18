# Tuning targeted graph update

Adjusting targeted graph update settings might cause performance
degradation. Change settings only if instructed to do so by Zenoss
Support.

1.   To change settings, open the
    /opt/zenoss_impact/etc/zenoss-dsa.properties configuration file.

    For instructions, see [Service Impact server configuration files](/imp/install/configure.html).

2.   To change the number of nodes that Service Impact processes per
    batch job, increase or decrease the value of
    dsa.zenoss.batch_size=100.

    By default, 100 nodes are processed in one update job.

3.   To change the frequency of targeted updates, increase or decrease
    the value of dsa.zenoss.time_period=30.

    By default, the targeted updates occur every 30 seconds as needed.

4.   After changing values, save the file.
5.   To activate the changes, restart Service Impact.


