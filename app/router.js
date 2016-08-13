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

  this.route('city', { path: 'cities/:city_id' }, function () {

    this.route('park.new', { path: 'parks/new' });

    this.route('family.new', { path: 'families/new' });

    this.route('bar.new', { path: 'bars/new' });

    this.route('movie.new', { path: 'movies/new' });

    this.route('restaurant.new', { path: 'restaurants/new' });

    this.route('sport.new', { path: 'sports/new' });

    this.route('travel.new', { path: 'travels/new' });
  });
});

export default Router;
