import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('cities');
  this.route('parks');
  this.route('families');
  this.route('bars');
  this.route('movies');
  this.route('restaurants');
  this.route('sports');
  this.route('travels');

  this.route('random');

  this.route('city', { path: 'cities/:city_id' }, function () {

    this.route('bars');
    this.route('bar.new', { path: 'bars/new' });

    this.route('parks');
    this.route('park.new', { path: 'parks/new' });

    this.route('families');
    this.route('family.new', { path: 'families/new' });

    this.route('movies');
    this.route('movie.new', { path: 'movies/new' });

    this.route('restaurants');
    this.route('restaurant.new', { path: 'restaurants/new' });

    this.route('sports');
    this.route('sport.new', { path: 'sports/new' });

    this.route('travels');
    this.route('travel.new', { path: 'travels/new' });
  });

  this.route('notfound', { path: '*path' });
});

export default Router;
