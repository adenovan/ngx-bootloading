# NgxBootloading
MIT LICENSE

Ngx boot Loading is repository of Pre Bootstrap Angular 2 css animation on initial Angular 2 Web apps loading. 
The source of each animation css and html source is available at /lib folder each folder is a Pre Bootstrap loading page! make sure to check the demo

# Demo
First Loading Animation library Bubble-up
https://adenovan.github.io/ngx-bootloading/lib/bubble-up

Line Grow
https://adenovan.github.io/ngx-bootloading/lib/line-grow

More to come

# Usage

put the library template's css on assets folder and don't forget to include the template css on index.html head!

```bash
  <link rel="stylesheet" href="assets/bootloading.min.css">
```

copy html inside body tag on library template lib/folder/index.html and paste on your app-root tag

```bash
<app-root>
    <div class="bootloading-wrapper">
      <img src="assets/logo.png" alt="" class="bootloading-logo">
      <h1 class="bootloading-title">Company Name</h1>
      <div class="bootloading-bubble-wrapper ">
        <div class="dot-1"></div>
        <div class="dot-2"></div>
        <div class="dot-3"></div>
        <div class="dot-4"></div>
        <div class="dot-5"></div>
      </div>
    </div>
</app-root> 
```

# Example
Demo of Angular 2 App use this loading
https://adenovan.github.io/ngx-bootloading

Example Angular 2 project with this initial custom loading animation available at /src folder and was generated with [Angular CLI] (https://github.com/angular/angular-cli) version 1.0.1.

# Contribution

Create a folder in lib/ directory with your Pre Bootstrap loading code,
bubble up is good example using only static css animation and html as a template, make it slim its need to load faster than the Angular 2 App bootstrap!