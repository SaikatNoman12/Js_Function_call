# JavaScript Function call() method and apply() method.

# function call() method:-
The javaScript call() method is a predefined JavaScript method. 

It can be used to invoked (call) a method with an owner object as an argument (parameter).

call() method use another object.

The call() method can accept arguments. But the first argument must always write an object. It's mandatory. Then write another arguments. Only one object are allowed. But multiple arguments can be written. So, these arguments can only be accessed within the parent object's functions.

## call() method writing syntax:-

Use only object:-

parentObjectName.functionName.call(objectName);

Use object and argument:-

parentObjectName.functionName.call(objectName, 'Feni', 'Bangaldesh');



# function apply() method:-

The apply() method is similar to the call() method.

## The difference between call() & apply() method

1. The call() method takes arguments separately.
   example: parentObjectName.functionName.call(objectName, 'Feni', 'Bangaldesh');

2. The apply() method takes arguments as an array.
   example: parentObjectName.functionName.call(objectName, ['Feni', 'Bangladesh']);

 