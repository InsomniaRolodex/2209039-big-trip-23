import TripPresenter from './presenter/trip-presenter';
import HeaderPresenter from './presenter/header-presenter';

const tripSection = document.querySelector('.trip-events');
const headerContainer = document.querySelector('.trip-controls__filters');

const tripListPresenter = new TripPresenter({container: tripSection});
const mainHedaerPresenter = new HeaderPresenter ({container: headerContainer});

tripListPresenter.init();
mainHedaerPresenter.init();
