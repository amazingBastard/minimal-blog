# Minimal Blog

Minimal markdown blog built with meteor for anyone with a portfolio.

Demo here: [damir.meteor.com](http://damir.meteor.com).

<!-- toc -->

* [Roadmap](#roadmap)
  * [Features](#features)
  * [Refactoring](#refactoring)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

<!-- toc stop -->

## Roadmap

### Features

* ~~Markdown editor for posts and work~~
* ~~Admin account for insert/update/delete~~
* ~~social media sharing~~
* ~~mailchimp subscription form~~

### Refactoring

* update ui/ux for insert/update/delete module
* create next/prev navigation for post/project views
* update ui/ux for desktop/tablet navigation

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:amazingBastard/minimal-blog.git
cd minimal-blog
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

There are other ways to deploy to your server if you want to use port 80. Here is a [step by step guide from Digital Ocean](http://devo.ps/blog/deploy-your-meteor-apps-on-digital-ocean-in-5-minutes/).

### SEO and other concerns

> Meteor cannot do SEO

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. Use constants under
__client/lib/constants.js__ for the app. Change SEO settings inside the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](https://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Routing
  * [iron:router](https://github.com/EventedMind/iron-router)
  * [multiply:iron-router-progress](https://github.com/Multiply/iron-router-progress/)
  * [zimme:iron-router-active](https://github.com/zimme/meteor-iron-router-active/)
  * [reywood:iron-router-ga](https://github.com/reywood/meteor-iron-router-ga)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:semantic-ui](https://github.com/meteor-useraccounts/semantic-ui)
* Collections
  * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css/)
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS/)
  * [markdown](https://atmospherejs.com/meteor/markdown)
  * [tdj:elasticjs](https://atmospherejs.com/tdj/elasticjs)
  * [mrt:flash-messages](https://github.com/camilosw/flash-messages/)
  * [joshowens:shareit](https://github.com/meteorclub/shareit/)
  * [obvio171:disqus](https://github.com/obvio171/meteor-disqus)
  * [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp)
* SEO
  * [manuelschoebel:ms-seo](https://github.com/DerMambo/ms-seo)
* Development
  * [less](https://github.com/meteor/meteor/tree/devel/packages/less)
  * [momentjs:moment](https://github.com/moment/moment/)
  * [meteorhacks:npm](https://github.com/meteorhacks/npm)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more
	views/			    # Contains all views
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection
private/                # Private files
public/                 # Public files
routes/                 # All routes
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
```

## License
This project has an MIT License, see the LICENSE.txt for more information.
