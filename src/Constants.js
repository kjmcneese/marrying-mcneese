class Constants {

  // general
  static comingSoon() {
    return "Coming Soon!";
  }

  static goText() {
    return "Go";
  }

  static success() {
    return "Your action was successful!";
  }

  static actionFailure() {
    return "Uh oh! Your action failed. We're sorry. Please contact Kyle or Lauren.";
  }

  static dataLoadFailure() {
    return "Uh oh! There was an issue loading data. We're sorry. Please contact Kyle or Lauren.";
  }

  static nameLabel() {
    return "Name";
  }

  static attendingLabel() {
    return "Attending";
  }
  
  static dinnerMealLabel() {
    return "Dinner Meal";
  }

  static commentsLabel() {
    return "Comments";
  }

  static formGoodFeedback() {
    return "Looks good!";
  }

  static submit() {
    return "Submit";
  }

  // vendors home section
  static vendorsComingSoon() {
    return "More " + this.comingSoon();
  }

  // wedding home section
  static untilIDo() {
    return "until I Do";
  }

  static tiedTheKnot() {
    return "We tied the knot!";
  }

  // accommodations route
  static accommodationsPageTitle() {
    return "Accommodations";
  }

  static accommodationsPageNotice() {
    return "We've blocked rooms at these hotels. More Coming Soon!";
  }

  // photos route
  static photosPageTitle() {
    return "Photos";
  }

  static photosPageNotice() {
    return "Professional photography by the lovely ";
  }

  // registries route
  static registriesPageTitle() {
    return "Registries";
  }

  static registriesPageNotice() {
    return "We set up registries at these places.";
  }

  // rsvp route
  static rsvpPageTitle() {
    return "RSVP";
  }

  static rsvpPageNotice() {
    return "Please only RSVP if you were invited to the events. If given a +1, please RSVP for them as well.";
  }

  static namePlaceholder() {
    return "Who are you?";
  }

  static formInvalidName() {
    return "Don't forget who you are!";
  }

  static commentsPlaceholder() {
    return "Anything else we need to know?!";
  }
}

export default Constants;