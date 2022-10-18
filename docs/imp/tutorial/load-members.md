# Load the service members

The service to model is a CRM application, and it is defined by the
members (resources) on which it relies.

The CRM application relies on application and database hosts and
processes, and on the network infrastructure that connects the service
with its users. This tutorial creates a service model of the development
deployment of the CRM application, not the production or quality
assurance deployments.

The following procedure loads the fake devices into Resource Manager and
sets up the tutorial environment.

1.   Gain access to the Resource Manager CLI environment in a Zope
    container.
    1.   Log in to the Control Center master host as a user with
        serviced CLI privileges.
    2.   Start an interactive session in a Zope container as user
        zenoss.

        ```sh
        serviced service attach zope/0 su - zenoss
        ```

2.   Create a soft link to the Service Impact scripts directory.
    1.   Create a variable for the path of the ZenPacks.zenoss.Impact
        ZenPack.

        ```sh
        my_zp=$(zenpack --list | awk '/\.Impact-/ { print substr($2,2,length($2)-2) }') && echo $my_zp
        ```

    2.   Create the link.

        ```sh
        ln -s $my_zp/ZenPacks/zenoss/Impact/scripts/tutorial ${HOME}/impact_scripts
        ```

3.   Change directory to the Service Impact scripts directory.

    ```sh
    cd ${HOME}/impact_scripts
    ```

4.   Load fake devices and components into Resource Manager.

    ```sh
    zenbatchload --nomodel ./devices.txt
    ```

5.   In tutorial.sh, ensure that the values of the ZENOSS_USERNAME and
    ZENOSS_PASSWORD variables specify the user name and password of a
    Resource Manager user account, and if not, change them.
6.   Set up the tutorial environment.

    ```sh
    ./tutorial.sh
    ```

7.   Log in to the Resource Manager browser interface as a user with
    ZenManager or Manager privileges.
8.   Click SERVICES.

    The Service Impact feature of Resource Manager adds a tab named
    SERVICES to the Resource Manager menu bar.

9.   In the tree view, open the CRM - Development organizer, and then
    open the Application and Compute organizers.

    The tree view displays the service members created by the
    tutorial.sh script, as shown in the following example.

    @lb[](img/load-members-tutorial-setup.png)


