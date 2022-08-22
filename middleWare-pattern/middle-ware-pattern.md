### Middleware Pattern
> Single Point of Contact to communicate between components. All the components should communicate with the *Middleware* in order to contact with another component.

The middleware takes the request and forward it to the appropriate component.
This Pattern is used by express middleware.

*** Middleware Pattern make it simple that every communication should flow through one channel Instead of creating many to many component communcation relationships.***
