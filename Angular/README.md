# Implementation of Angular to demonstrate the behavior of Form, Routing and Services
To use bootstrap, add the line below in [styles.css](src/styles.css)<br>
`
@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');
`
## [Pipes](https://angular.io/guide/pipes#pipes)<br>
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

## [Form: Template Driven Form](https://angular.io/guide/forms)<br>
   1.  Build an Angular form with a component and template<br>
       **Step 1**: Create a new model class `ng generate class User`<br>
       **Step 2**: In the constructor of User class, add attributes. Refer [user.ts](src/app/user.ts) <br>
       **Step 3**: Create a new form component `UserForm` by typing `ng generate component UserForm`. Import in _app.module.ts_<br>
       **Step 4**: Add HTML code in [user-form.component.html](src/app/user-form/user-form.component.html)<br>
       **Step 5**: Update [user-form.component.ts](src/app/user-form/user-form.component.ts)<br>
       **Step 6**: Use `<app-user-form></app-user-form>` in _app.component.html_<br>
   2.  [ngModel to create two-way data bindings for reading and writing input-control values](https://angular.io/guide/forms#two-way-data-binding-with-ngmodel)<br>
       **Step 1**: Add `[(ngModel)] = "model.attribute"` in `<input>` tags in the form in [user-form.component.html](src/app/user-form/user-form.component.html)<br>

   3.  [Track state changes and the validity of form controls](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel)<br>
       **Step 1**: Add `#spy` in the end of `<input>` tags in the form [user-form.component.html](src/app/user-form/user-form.component.html)<br>
       **Step 2**: After the `<input>` tags, add `<br>Control state and validity: {{spy.className}}` to view the state changes and validity.
       |State|Class if true|Class if false
       |:--- |:------------|:------------
       |Control has been visited|ng-touched|ng-untouched
       |Control's value has changed|ng-dirty|ng-pristine
       |Control's value is valid|ng-valid|ng-invalid

   4.  [Handle form submission with ngSubmit](https://angular.io/guide/forms#submit-the-form-with-ngsubmit)<br>
       Add `(ngSubmit)="onSubmit()" ` in the `<form>` tag and `[disabled]="!userForm.form.valid"` in the submit `<button>` opening tag<br>
## Custom Directive: Demonstrate the use of Custom Directive as
   1. Component
      ```
      @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
      })
      ```
   2.  Attribute: Changes the appearance or behaviour of a DOM element<br>
   **Step 1**: Create a nre directive `ng generate directive directive-name`. `highlight` here<br>
   **Step 2**: Write the code to modify the DOM element in [highlight.directive.ts](src/app/highlight.directive.ts)<br>
   **Step 3**: Use the selector defined in the `highlight.directive.ts` with some color value in HTML to allow the directive to modify the css property.<br>
  
   3.  Structural: Changes DOM layout by adding and removing DOM elements<br>
   **Step 1**: Create a new directive `ng generate directive directive-name`. `hideElement` here<br>
   **Step 2**: Write the code to hide/show DOM element in [hide-element.directive.ts](src/app/hide-element.directive.ts)<br>
   **Step 3**: Use the selector defined in the `hide-element.directive.ts` with some boolean value in HTML.<br>
   > Note: The @Input decorator used in the `hide-element.directive.ts` file makes data flow from the binding expression into the directive.<br>


## [Routing: Demonstrate the use of Routing used in angular](https://angular.io/guide/router)<br>
**Step 1**: Create new components as required for routing. Add respective HTML codes.<br>
**Step 2**: Write Router Configuration in [app-routing.module.ts](src/app/app-routing.module.ts). Write the component class names in the `route` array<br>
**Step 3**: Import AppRoutingModule in [app.module.ts](src/app/app.module.ts)<br>
**Step 4**: Use `<router-outlet></router-outlet>` tags in [app.component.html](src/app/app.component.html)<br>

Each route can have the following properties:
- `path`: string, path to match the URL
- `pathMatch`: string, how to match the URL
- `component`: class reference, component to activate when this route is activated
- `redirectTo`: string, URL to redirect to when this route is activated
- `data`: static data to assign to route
- `resolve`: dynamic data to resolve and merge with data when resolved
- `children`: child routes

Angular Router has two matching strategies:
- `prefix`: default, matches when the URL starts with the value of path
- `full`: matches when the URL equals the value of path

There are two ways to create a routing module:
- `RouterModule.forRoot(routes)`: creates a routing module that includes the router directives, the route configuration and the router service
- `RouterModule.forChild(routes)`: creates a routing module that includes the router directives, the route configuration but not the router service. It is needed when the application has multiple routing modules.


## [Services and Injectable](https://www.concretepage.com/angular-2/angular-2-services-example-using-injectable)<br>
> Service has the functions to handle the cart operations<br>

**Step 1**: Create a new class `Item` using `ng generate class Item`, write the schema in [item.ts](src/app/item.ts)<br>
**Step 2**: Create a list of items to be displayed on the product page in [sample-items.ts](src/app/sample-items.ts)<br>
**Step 3**: Create a new service for listing the items on the product page by typing `ng generate service item`<br>
**Step 4**: Write the cart handling functions in [item.service.ts](src/app/item.service.ts)<br>
**Step 5**: Create two components `store` and `cart` that will use the service<br>
**Step 6**: Inject the service in [store.component.ts](src/app/store/store.component.ts) and [cart.component.ts](src/app/cart/cart.component.ts)<br>
**Step 7**: Use the respective selectors in _app.component.html_ to render the products in store and cart.<br>

 
