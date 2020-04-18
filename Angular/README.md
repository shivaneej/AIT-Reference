# Implementation of Angular to demonstrate the behavior of Form, Routing and Services
To use bootstrap, add the line below in [styles.css](src/styles.css)<br>
`
@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');
`
## Pipes ([Documentation](https://angular.io/guide/pipes#pipes))
A pipe takes in data as input and transforms it to a desired output<br>
>Note: `FormsModule` has also been imported to implement this. Import by adding `FormsModule` in `imports` array of [app.module.ts](src/app/app.module.ts)
      <br>
   1. **Angular inbuilt pipes**
      - [List of built-in pipes](https://angular.io/api?type=pipe)
      - Inside the interpolation expression {{ }} in [app.component.html](src/app/app.component.html), flow the component's value through the pipe operator ( | ) to the pipe function on the right
      - Use the pipe in [app.component.html](src/app/app.component.html)
      - Pipe code in class of [app.component.ts](src/app/app.component.ts) file
      - Make sure the `selector` of the component is used in [index.html](src/index.html)
      - Add the classname in the `declarations` array of [app.module.ts](src/app/app.module.ts)
      
   2. **[Customized pipes](https://angular.io/guide/pipes#custom-pipes)**<br>
   If you choose to inject your pipe into a class, you must provide it in the providers array of your NgModule.<br>
      - Pass arguments in Custom pipe<br>
      **Step 1**: Create a new file [join-name.component.ts](src/app/join-name.component.ts). This file will use the custom pipe. Add the template in some external HTML file (Like in [app.component.ts](src/app/app.component.ts)) or directly add the HTML code (Like in [join-name.component.ts](src/app/join-name.component.ts))  <br>
      **Step 2**: Write the custom pipe code in [join-name.pipe.ts](src/app/join-name.pipe.ts)<br>
      **Step 3**: Pay attention to the class names in Step 1 and Step 2<br>
      **Step 4**: Either add the selector of `JoinNameComponent` in [app.component.html](src/app/app.component.html) or directly in [index.html](src/index.html)<br>
      **Step 5**: Register the JoinNameComponent and JoinNamePipe in `declarations` array of [app.module.ts](src/app/app.module.ts)<br>
      
      - Use inbuilt pipe in Custom Pipe<br>
      **Step 1**: Import the pipe you want to use in [join-name.pipe.ts](src/app/join-name.pipe.ts). `TitleCasePipe` has been imported here. <br>
      **Step 2**: Add `TitleCasePipe` in `providers` array of [app.module.ts](src/app/app.module.ts)<br>

      - [Chaining of Custom pipe](https://angular.io/guide/pipes#chaining-pipes)<br>
      **Step 1**: Create a new pipe in [reverse-string.pipe.ts](src/app/reverse-string.pipe.ts)<br>
      **Step 2**: Import this pipe in `declarations` array.<br>
      **Step 3**: Chain both the pipes in {{ }} in template of [join-name.component.ts](src/app/join-name.component.ts)<br>

      - [Pure and impure custom pipe](https://angular.io/guide/pipes#pure-and-impure-pipes)<br>
      **Step 1**: Create a new file [locations.ts](src/app/locations.ts) with list items<br>
      **Step 2**: Create two html files [locations-pure.component.html](src/app/locations-pure.component.html) and [locations-impure.component.html](src/app/locations-impure.component.html)<br>
      **Step 3**: Add the pipe code in [filter-locations.pipe.ts](filter-locations.pipe.ts)<br>
      **Step 4**: Create a file [locations.component.ts](src/app/locations.component.ts)<br>
      **Step 5**: Import both the pipes and components in `declarations` array of [app.module.ts](src/app/app.module.ts)<br>

## Form: Template Driven Form
   1.  Build an Angular form with a component and template.
   2.  Use ngModel to create two-way data bindings for reading and writing input-control values
   3.  Track state changes and the validity of form controls.
   4.  Handle form submission with ngSubmit.
## Custom Directive: Demonstrate the use of Custom Directive as
   1. Component
   2.  Attribute
   3.  Structural
## Routing: Demonstrate the use of Routing used in angular
## Services and Injectable: