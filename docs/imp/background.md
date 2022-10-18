# Introduction

Zenoss Service Impact provides two key functions that help you reduce
the time it takes to uncover and fix issues, and to eliminate unforced
outages. These functions are:

**[Root cause analysis](#root-cause-analysis)** identifies
infrastructure dependencies that are supporting a service and how status
and performance issues might be affecting the overall service.

**[Impact analysis](#impact-analysis)**
identifies which services are affected by a particular piece of
infrastructure.

## Root cause analysis

For example, consider a service we&rsquo;ll call Simple LAMP - a two tier web
application service. The elements of the service are an Apache process
serving web pages and a MariaDB database process that stores and
retrieves dynamic data.

Here's a representation of Simple LAMP:

@lb[](img/background-impact-intro-lamp-1.png)

There's much more to it, of course. When we consider the infrastructure
that these two applications rely on, the drawing gets more complex. The
processes run on separate Linux operating systems, which might be
running in virtual machines on one or more hypervisors, with backing
storage provided by a storage array.

Here's a more realistic view of Simple LAMP:

@lb[](img/background-impact-intro-lamp-2.png)

Service Impact automatically builds and maintains a model of the
relationship among the service elements and their infrastructure
dependencies. For the Apache and MariaDB processes, the operating
systems, virtual machines, hypervisor, datastore, and storage array are
all dependencies. What happens if the two virtual machines move to a new
hypervisor? Or a public cloud? Service Impact automatically adjusts its
model to track the proper dependencies. You don&rsquo;t have to make any
configuration changes, as long as the new infrastructure is being
monitored by Resource Manager.

If the Simple LAMP service isn&rsquo;t acting properly, Service Impact can
help you discover where faults originate. We call this **root cause
analysis** . Here&rsquo;s how it works.

Zenoss Resource Manager routinely collects state change data and
generates threshold events where performance metrics are out of the
norm. Service Impact determines which state change and threshold events
apply to the Simple LAMP service—including the dependencies and
generates a state for the service. Each time the state of the service
changes, Service Impact generates an event that you can use to generate
a service ticket, send an email, or start corrective action (see
[Triggers and notifications](/not-migrated.html)).

For example, let&rsquo;s pretend that the Hypervisor doesn&rsquo;t have enough CPU
capacity to meet all the demand. Resource Manager generates a critical
CPU Threshold Event for the hypervisor. Since everything in the Simple
LAMP service relies on the hypervisor, Service Impact sets the state of
the service to indicate that the service is in a critical performance
state, and identifies the event on the hypervisor as the root cause of
the event.

Here's an illustration of the hypervisor event:

@lb[](img/background-impact-intro-lamp-3.png)

## Impact analysis

Impact Analysis helps teams identify whether any key services are being
supported by a particular piece of infrastructure. This can prevent
downtime caused by operational errors, such as forgetting to migrate
virtual machines from a hypervisor before applying patches.

Once you&rsquo;ve defined services for root cause analysis, impact analysis is
performed automatically. To see which services rely on a piece of
infrastructure, click on the Services view. In the following example,
nine services rely on the VMware host named `ucs1-3-8-zenoss.loc`.

@lb[](img/background-image7.png)


