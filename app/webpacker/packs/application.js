// js imports
import "bootstrap"
import Rails from "rails-ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "activestorage";
import "./comments"

// css imports
import "../src/application.scss"

Rails.start();
Turbolinks.start();
ActiveStorage.start();
console.log('Hello World from Webpacker')
