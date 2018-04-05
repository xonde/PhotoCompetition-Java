Photo Competition - Frontend Model Solution
================================

## Setup Instructions

1. Install [Ruby](https://www.ruby-lang.org/en/) and then run `gem install compass` to install 
[compass](http://compass-style.org/).

2. Update the fields at the top of `js/common.js` with the correct `backendIp` and `user`.

## Development Instructions

Change to the directory containing this README file in your terminal, and run `compass watch`.

Open `index.html` in a web browser, you should see your website.  If you can't see an image on the homepage, then check 
the [JavaScript Console](https://webmasters.stackexchange.com/a/77337) for error messages.

Changes to files in `sass/*` will be automatically compiled to CSS by Compass and placed in `stylesheets/*`.

## Architecture

The project directory structure is:

* `html` - There is one HTML source file for every web page in your site and they define the structure of the site. 
* `sass` - [SASS](https://sass-lang.com/) source files provide the style for the site.
* `stylesheets` - CSS files which are compiled from the SASS files above, since these files are compiled by SASS they 
  are not committed to the codebase.  It is these files, rather than the SASS source, which will be sent to a web 
  browser when it hits your site.  *You should never modify these files directly*. 
* `stylesheets/vendor` - third-party pre-compiled CSS, in this case the `http://getskeleton.com/` library.
* `js` - JavaScript source files, these contain the logic of the application.  
* `js/vendor` - third-party javascript libraries, in our case this is the [JQuery](https://jquery.com/) library.
 