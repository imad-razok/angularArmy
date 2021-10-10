property binding => [style]='some style' or bind-style ='some style' : one way
interpolation => {{ property}} : one wey
event binding => (click) = "methodName()" or on-click =""methodName()": one way
too way binding =><input type="text" [value]="username" (input)="username = $event.target.value"/>
