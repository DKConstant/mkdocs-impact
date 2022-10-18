# Internet connections 5

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


