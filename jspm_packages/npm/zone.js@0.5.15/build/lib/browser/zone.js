var core = require('../core');
var browserPatch = require('../patch/browser');
if (global.Zone) {
    console.warn('Zone already exported on window the object!');
}
else {
    global.Zone = core.Zone;
    global.zone = new global.Zone();
    browserPatch.apply();
}
exports.Zone = global.Zone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9icm93c2VyL3pvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDaEMsSUFBWSxZQUFZLFdBQU0sa0JBQWtCLENBQUMsQ0FBQTtBQUVqRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUFDLElBQUksQ0FBQyxDQUFDO0lBQ04sTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFaEMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFWSxZQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgKiBhcyBicm93c2VyUGF0Y2ggZnJvbSAnLi4vcGF0Y2gvYnJvd3Nlcic7XG5cbmlmIChnbG9iYWwuWm9uZSkge1xuICBjb25zb2xlLndhcm4oJ1pvbmUgYWxyZWFkeSBleHBvcnRlZCBvbiB3aW5kb3cgdGhlIG9iamVjdCEnKTtcbn0gZWxzZSB7XG4gIGdsb2JhbC5ab25lID0gY29yZS5ab25lO1xuICBnbG9iYWwuem9uZSA9IG5ldyBnbG9iYWwuWm9uZSgpO1xuXG4gIGJyb3dzZXJQYXRjaC5hcHBseSgpO1xufVxuXG5leHBvcnQgY29uc3QgWm9uZSA9IGdsb2JhbC5ab25lOyJdfQ==