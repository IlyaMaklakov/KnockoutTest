define(["knockout", "text!./navBar.html"], function(ko, template) {
    function NavBarViewModel() {
        this.triagedText = ko.computed(function() {
            return 'Triaged ';
        });
        this.untriagedText = ko.computed(function() {
            return 'Untriaged ';
        });
    }

    NavBarViewModel.prototype.dispose = function() {
        this.triagedText.dispose();
        this.untriagedText.dispose();
    };

    return { viewModel: NavBarViewModel, template: template };
});
