var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.resource('home', function(){
        this.route('about');
    });
    this.resource('navigation', function(){});
    this.resource('fourma', function(){});
});

export default Router;
