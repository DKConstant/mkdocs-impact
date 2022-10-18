# Future export scenarios and machine learning

In the future, service models for dynamic services that you import might
reference the same service model members that required manual reconcile
actions in a previous import. The previous manual reconciliation and
machine learning of mapped members simplifies each future export.

For example, the service model for dynamic service "S" in a Resource
Manager staging environment refers to devices A,B, and C. In the
production environment, the imported service model must be reconciled to
map to the shared device A, and to equivalent devices X and Y instead of
B and C.

#### Initial import of service model "S" into production

After the initial import, B and C were UNRECONCILED. You created MAP
actions to reconcile B to X and C to Y, and then committed with
svc_export.graphml .latest.txt.

#### Import 2 of service model "S" to the same production system

A few weeks later, an upgrade to service model "S" adds device "D." The
changed service model "S" with devices A,B, C, D is imported into
production, where service model "S" must have entities A,X,Y, Z.
Previously, you mapped and committed the service model with B mapped to
X and C mapped to Y. After import 2, file svc_export.graphml .latest.txt
shows only one UNRECONCILED entry, for added device "D." Resource
Manager learned and automatically mapped B and C to X and Y. This time,
you only need to manually add a MAP action for "D" to "Z", and then
commit.

#### Import 3: initial import of the service model for dynamic service "T"

A third import occurs into production for a different service, "T."
Service model "T" contains devices A and D. After the import and
automatic reconcile attempt, no UNRECONCILED entries exist for "T." That
is, Resource Manager automatically found and mapped A, and used
knowledge from your previous mapping of device D to Z for a different
service import. In production, service model "T" contain devices A and
Z.

#### Import 4: service model "T" with a different mapping of an entity than in "S" service context

A fourth import occurs, this time of service model "T" with service
model members A, B, D. However, in the context of service "T," device B
should be mapped to device "P." In production, service model "T" should
contain service model members A, P, Z.

After the import and automatic reconcile attempt, no UNRECONCILED
entries exist, but svc_export.graphml .latest.txt shows D mapped to Z
and B mapped X. You must manually MAP B to P, reconcile, and them
commit. As a result, the model for service "T" contains A, P, Z.


