define(["jquery", "knockout", "bootstrap"], function ($, ko) {
    ko.components.register("nav-bar", { require: "./components/navBar/navBar" });

    // Start the application
    ko.applyBindings();
  
});
