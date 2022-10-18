# Identifying uncorroborated relationship providers

Many ZenPacks include code that provides the device and component
relationships that Service Impact uses to monitor service health. When
the relationships are fully corroborated, Service Impact can perform
efficiently. Use this procedure to identify the ZenPacks that provide
uncorroborated relationships.

## Creating a report

Important notes about creating a report:

-   This test is only useful for installed ZenPacks that have target
    devices in Resource Manager. Add and model one or more devices for
    which a ZenPack is designed before performing this procedure.

-   Resource Manager does not need to be stopped to perform this test.

-   The test take about as long to run as a graph database update.

Follow these steps:

1.   Log in to the Control Center master host as a user with
    `serviced` CLI privileges.

2.  Identify the delegate hosts where Resource Manager is running.

    ```sh
    serviced host list --show-fields=Pool,Name
    ```

    The name of the resource pool where Resource Manager is running is
    not standardized.

3.  Log in to a delegate host, and then attach to a Zope container.

    1.  Log in to a delegate host in the Resource Manager pool as root
        or as a user with serviced CLI privileges.

    2.   Start an interactive session in a Zope container as user
        `zenoss`.

        ```sh
        serviced service attach zope su - zenoss
        ```

4.  Change directory to `/tmp`.
    The `check-providers` script emits a JSON file in the
    directory where it is invoked.

    ```sh
    cd /tmp
    ```

5.   Create a variable for the path of the ZenPacks.zenoss.Impact
    ZenPack.

    ```sh
    my_zp=$(zenpack --list | awk '/\.Impact-/ { print substr($2,2,length($2)-2) }') && echo $my_zp
    ```

6.  Run the `check-providers` script and save its report to a
    file.

    ```sh
    python $my_zp/ZenPacks/zenoss/Impact/check-providers.py 2>&1 | tee /tmp/check-providers.out
    ```

7.  Display the ID of the container.

    ```sh
    hostname
    ```

8.  Exit the container.

    ```sh
    exit
    ```

9.  Copy the files output by the `check-providers` script
    from the container to the host.
    Replace *CONTAINER-ID* with the ID displayed in step 7:

    ```sh
    docker cp CONTAINER-ID:/tmp/check-providers.out .
    docker cp CONTAINER-ID:/tmp/check-providers.json .
    ```

## Interpreting a report

The following sample shows a `check-providers.py` report (`check-providers.out`):

```sh
INFO:zen.ProviderChecker:calculating relationships for all service objects
INFO:zen.ProviderChecker:calculating devices and components
INFO:zen.ProviderChecker:calculating device organizers
INFO:zen.ProviderChecker:impact relationship provider summary

Totals:
  Edge types with multiple providers: 0
  Uncorroborated edge types: 3

Uncorroborated edge types:

- [ZenPacks.zenoss.HP.Proliant.HPManagementController.HPManagementController]->[Products.ZenModel.Device.Device]
  provider: ZenPacks.zenoss.HP.Proliant.dynamicview.DeviceRelationsProvider

- [ZenPacks.zenoss.AWS.EC2Instance.EC2Instance]->[ZenPacks.zenoss.Kubernetes.K8sNode.K8sNode]
  provider: ZPL-DynamicView|ZenPacks.zenoss.Kubernetes.K8sNode.K8sNode

- [ZenPacks.zenoss.HP.Proliant.HPChassis.HPChassis]->[Products.ZenModel.Device.Device]
  provider: ZenPacks.zenoss.HP.Proliant.dynamicview.DeviceRelationsProvider


INFO:zen.ProviderChecker:writing full report to check-providers.json
INFO:zen.ProviderChecker:check complete
```

If the value for `Uncorroborated edge types`, **is not** zero (`0`), send the report and the `check-providers.json` file
to Zenoss Support and ask for advice.


