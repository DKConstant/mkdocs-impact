# State propagation

State propagation policies for a dynamic service context determine how
the Availability and Performance state of an entity's node and the nodes
it impacts change because of events being received to that entity.

When new events occur against a service model member (device, component,
component group, logical node, organizing group, or dynamic service)
Service Impact identifies all of the service contexts in which that
member participates. For each service context, Service Impact performs
the following processing:

-   Applies the combination of global, service, and node context
    policies to decide the state of that member in this service context.
-   If the combination of policies indicate that the event should be
    propagated further within the service context, looks up all impact
    dependency relationships that exist for other nodes in the same
    service context. Different relationships can exist in other service
    contexts.
-   Applies the service context polices to each of those nodes to
    compute their new state in the service context and decide whether to
    continue propagating further. Propagation of state change and event
    continues until all state and event propagations are completed.
-   If any path through the impact graph affects the dynamic service
    itself, generates a service event. The service event includes
    details about the path from the event to the service model member
    through the impact graph to reach the dynamic service. Multiple
    paths through the graph from a single member's event might reach the
    dynamic service node, and multiple concurrent events to different
    members. Therefore, details of a service event include the union
    list of all service event paths and a probability ranking of which
    path and originating member event is the root cause.

For a service model member that you use only to group child members, you
can suppress sending service events.

You can create and assign multiple policies to any service member. In
the Impact View, to select the type of policy that you want to create,
edit, or view, select the Availability aspect or the Performance aspect.

The policy type that is applied to the members determines which members
receive the data. The policy types, in order of precedence are as
follows. For more information about state symbols and borders that are
shown in the examples, see [Actual and derived state](/imp/derived-state.html).

1.  A contextual policy propagates the member's state change only to its
    immediate parent members within the current service context.

    In the following example graph, a contextual policy is applied to
    the service model for Dynamic Service B (DynSvc-B). The policy
    states that if one child member is down, then the state of DynSvc-B
    must be degraded.

    @lb[](img/state-propagation-policy-context-propagation.png)

2.  A global policy applies to all service model contexts that share an
    member that has a changed state. For example, if a global policy is
    applied to a member in a service model, and a child member has a
    change to its state data, the new state is propagated to the parent
    members in all service models to which the member belongs.

    The following example graph shows that DynSvc-D is used in two
    different service models: DynSvc-C and DynSvc-E. The global policy
    propagates the degraded state to all service contexts of which
    DynSvc-D is a member.

    @lb[](img/state-propagation-policy-global-propagation.png)

3.  A member with the default policy sends the state data of the worst
    condition affecting it to its parent member. The default policy is
    negated if you add either a contextual or global policy to a service
    model.

    In the following example graph, no policy is applied to DynSvc-B.
    Its state is down because that is the worst case of its children.

    @lb[](img/state-propagation-default-policy.png)

If multiple policies are applied to a member, then the following
overrides occur:

-   A contextual policy overrides a global policy.
-   Contextual and global polices override the default policy.


