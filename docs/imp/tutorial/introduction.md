# Introduction to the tutorial environment

The tutorial.sh script creates the following service model members and
organizers to initialize the CRM service model in Service Impact. Use
of these members and organizers is a recommended best practice.

-    Dashboard organizer; root-level organizer for service models as a
    whole. Initially, the organizer is empty.

-   Root-level CRM - Development organizer that contains additional
    organizers. Use a single root-level organizer to contain the
    subservices of each service model, and use standardized names (and
    contents) for sub-organizers.

-    CRM - Application Service and CRM - Compute Service service model
    members, children of the CRM - Development organizer.

    These members summarize the application and compute services that
    are associated with the CRM application. They are easily located
    without having to open the organizers in which their constituent
    subservices are located.

-   Members in the Network organizer that start with zfake represent the
    network connections between fake devices.

    Because these fake devices are not modeled, Resource Manager cannot
    discern their relationships, and Service Impact cannot create device
    or component members. Therefore, the script creates members to
    represent the connections.

    These members have neither contextual nor global policies, so the
    default policy applies. That is, the state of the worst condition
    that affects child members becomes the state of the zfake members,
    which is the correct policy for these connections.

-   DNS and interface names that follow a naming convention.

-   Subservice members in the Network organizer that start with tx,
    which contain redundant resources. Standardized, global availability
    policies are defined.

    These subservice members demonstrate the following **best
    practices** :

    -   Each subservice member contains homogeneous child members.
        Global policies work best when child members are homogeneous.
    -   Each subservice uses global policies. Global policies can be
        re-used across service model boundaries. Contextual policies are
        restricted to specific service models.
    -   Each global policy contains the following, standardized
        availability state triggers: ATRISK if 50% or more child members
        are down; DOWN if 100% of child members are down. Use of
        percentage thresholds means that the policies do not need to be
        adjusted if additional resources are deployed later. Note: The
        standardized state triggers that are used in this case are
        examples of systematically thinking about and using global
        policies, and not intrinsically best practices. For example, if
        a resource pool contains more than two members, additional state
        triggers can be defined.

The remaining procedures in this tutorial demonstrate how to complete
and test the CRM service model.

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

    # Load the service members 2

    The tutorial uses the following fake devices and service model member
    types (Resource Manager device or component).

    ## Application host 15

    |                   |                          |             |
    |:------------------|:-------------------------|:------------|
    | Device name       | Description              | Member type |
    | fake-txap15       | Application host 15      | Device      |
    | fake-txap15-httpd | Apache daemon            | Component   |
    | fake-txap15-java  | Java/JRE daemon          | Component   |
    | fake-txap15-nic-0 | Network interface card 0 | Component   |
    | fake-txap15-nic-1 | Network interface card 1 | Component   |

    ## Application host 16

    |                   |                          |             |
    |:------------------|:-------------------------|:------------|
    | Device name       | Description              | Member type |
    | fake-txap16       | Application host 16      | Device      |
    | fake-txap16-httpd | Apache daemon            | Component   |
    | fake-txap16-java  | Java/JRE daemon          | Component   |
    | fake-txap16-nic-0 | Network interface card 0 | Component   |
    | fake-txap16-nic-1 | Network interface card 1 | Component   |

    ## Database host 27

    |                    |                          |             |
    |:-------------------|:-------------------------|:------------|
    | Device name        | Description              | Member type |
    | fake-txdb27        | Database host 27         | Device      |
    | fake-txdb27-mysqld | MySQL daemon             | Component   |
    | fake-txdb27-nic-0  | Network interface card 0 | Component   |
    | fake-txdb27-nic-1  | Network interface card 1 | Component   |

    ## Database host 28

    |                    |                          |             |
    |:-------------------|:-------------------------|:------------|
    | Device name        | Description              | Member type |
    | fake-txdb28        | Database host 28         | Device      |
    | fake-txdb28-mysqld | MySQL daemon             | Component   |
    | fake-txdb28-nic-0  | Network interface card 0 | Component   |
    | fake-txdb28-nic-1  | Network interface card 1 | Component   |

    ## Firewall 17

    |                   |                        |             |
    |:------------------|:-----------------------|:------------|
    | Device name       | Description            | Member type |
    | fake-txfw17       | Firewall 17            | Device      |
    | fake-txfw17-10g-0 | Port 0 (10GB capacity) | Component   |
    | fake-txfw17-10g-1 | Port 1 (10GB capacity) | Component   |
    | fake-txfw17-10g-2 | Port 2 (10GB capacity) | Component   |
    | fake-txfw17-10g-3 | Port 3 (10GB capacity) | Component   |
    | fake-txfw17-1g-0  | Port 0 (1 GB capacity) | Component   |

    ## Firewall 25

    |                   |                        |             |
    |:------------------|:-----------------------|:------------|
    | Device name       | Description            | Member type |
    | fake-txfw25       | Firewall 25            | Device      |
    | fake-txfw25-10g-0 | Port 0 (10GB capacity) | Component   |
    | fake-txfw25-10g-1 | Port 1 (10GB capacity) | Component   |
    | fake-txfw25-10g-2 | Port 2 (10GB capacity) | Component   |
    | fake-txfw25-10g-3 | Port 3 (10GB capacity) | Component   |
    | fake-txfw25-1g-0  | Port 0 (1 GB capacity) | Component   |

    ## Router 12

    |                    |                         |             |
    |:-------------------|:------------------------|:------------|
    | Device name        | Description             | Member type |
    | fake-txrt12        | Router 12               | Device      |
    | fake-txrt12-100g-0 | Port 0 (100GB capacity) | Component   |
    | fake-txrt12-10g-0  | Port 0 (10GB capacity)  | Component   |
    | fake-txrt12-10g-1  | Port 1 (10GB capacity)  | Component   |
    | fake-txrt12-1g-0   | Port 0 (1GB capacity)   | Component   |

    ## Router 23

    |                    |                         |             |
    |:-------------------|:------------------------|:------------|
    | Device name        | Description             | Member type |
    | fake-txrt23        | Router 23               | Device      |
    | fake-txrt23-100g-0 | Port 0 (100GB capacity) | Component   |
    | fake-txrt23-10g-0  | Port 0 (10GB capacity)  | Component   |
    | fake-txrt23-10g-1  | Port 1 (10GB capacity)  | Component   |
    | fake-txrt23-1g-0   | Port 0 (1GB capacity)   | Component   |

    ## Switch 172

    |                    |                        |             |
    |:-------------------|:-----------------------|:------------|
    | Device name        | Description            | Member type |
    | fake-txsw172       | Switch 172             | Device      |
    | fake-txsw172-10g-0 | Port 0 (10GB capacity) | Component   |
    | fake-txsw172-10g-1 | Port 1 (10GB capacity) | Component   |
    | fake-txsw172-1g-0  | Port 0 (1GB capacity)  | Component   |
    | fake-txsw172-1g-1  | Port 1 (1GB capacity)  | Component   |
    | fake-txsw172-1g-2  | Port 2 (1GB capacity)  | Component   |
    | fake-txsw172-1g-3  | Port 3 (1GB capacity)  | Component   |
    | fake-txsw172-1g-4  | Port 4 (1GB capacity)  | Component   |

    ## Switch 235

    |                    |                        |             |
    |:-------------------|:-----------------------|:------------|
    | Device name        | Description            | Member type |
    | fake-txsw235       | Switch 235             | Device      |
    | fake-txsw235-10g-0 | Port 0 (10GB capacity) | Component   |
    | fake-txsw235-10g-1 | Port 1 (10GB capacity) | Component   |
    | fake-txsw235-1g-0  | Port 0 (1GB capacity)  | Component   |
    | fake-txsw235-1g-1  | Port 1 (1GB capacity)  | Component   |
    | fake-txsw235-1g-2  | Port 2 (1GB capacity)  | Component   |
    | fake-txsw235-1g-3  | Port 3 (1GB capacity)  | Component   |
    | fake-txsw235-1g-4  | Port 4 (1GB capacity)  | Component   |
    
