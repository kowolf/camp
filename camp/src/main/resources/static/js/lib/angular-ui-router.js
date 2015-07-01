



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
  <meta http-equiv="Content-Language" content="en">
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114-precomposed.png">
  <meta name="google-analytics" content="UA-3769691-2">
    <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  
  <meta content="Rails, view, blob#show" name="analytics-event" />
  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension3" content="mobile">

  <meta content="authenticity_token" name="csrf-param" />
<meta content="JBHrMO3LiR4U4LexIL7dAdaJ7VCuL0l6nAB5NkyJWj8uiuxJjlarAHaVWDb+6iadtchexBOSv/50MGC3/lUqZQ==" name="csrf-token" />

  <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="46C4D1D2:06C2:5AB459B:5574960B" name="octolytics-dimension-request_id" />
  <meta content="mobile" name="octolytics-dimension-device" />
  <meta content="1530011" name="octolytics-dimension-user_id" /><meta content="angular-ui" name="octolytics-dimension-user_login" /><meta content="7693799" name="octolytics-dimension-repository_id" /><meta content="angular-ui/ui-router" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7693799" name="octolytics-dimension-repository_network_root_id" /><meta content="angular-ui/ui-router" name="octolytics-dimension-repository_network_root_nwo" />
  

  <title>GitHub · Build software better, together.</title>

  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/mobile/index-6b9d2079a22242c5215b0fe5bda28dcbad179397226b064485e9a0bfff508256.css" media="all" rel="stylesheet" />
  <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/mobile/index-1945aafeb51218b7e01846581bdb166c34b72bf5d67c5031646d689bac199f65.js"></script>
</head>
<body class="">
  <header class="nav-bar">
    <div class="nav-bar-inner">
      

      <button class="header-button header-nav-button touchable js-show-global-nav">
        <span class="octicon octicon-three-bars"></span>

      </button>

      <div class="nav-bar-title-text">
              <span class="octicon octicon-repo"></span>

    <strong><a href="/angular-ui">angular-ui</a></strong>
    /
    <strong><a href="/angular-ui/ui-router">ui-router</a></strong>

      </div>
    </div>


    <nav class="nav-bar-tabs repo-nav-bar-tabs">
      <ul>
        <li>
          <a href="/explore">
            <span class="octicon octicon-telescope"></span>
            Explore
          </a>
        </li>
        <li>
            <a href="/login?return_to=%2Fangular-ui%2Fui-router%2Fblob%2Fmaster%2Frelease%2Fangular-ui-router.js">
              <span class="octicon octicon-sign-in"></span>
              Sign in
            </a>
        </li>
            <li class="section-title">This repository</li>
    <li><a href="/angular-ui/ui-router?files=1"><span class="octicon octicon-code"></span> Code</a></li>
      <li><a href="/angular-ui/ui-router/issues"><span class="octicon octicon-issue-opened"></span> Issues</a></li>
    <li><a href="/angular-ui/ui-router/pulls"><span class="octicon octicon-git-pull-request"></span> Pull Requests</a></li>
    <li><a href="/angular-ui/ui-router/pulse"><span class="octicon octicon-pulse"></span> Pulse</a></li>

      </ul>
    </nav>
  </header>

  

        

<div class="breadcrumb blob-breadcrumb">
  <label for="blob-history-checkbox" class="blob-history-label">
    <span class="octicon octicon-history"></span>
  </label>
  <span class="filetype-icon"><span class="octicon octicon-file-text"></span></span>
  <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular-ui/ui-router/tree/master/release" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">release</span></a></span><span class="separator">/</span><strong class="final-path">angular-ui-router.js</strong>
</div>

<input id="blob-history-checkbox"
       class="js-blob-history-checkbox"
       type="checkbox"
       data-url="/angular-ui/ui-router/latest_commit/master/release/angular-ui-router.js">

<div class="blob-history">
  <a href="/angular-ui/ui-router/commits/master/release/angular-ui-router.js" class="js-blob-history-link">
    Loading latest commit...
</a></div>

<div class="blob-file-content js-file-line-container">
    <pre itemprop="mainContentOfPage">/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== &quot;undefined&quot; &amp;&amp; typeof exports !== &quot;undefined&quot; &amp;&amp; module.exports === exports){
  module.exports = &#39;ui.router&#39;;
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
&#39;use strict&#39;;

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function objectKeys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function indexOf(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length &gt;&gt;&gt; 0, from = Number(arguments[2]) || 0;
  from = (from &lt; 0) ? Math.ceil(from) : Math.floor(from);

  if (from &lt; 0) from += len;

  for (; from &lt; len; from++) {
    if (from in array &amp;&amp; array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i].params) continue;
    parentParams = objectKeys(parents[i].params);
    if (!parentParams.length) continue;

    for (var j in parentParams) {
      if (indexOf(inheritList, parentParams[j]) &gt;= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i&lt;keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not &#39;===&#39;, values aren&#39;t necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}

// like _.indexBy
// when you know that your index values will be unique, or you want last-one-in to win
function indexBy(array, propName) {
  var result = {};
  forEach(array, function(item) {
    result[item[propName]] = item;
  });
  return result;
}

// extracted from underscore.js
// Return a copy of the object only containing the whitelisted properties.
function pick(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  forEach(keys, function(key) {
    if (key in obj) copy[key] = obj[key];
  });
  return copy;
}

// extracted from underscore.js
// Return a copy of the object omitting the blacklisted properties.
function omit(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  for (var key in obj) {
    if (indexOf(keys, key) == -1) copy[key] = obj[key];
  }
  return copy;
}

function pluck(collection, key) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = isFunction(key) ? key(val) : val[key];
  });
  return result;
}

function filter(collection, callback) {
  var array = isArray(collection);
  var result = array ? [] : {};
  forEach(collection, function(val, i) {
    if (callback(val, i)) {
      result[array ? result.length : i] = val;
    }
  });
  return result;
}

function map(collection, callback) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = callback(val, i);
  });
  return result;
}

/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module(&#39;ui.router.util&#39;, [&#39;ng&#39;]);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module(&#39;ui.router.router&#39;, [&#39;ui.router.util&#39;]);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module(&#39;ui.router.state&#39;, [&#39;ui.router.router&#39;, &#39;ui.router.util&#39;]);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main &quot;umbrella&quot; module
 * * ui.router.router - 
 * 
 * *You&#39;ll need to include **only** this module as the dependency within your angular app.*
 * 
 * &lt;pre&gt;
 * &lt;!doctype html&gt;
 * &lt;html ng-app=&quot;myApp&quot;&gt;
 * &lt;head&gt;
 *   &lt;script src=&quot;js/angular.js&quot;&gt;&lt;/script&gt;
 *   &lt;!-- Include the ui-router script --&gt;
 *   &lt;script src=&quot;js/angular-ui-router.min.js&quot;&gt;&lt;/script&gt;
 *   &lt;script&gt;
 *     // ...and add &#39;ui.router&#39; as a dependency
 *     var myApp = angular.module(&#39;myApp&#39;, [&#39;ui.router&#39;]);
 *   &lt;/script&gt;
 * &lt;/head&gt;
 * &lt;body&gt;
 * &lt;/body&gt;
 * &lt;/html&gt;
 * &lt;/pre&gt;
 */
angular.module(&#39;ui.router&#39;, [&#39;ui.router.state&#39;]);

angular.module(&#39;ui.router.compat&#39;, [&#39;ui.router&#39;]);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = [&#39;$q&#39;, &#39;$injector&#39;];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * &lt;pre&gt;
   * $resolve.study(invocables)(locals, parent, self)
   * &lt;/pre&gt;
   * is equivalent to
   * &lt;pre&gt;
   * $resolve.resolve(invocables, locals, parent, self)
   * &lt;/pre&gt;
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error(&quot;&#39;invocables&#39; must be an object&quot;);
    var invocableKeys = objectKeys(invocables || {});
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, indexOf(cycle, key));
        throw new Error(&quot;Cyclic dependency: &quot; + cycle.join(&quot; -&gt; &quot;));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key &amp;&amp; invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that&#39;s required
    
    function isResolve(value) {
      return isObject(value) &amp;&amp; value.then &amp;&amp; value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) &amp;&amp; self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error(&quot;&#39;locals&#39; must be an object&quot;);
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error(&quot;&#39;parent&#39; must be a promise returned by $resolve.resolve()&quot;);
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven&#39;t got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = result.$$promises || true; // keep for isResolve()
          delete result.$$inheritedValues;
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }

      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      if (parent.$$inheritedValues) {
        merge(values, omit(parent.$$inheritedValues, invocableKeys));
      }

      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      extend(promises, parent.$$promises);
      if (parent.$$values) {
        merged = merge(values, omit(parent.$$values, invocableKeys));
        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
        done();
      } else {
        if (parent.$$inheritedValues) {
          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
        }        
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i&lt;ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it&#39;s ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) &amp;&amp; !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module(&#39;ui.router.util&#39;).service(&#39;$resolve&#39;, $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = [&#39;$http&#39;, &#39;$templateCache&#39;, &#39;$injector&#39;];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.&lt;string&gt;} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache, headers: { Accept: &#39;text/html&#39; }})
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromProvider
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.&lt;string&gt;} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module(&#39;ui.router.util&#39;).service(&#39;$templateFactory&#39;, $TemplateFactory);

var $$UMFP; // reference to $UrlMatcherFactoryProvider

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by &#39;?&#39; and a list
 * of search parameters. Multiple search parameter names are separated by &#39;&amp;&#39;. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 *
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `&#39;:&#39;` name - colon placeholder
 * * `&#39;*&#39;` name - catch-all placeholder
 * * `&#39;{&#39; name &#39;}&#39;` - curly placeholder
 * * `&#39;{&#39; name &#39;:&#39; regexp|type &#39;}&#39;` - curly placeholder with regexp or type name. Should the
 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than &#39;/&#39;. For catch-all placeholders the path parameter matches
 * any number of characters.
 *
 * Examples:
 *
 * * `&#39;/hello/&#39;` - Matches only if the path is exactly &#39;/hello/&#39;. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `&#39;/user/:id&#39;` - Matches &#39;/user/bob&#39; or &#39;/user/1234!!!&#39; or even &#39;/user/&#39; but not &#39;/user&#39; or
 *   &#39;/user/bob/details&#39;. The second path segment will be captured as the parameter &#39;id&#39;.
 * * `&#39;/user/{id}&#39;` - Same as the previous example, but using curly brace syntax.
 * * `&#39;/user/{id:[^/]*}&#39;` - Same as the previous example.
 * * `&#39;/user/{id:[0-9a-fA-F]{1,8}}&#39;` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `&#39;/files/{path:.*}&#39;` - Matches any URL starting with &#39;/files/&#39; and captures the rest of the
 *   path into the parameter &#39;path&#39;.
 * * `&#39;/files/*path&#39;` - ditto.
 * * `&#39;/calendar/{start:date}&#39;` - Matches &quot;/calendar/2014-11-12&quot; (because the pattern defined
 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 * @param {string} pattern  The pattern to compile into a matcher.
 * @param {Object} config  A configuration object hash:
 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
 *   an existing UrlMatcher
 *
 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the constructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New `UrlMatcher` object
 */
function UrlMatcher(pattern, config, parentMatcher) {
  config = extend({ params: {} }, isObject(config) ? config : {});

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   &#39;*&#39; name
  //   &#39;:&#39; name
  //   &#39;{&#39; name &#39;}&#39;
  //   &#39;{&#39; name &#39;:&#39; regexp &#39;}&#39;
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                       - anything other than curly braces or backslash
  //    \\.                            - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      compiled = &#39;^&#39;, last = 0, m,
      segments = this.segments = [],
      parentParams = parentMatcher ? parentMatcher.params : {},
      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
      paramNames = [];

  function addParameter(id, type, config, location) {
    paramNames.push(id);
    if (parentParams[id]) return parentParams[id];
    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error(&quot;Invalid parameter name &#39;&quot; + id + &quot;&#39; in pattern &#39;&quot; + pattern + &quot;&#39;&quot;);
    if (params[id]) throw new Error(&quot;Duplicate parameter name &#39;&quot; + id + &quot;&#39; in pattern &#39;&quot; + pattern + &quot;&#39;&quot;);
    params[id] = new $$UMFP.Param(id, type, config, location);
    return params[id];
  }

  function quoteRegExp(string, pattern, squash, optional) {
    var surroundPattern = [&#39;&#39;,&#39;&#39;], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, &quot;\\$&amp;&quot;);
    if (!pattern) return result;
    switch(squash) {
      case false: surroundPattern = [&#39;(&#39;, &#39;)&#39; + (optional ? &quot;?&quot; : &quot;&quot;)]; break;
      case true:  surroundPattern = [&#39;?(&#39;, &#39;)?&#39;]; break;
      default:    surroundPattern = [&#39;(&#39; + squash + &quot;|&quot;, &#39;)?&#39;]; break;
    }
    return result + surroundPattern[0] + pattern + surroundPattern[1];
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  function matchDetails(m, isSearch) {
    var id, regexp, segment, type, cfg, arrayMode;
    id          = m[2] || m[3]; // IE[78] returns &#39;&#39; for unmatched groups instead of null
    cfg         = config.params[id];
    segment     = pattern.substring(last, m.index);
    regexp      = isSearch ? m[4] : m[4] || (m[1] == &#39;*&#39; ? &#39;.*&#39; : null);
    type        = $$UMFP.type(regexp || &quot;string&quot;) || inherit($$UMFP.type(&quot;string&quot;), { pattern: new RegExp(regexp, config.caseInsensitive ? &#39;i&#39; : undefined) });
    return {
      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
    };
  }

  var p, param, segment;
  while ((m = placeholder.exec(pattern))) {
    p = matchDetails(m, false);
    if (p.segment.indexOf(&#39;?&#39;) &gt;= 0) break; // we&#39;re into the search part

    param = addParameter(p.id, p.type, p.cfg, &quot;path&quot;);
    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
    segments.push(p.segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf(&#39;?&#39;);

  if (i &gt;= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last + i);

    if (search.length &gt; 0) {
      last = 0;
      while ((m = searchPlaceholder.exec(search))) {
        p = matchDetails(m, true);
        param = addParameter(p.id, p.type, p.cfg, &quot;search&quot;);
        last = placeholder.lastIndex;
        // check if ?&amp;
      }
    }
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = &#39;&#39;;
  }

  compiled += quoteRegExp(segment) + (config.strict === false ? &#39;\/?&#39; : &#39;&#39;) + &#39;$&#39;;
  segments.push(segment);

  this.regexp = new RegExp(compiled, config.caseInsensitive ? &#39;i&#39; : undefined);
  this.prefix = segments[0];
  this.$$paramNames = paramNames;
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * &lt;pre&gt;
 * new UrlMatcher(&#39;/user/{id}?q&#39;).concat(&#39;/details?date&#39;);
 * new UrlMatcher(&#39;/user/{id}/details?q&amp;date&#39;);
 * &lt;/pre&gt;
 *
 * @param {string} pattern  The pattern to append.
 * @param {Object} config  An object hash of the configuration for the matcher.
 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern, config) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it&#39;s much easier to do this on a string level.
  var defaultConfig = {
    caseInsensitive: $$UMFP.caseInsensitive(),
    strict: $$UMFP.strictMode(),
    squash: $$UMFP.defaultSquashPolicy()
  };
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * &lt;pre&gt;
 * new UrlMatcher(&#39;/user/{id}?q&amp;r&#39;).exec(&#39;/user/bob&#39;, {
 *   x: &#39;1&#39;, q: &#39;hello&#39;
 * });
 * // returns { id: &#39;bob&#39;, q: &#39;hello&#39;, r: null }
 * &lt;/pre&gt;
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;
  searchParams = searchParams || {};

  var paramNames = this.parameters(), nTotal = paramNames.length,
    nPath = this.segments.length - 1,
    values = {}, i, j, cfg, paramName;

  if (nPath !== m.length - 1) throw new Error(&quot;Unbalanced capture group in route &#39;&quot; + this.source + &quot;&#39;&quot;);

  function decodePathArray(string) {
    function reverseString(str) { return str.split(&quot;&quot;).reverse().join(&quot;&quot;); }
    function unquoteDashes(str) { return str.replace(/\\-/g, &quot;-&quot;); }

    var split = reverseString(string).split(/-(?!\\)/);
    var allReversed = map(split, reverseString);
    return map(allReversed, unquoteDashes).reverse();
  }

  for (i = 0; i &lt; nPath; i++) {
    paramName = paramNames[i];
    var param = this.params[paramName];
    var paramVal = m[i+1];
    // if the param value matches a pre-replace pair, replace the value before decoding.
    for (j = 0; j &lt; param.replace; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (paramVal &amp;&amp; param.array === true) paramVal = decodePathArray(paramVal);
    values[paramName] = param.value(paramVal);
  }
  for (/**/; i &lt; nTotal; i++) {
    paramName = paramNames[i];
    values[paramName] = this.params[paramName].value(searchParams[paramName]);
  }

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 *
 * @returns {Array.&lt;string&gt;}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function (param) {
  if (!isDefined(param)) return this.$$paramNames;
  return this.params[param] || null;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#validate
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Checks an object hash of parameters to validate their correctness according to the parameter
 * types of this `UrlMatcher`.
 *
 * @param {Object} params The object hash of parameters to validate.
 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
 */
UrlMatcher.prototype.validates = function (params) {
  return this.params.$$validates(params);
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * &lt;pre&gt;
 * new UrlMatcher(&#39;/user/{id}?q&#39;).format({ id:&#39;bob&#39;, q:&#39;yes&#39; });
 * // returns &#39;/user/bob?q=yes&#39;
 * &lt;/pre&gt;
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  values = values || {};
  var segments = this.segments, params = this.parameters(), paramset = this.params;
  if (!this.validates(values)) return null;

  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

  function encodeDashes(str) { // Replace dashes with encoded &quot;\-&quot;
    return encodeURIComponent(str).replace(/-/g, function(c) { return &#39;%5C%&#39; + c.charCodeAt(0).toString(16).toUpperCase(); });
  }

  for (i = 0; i &lt; nTotal; i++) {
    var isPathParam = i &lt; nPath;
    var name = params[i], param = paramset[name], value = param.value(values[name]);
    var isDefaultValue = param.isOptional &amp;&amp; param.type.equals(param.value(), value);
    var squash = isDefaultValue ? param.squash : false;
    var encoded = param.type.encode(value);

    if (isPathParam) {
      var nextSegment = segments[i + 1];
      if (squash === false) {
        if (encoded != null) {
          if (isArray(encoded)) {
            result += map(encoded, encodeDashes).join(&quot;-&quot;);
          } else {
            result += encodeURIComponent(encoded);
          }
        }
        result += nextSegment;
      } else if (squash === true) {
        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
        result += nextSegment.match(capture)[1];
      } else if (isString(squash)) {
        result += squash + nextSegment;
      }
    } else {
      if (encoded == null || (isDefaultValue &amp;&amp; squash !== false)) continue;
      if (!isArray(encoded)) encoded = [ encoded ];
      encoded = map(encoded, encodeURIComponent).join(&#39;&amp;&#39; + name + &#39;=&#39;);
      result += (search ? &#39;&amp;&#39; : &#39;?&#39;) + (name + &#39;=&#39; + encoded);
      search = true;
    }
  }

  return result;
};

/**
 * @ngdoc object
 * @name ui.router.util.type:Type
 *
 * @description
 * Implements an interface to define custom parameter types that can be decoded from and encoded to
 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
 * objects when matching or formatting URLs, or comparing or validating parameter values.
 *
 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
 * information on registering custom types.
 *
 * @param {Object} config  A configuration object which contains the custom type definition.  The object&#39;s
 *        properties will override the default methods and/or pattern in `Type`&#39;s public interface.
 * @example
 * &lt;pre&gt;
 * {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val &amp;&amp; val.toString(); },
 *   equals: function(a, b) { return this.is(a) &amp;&amp; a === b; },
 *   is: function(val) { return angular.isNumber(val) isFinite(val) &amp;&amp; val % 1 === 0; },
 *   pattern: /\d+/
 * }
 * &lt;/pre&gt;
 *
 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
 *           coming from a substring of a URL.
 *
 * @returns {Object}  Returns a new `Type` object.
 */
function Type(config) {
  extend(this, config);
}

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#is
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Detects whether a value is of a particular type. Accepts a native (decoded) value
 * and determines whether it matches the current `Type` object.
 *
 * @param {*} val  The value to check.
 * @param {string} key  Optional. If the type check is happening in the context of a specific
 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
 */
Type.prototype.is = function(val, key) {
  return true;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#encode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
 * only needs to be a representation of `val` that has been coerced to a string.
 *
 * @param {*} val  The value to encode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
 */
Type.prototype.encode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#decode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Converts a parameter value (from URL string or transition param) to a custom/native value.
 *
 * @param {string} val  The URL parameter value to decode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {*}  Returns a custom representation of the URL parameter value.
 */
Type.prototype.decode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#equals
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Determines whether two decoded values are equivalent.
 *
 * @param {*} a  A value to compare against.
 * @param {*} b  A value to compare against.
 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
 */
Type.prototype.equals = function(a, b) {
  return a == b;
};

Type.prototype.$subPattern = function() {
  var sub = this.pattern.toString();
  return sub.substr(1, sub.length - 2);
};

Type.prototype.pattern = /.*/;

Type.prototype.toString = function() { return &quot;{Type:&quot; + this.name + &quot;}&quot;; };

/** Given an encoded string, or a decoded object, returns a decoded object */
Type.prototype.$normalize = function(val) {
  return this.is(val) ? val : this.decode(val);
};

/*
 * Wraps an existing custom Type as an array of Type, depending on &#39;mode&#39;.
 * e.g.:
 * - urlmatcher pattern &quot;/path?{queryParam[]:int}&quot;
 * - url: &quot;/path?queryParam=1&amp;queryParam=2
 * - $stateParams.queryParam will be [1, 2]
 * if `mode` is &quot;auto&quot;, then
 * - url: &quot;/path?queryParam=1 will create $stateParams.queryParam: 1
 * - url: &quot;/path?queryParam=1&amp;queryParam=2 will create $stateParams.queryParam: [1, 2]
 */
Type.prototype.$asArray = function(mode, isSearch) {
  if (!mode) return this;
  if (mode === &quot;auto&quot; &amp;&amp; !isSearch) throw new Error(&quot;&#39;auto&#39; array mode is for query parameters only&quot;);

  function ArrayType(type, mode) {
    function bindTo(type, callbackName) {
      return function() {
        return type[callbackName].apply(type, arguments);
      };
    }

    // Wrap non-array value as array
    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
    // Unwrap array value for &quot;auto&quot; mode. Return undefined for empty array.
    function arrayUnwrap(val) {
      switch(val.length) {
        case 0: return undefined;
        case 1: return mode === &quot;auto&quot; ? val[0] : val;
        default: return val;
      }
    }
    function falsey(val) { return !val; }

    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
      return function handleArray(val) {
        val = arrayWrap(val);
        var result = map(val, callback);
        if (allTruthyMode === true)
          return filter(result, falsey).length === 0;
        return arrayUnwrap(result);
      };
    }

    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
      return function handleArray(val1, val2) {
        var left = arrayWrap(val1), right = arrayWrap(val2);
        if (left.length !== right.length) return false;
        for (var i = 0; i &lt; left.length; i++) {
          if (!callback(left[i], right[i])) return false;
        }
        return true;
      };
    }

    this.encode = arrayHandler(bindTo(type, &#39;encode&#39;));
    this.decode = arrayHandler(bindTo(type, &#39;decode&#39;));
    this.is     = arrayHandler(bindTo(type, &#39;is&#39;), true);
    this.equals = arrayEqualsHandler(bindTo(type, &#39;equals&#39;));
    this.pattern = type.pattern;
    this.$normalize = arrayHandler(bindTo(type, &#39;$normalize&#39;));
    this.name = type.name;
    this.$arrayMode = mode;
  }

  return new ArrayType(this, mode);
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
 * is also available to providers under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {
  $$UMFP = this;

  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

  function valToString(val) { return val != null ? val.toString().replace(/\//g, &quot;%2F&quot;) : val; }
  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, &quot;/&quot;) : val; }

  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
    string: {
      encode: valToString,
      decode: valFromString,
      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
      // In 0.2.x, string params are optional by default for backwards compat
      is: function(val) { return val == null || !isDefined(val) || typeof val === &quot;string&quot;; },
      pattern: /[^/]*/
    },
    int: {
      encode: valToString,
      decode: function(val) { return parseInt(val, 10); },
      is: function(val) { return isDefined(val) &amp;&amp; this.decode(val.toString()) === val; },
      pattern: /\d+/
    },
    bool: {
      encode: function(val) { return val ? 1 : 0; },
      decode: function(val) { return parseInt(val, 10) !== 0; },
      is: function(val) { return val === true || val === false; },
      pattern: /0|1/
    },
    date: {
      encode: function (val) {
        if (!this.is(val))
          return undefined;
        return [ val.getFullYear(),
          (&#39;0&#39; + (val.getMonth() + 1)).slice(-2),
          (&#39;0&#39; + val.getDate()).slice(-2)
        ].join(&quot;-&quot;);
      },
      decode: function (val) {
        if (this.is(val)) return val;
        var match = this.capture.exec(val);
        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
      },
      is: function(val) { return val instanceof Date &amp;&amp; !isNaN(val.valueOf()); },
      equals: function (a, b) { return this.is(a) &amp;&amp; this.is(b) &amp;&amp; a.toISOString() === b.toISOString(); },
      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    },
    json: {
      encode: angular.toJson,
      decode: angular.fromJson,
      is: angular.isObject,
      equals: angular.equals,
      pattern: /[^/]*/
    },
    any: { // does not encode/decode
      encode: angular.identity,
      decode: angular.identity,
      equals: angular.equals,
      pattern: /.*/
    }
  };

  function getDefaultConfig() {
    return {
      strict: isStrictMode,
      caseInsensitive: isCaseInsensitive
    };
  }

  function isInjectable(value) {
    return (isFunction(value) || (isArray(value) &amp;&amp; isFunction(value[value.length - 1])));
  }

  /**
   * [Internal] Get the default value of a parameter, which may be an injectable function.
   */
  $UrlMatcherFactory.$$getDefaultValue = function(config) {
    if (!isInjectable(config.value)) return config.value;
    if (!injector) throw new Error(&quot;Injectable functions cannot be called at configuration time&quot;);
    return injector.invoke(config.value);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URL matching should be case sensitive (the default behavior), or not.
   *
   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
   * @returns {boolean} the current value of caseInsensitive
   */
  this.caseInsensitive = function(value) {
    if (isDefined(value))
      isCaseInsensitive = value;
    return isCaseInsensitive;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#strictMode
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URLs should match trailing slashes, or not (the default behavior).
   *
   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
   * @returns {boolean} the current value of strictMode
   */
  this.strictMode = function(value) {
    if (isDefined(value))
      isStrictMode = value;
    return isStrictMode;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Sets the default behavior when generating or matching URLs with default parameter values.
   *
   * @param {string} value A string that defines the default parameter URL squashing behavior.
   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
   *    any other string, e.g. &quot;~&quot;: When generating an href with a default parameter value, squash (remove)
   *             the parameter value from the URL and replace it with this string.
   */
  this.defaultSquashPolicy = function(value) {
    if (!isDefined(value)) return defaultSquashPolicy;
    if (value !== true &amp;&amp; value !== false &amp;&amp; !isString(value))
      throw new Error(&quot;Invalid squash policy: &quot; + value + &quot;. Valid policies: false, true, arbitrary-string&quot;);
    defaultSquashPolicy = value;
    return value;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
   *
   * @param {string} pattern  The URL pattern.
   * @param {Object} config  The config object hash.
   * @returns {UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern, config) {
    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
   *          implementing all the same methods.
   */
  this.isMatcher = function (o) {
    if (!isObject(o)) return false;
    var result = true;

    forEach(UrlMatcher.prototype, function(val, name) {
      if (isFunction(val)) {
        result = result &amp;&amp; (isDefined(o[name]) &amp;&amp; isFunction(o[name]));
      }
    });
    return result;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#type
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
   * generate URLs with typed parameters.
   *
   * @param {string} name  The type name.
   * @param {Object|Function} definition   The type definition. See
   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
   *        runtime starts.  The result of this function is merged into the existing `definition`.
   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   *
   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
   *
   * @example
   * This is a simple example of a custom type that encodes and decodes items from an
   * array, using the array index as the URL-encoded value:
   *
   * &lt;pre&gt;
   * var list = [&#39;John&#39;, &#39;Paul&#39;, &#39;George&#39;, &#39;Ringo&#39;];
   *
   * $urlMatcherFactoryProvider.type(&#39;listItem&#39;, {
   *   encode: function(item) {
   *     // Represent the list item in the URL using its corresponding index
   *     return list.indexOf(item);
   *   },
   *   decode: function(item) {
   *     // Look up the list item by index
   *     return list[parseInt(item, 10)];
   *   },
   *   is: function(item) {
   *     // Ensure the item is valid by checking to see that it appears
   *     // in the list
   *     return list.indexOf(item) &gt; -1;
   *   }
   * });
   *
   * $stateProvider.state(&#39;list&#39;, {
   *   url: &quot;/list/{item:listItem}&quot;,
   *   controller: function($scope, $stateParams) {
   *     console.log($stateParams.item);
   *   }
   * });
   *
   * // ...
   *
   * // Changes URL to &#39;/list/3&#39;, logs &quot;Ringo&quot; to the console
   * $state.go(&#39;list&#39;, { item: &quot;Ringo&quot; });
   * &lt;/pre&gt;
   *
   * This is a more complex example of a type that relies on dependency injection to
   * interact with services, and uses the parameter name from the URL to infer how to
   * handle encoding and decoding parameter values:
   *
   * &lt;pre&gt;
   * // Defines a custom type that gets a value from a service,
   * // where each service gets different types of values from
   * // a backend API:
   * $urlMatcherFactoryProvider.type(&#39;dbObject&#39;, {}, function(Users, Posts) {
   *
   *   // Matches up services to URL parameter names
   *   var services = {
   *     user: Users,
   *     post: Posts
   *   };
   *
   *   return {
   *     encode: function(object) {
   *       // Represent the object in the URL using its unique ID
   *       return object.id;
   *     },
   *     decode: function(value, key) {
   *       // Look up the object by ID, using the parameter
   *       // name (key) to call the correct service
   *       return services[key].findById(value);
   *     },
   *     is: function(object, key) {
   *       // Check that object is a valid dbObject
   *       return angular.isObject(object) &amp;&amp; object.id &amp;&amp; services[key];
   *     }
   *     equals: function(a, b) {
   *       // Check the equality of decoded objects by comparing
   *       // their unique IDs
   *       return a.id === b.id;
   *     }
   *   };
   * });
   *
   * // In a config() block, you can then attach URLs with
   * // type-annotated parameters:
   * $stateProvider.state(&#39;users&#39;, {
   *   url: &quot;/users&quot;,
   *   // ...
   * }).state(&#39;users.item&#39;, {
   *   url: &quot;/{user:dbObject}&quot;,
   *   controller: function($scope, $stateParams) {
   *     // $stateParams.user will now be an object returned from
   *     // the Users service
   *   },
   *   // ...
   * });
   * &lt;/pre&gt;
   */
  this.type = function (name, definition, definitionFn) {
    if (!isDefined(definition)) return $types[name];
    if ($types.hasOwnProperty(name)) throw new Error(&quot;A type named &#39;&quot; + name + &quot;&#39; has already been defined.&quot;);

    $types[name] = new Type(extend({ name: name }, definition));
    if (definitionFn) {
      typeQueue.push({ name: name, def: definitionFn });
      if (!enqueue) flushTypeQueue();
    }
    return this;
  };

  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
  function flushTypeQueue() {
    while(typeQueue.length) {
      var type = typeQueue.shift();
      if (type.pattern) throw new Error(&quot;You cannot override a type&#39;s .pattern at runtime.&quot;);
      angular.extend($types[type.name], injector.invoke(type.def));
    }
  }

  // Register default types. Store them in the prototype of $types.
  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
  $types = inherit($types, {});

  /* No need to document $get, since it returns this */
  this.$get = [&#39;$injector&#39;, function ($injector) {
    injector = $injector;
    enqueue = false;
    flushTypeQueue();

    forEach(defaultTypes, function(type, name) {
      if (!$types[name]) $types[name] = new Type(type);
    });
    return this;
  }];

  this.Param = function Param(id, type, config, location) {
    var self = this;
    config = unwrapShorthand(config);
    type = getType(config, type, location);
    var arrayMode = getArrayMode();
    type = arrayMode ? type.$asArray(arrayMode, location === &quot;search&quot;) : type;
    if (type.name === &quot;string&quot; &amp;&amp; !arrayMode &amp;&amp; location === &quot;path&quot; &amp;&amp; config.value === undefined)
      config.value = &quot;&quot;; // for 0.2.x; in 0.3.0+ do not automatically default to &quot;&quot;
    var isOptional = config.value !== undefined;
    var squash = getSquashPolicy(config, isOptional);
    var replace = getReplace(config, arrayMode, isOptional, squash);

    function unwrapShorthand(config) {
      var keys = isObject(config) ? objectKeys(config) : [];
      var isShorthand = indexOf(keys, &quot;value&quot;) === -1 &amp;&amp; indexOf(keys, &quot;type&quot;) === -1 &amp;&amp;
                        indexOf(keys, &quot;squash&quot;) === -1 &amp;&amp; indexOf(keys, &quot;array&quot;) === -1;
      if (isShorthand) config = { value: config };
      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
      return config;
    }

    function getType(config, urlType, location) {
      if (config.type &amp;&amp; urlType) throw new Error(&quot;Param &#39;&quot;+id+&quot;&#39; has two type configurations.&quot;);
      if (urlType) return urlType;
      if (!config.type) return (location === &quot;config&quot; ? $types.any : $types.string);
      return config.type instanceof Type ? config.type : new Type(config.type);
    }

    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
    function getArrayMode() {
      var arrayDefaults = { array: (location === &quot;search&quot; ? &quot;auto&quot; : false) };
      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
      return extend(arrayDefaults, arrayParamNomenclature, config).array;
    }

    /**
     * returns false, true, or the squash value to indicate the &quot;default parameter url squash policy&quot;.
     */
    function getSquashPolicy(config, isOptional) {
      var squash = config.squash;
      if (!isOptional || squash === false) return false;
      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
      if (squash === true || isString(squash)) return squash;
      throw new Error(&quot;Invalid squash policy: &#39;&quot; + squash + &quot;&#39;. Valid policies: false, true, or arbitrary string&quot;);
    }

    function getReplace(config, arrayMode, isOptional, squash) {
      var replace, configuredKeys, defaultPolicy = [
        { from: &quot;&quot;,   to: (isOptional || arrayMode ? undefined : &quot;&quot;) },
        { from: null, to: (isOptional || arrayMode ? undefined : &quot;&quot;) }
      ];
      replace = isArray(config.replace) ? config.replace : [];
      if (isString(squash))
        replace.push({ from: squash, to: undefined });
      configuredKeys = map(replace, function(item) { return item.from; } );
      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
    }

    /**
     * [Internal] Get the default value of a parameter, which may be an injectable function.
     */
    function $$getDefaultValue() {
      if (!injector) throw new Error(&quot;Injectable functions cannot be called at configuration time&quot;);
      var defaultValue = injector.invoke(config.$$fn);
      if (defaultValue !== null &amp;&amp; defaultValue !== undefined &amp;&amp; !self.type.is(defaultValue))
        throw new Error(&quot;Default value (&quot; + defaultValue + &quot;) for parameter &#39;&quot; + self.id + &quot;&#39; is not an instance of Type (&quot; + self.type.name + &quot;)&quot;);
      return defaultValue;
    }

    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    function $value(value) {
      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
      function $replace(value) {
        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
        return replacement.length ? replacement[0] : value;
      }
      value = $replace(value);
      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
    }

    function toString() { return &quot;{Param:&quot; + id + &quot; &quot; + type + &quot; squash: &#39;&quot; + squash + &quot;&#39; optional: &quot; + isOptional + &quot;}&quot;; }

    extend(this, {
      id: id,
      type: type,
      location: location,
      array: arrayMode,
      squash: squash,
      replace: replace,
      isOptional: isOptional,
      value: $value,
      dynamic: undefined,
      config: config,
      toString: toString
    });
  };

  function ParamSet(params) {
    extend(this, params || {});
  }

  ParamSet.prototype = {
    $$new: function() {
      return inherit(this, extend(new ParamSet(), { $$parent: this}));
    },
    $$keys: function () {
      var keys = [], chain = [], parent = this,
        ignore = objectKeys(ParamSet.prototype);
      while (parent) { chain.push(parent); parent = parent.$$parent; }
      chain.reverse();
      forEach(chain, function(paramset) {
        forEach(objectKeys(paramset), function(key) {
            if (indexOf(keys, key) === -1 &amp;&amp; indexOf(ignore, key) === -1) keys.push(key);
        });
      });
      return keys;
    },
    $$values: function(paramValues) {
      var values = {}, self = this;
      forEach(self.$$keys(), function(key) {
        values[key] = self[key].value(paramValues &amp;&amp; paramValues[key]);
      });
      return values;
    },
    $$equals: function(paramValues1, paramValues2) {
      var equal = true, self = this;
      forEach(self.$$keys(), function(key) {
        var left = paramValues1 &amp;&amp; paramValues1[key], right = paramValues2 &amp;&amp; paramValues2[key];
        if (!self[key].type.equals(left, right)) equal = false;
      });
      return equal;
    },
    $$validates: function $$validate(paramValues) {
      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
      for (i = 0; i &lt; keys.length; i++) {
        param = this[keys[i]];
        rawVal = paramValues[keys[i]];
        if ((rawVal === undefined || rawVal === null) &amp;&amp; param.isOptional)
          break; // There was no parameter value, but the param is optional
        normalized = param.type.$normalize(rawVal);
        if (!param.type.is(normalized))
          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
        encoded = param.type.encode(normalized);
        if (angular.isString(encoded) &amp;&amp; !param.type.pattern.exec(encoded))
          return false; // The value was of the correct type, but when encoded, did not match the Type&#39;s regexp
      }
      return true;
    },
    $$parent: undefined
  };

  this.ParamSet = ParamSet;
}

// Register as a provider so it&#39;s available to other providers
angular.module(&#39;ui.router.util&#39;).provider(&#39;$urlMatcherFactory&#39;, $UrlMatcherFactory);
angular.module(&#39;ui.router.util&#39;).run([&#39;$urlMatcherFactory&#39;, function($urlMatcherFactory) { }]);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = [&#39;$locationProvider&#39;, &#39;$urlMatcherFactoryProvider&#39;];
function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
  var rules = [], otherwise = null, interceptDeferred = false, listener;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, &quot;$1&quot;) : &#39;&#39;;
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === &#39;$&#39; ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider` to find matches for
   * specific URLs.
   *
   * @example
   * &lt;pre&gt;
   * var app = angular.module(&#39;app&#39;, [&#39;ui.router.router&#39;]);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here&#39;s an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * &lt;/pre&gt;
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.rule = function (rule) {
    if (!isFunction(rule)) throw new Error(&quot;&#39;rule&#39; must be a function&quot;);
    rules.push(rule);
    return this;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalid route is requested.
   *
   * @example
   * &lt;pre&gt;
   * var app = angular.module(&#39;app&#39;, [&#39;ui.router.router&#39;]);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn&#39;t match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise(&#39;/index&#39;);
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     return &#39;/a/valid/url&#39;;
   *   });
   * });
   * &lt;/pre&gt;
   *
   * @param {string|object} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services, and must return a url string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.otherwise = function (rule) {
    if (isString(rule)) {
      var redirect = rule;
      rule = function () { return redirect; };
    }
    else if (!isFunction(rule)) throw new Error(&quot;&#39;rule&#39; must be a function&quot;);
    otherwise = rule;
    return this;
  };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syntax of match
   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn&#39;t match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * &lt;pre&gt;
   * var app = angular.module(&#39;app&#39;, [&#39;ui.router.router&#39;]);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * &lt;/pre&gt;
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
  this.when = function (what, handler) {
    var redirect, handlerIsString = isString(handler);
    if (isString(what)) what = $urlMatcherFactory.compile(what);

    if (!handlerIsString &amp;&amp; !isFunction(handler) &amp;&amp; !isArray(handler))
      throw new Error(&quot;invalid &#39;handler&#39; in when()&quot;);

    var strategies = {
      matcher: function (what, handler) {
        if (handlerIsString) {
          redirect = $urlMatcherFactory.compile(handler);
          handler = [&#39;$match&#39;, function ($match) { return redirect.format($match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
        }, {
          prefix: isString(what.prefix) ? what.prefix : &#39;&#39;
        });
      },
      regex: function (what, handler) {
        if (what.global || what.sticky) throw new Error(&quot;when() RegExp must not be global or sticky&quot;);

        if (handlerIsString) {
          redirect = handler;
          handler = [&#39;$match&#39;, function ($match) { return interpolate(redirect, $match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path()));
        }, {
          prefix: regExpPrefix(what)
        });
      }
    };

    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

    for (var n in check) {
      if (check[n]) return this.rule(strategies[n](what, handler));
    }

    throw new Error(&quot;invalid &#39;what&#39; in when()&quot;);
  };

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#deferIntercept
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Disables (or enables) deferring location change interception.
   *
   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
   * defer a transition but maintain the current URL), call this method at configuration time.
   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
   * `$locationChangeSuccess` event handler.
   *
   * @example
   * &lt;pre&gt;
   * var app = angular.module(&#39;app&#39;, [&#39;ui.router.router&#39;]);
   *
   * app.config(function ($urlRouterProvider) {
   *
   *   // Prevent $urlRouter from automatically intercepting URL changes;
   *   // this allows you to configure custom behavior in between
   *   // location changes and route synchronization:
   *   $urlRouterProvider.deferIntercept();
   *
   * }).run(function ($rootScope, $urlRouter, UserService) {
   *
   *   $rootScope.$on(&#39;$locationChangeSuccess&#39;, function(e) {
   *     // UserService is an example service for managing user state
   *     if (UserService.isLoggedIn()) return;
   *
   *     // Prevent $urlRouter&#39;s default handler from firing
   *     e.preventDefault();
   *
   *     UserService.handleLogin().then(function() {
   *       // Once the user has logged in, sync the current URL
   *       // to the router:
   *       $urlRouter.sync();
   *     });
   *   });
   *
   *   // Configures $urlRouter&#39;s listener *after* your custom listener
   *   $urlRouter.listen();
   * });
   * &lt;/pre&gt;
   *
   * @param {boolean} defer Indicates whether to defer location change interception. Passing
            no parameter is equivalent to `true`.
   */
  this.deferIntercept = function (defer) {
    if (defer === undefined) defer = true;
    interceptDeferred = defer;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   * @requires $browser
   *
   * @description
   *
   */
  this.$get = $get;
  $get.$inject = [&#39;$location&#39;, &#39;$rootScope&#39;, &#39;$injector&#39;, &#39;$browser&#39;];
  function $get(   $location,   $rootScope,   $injector,   $browser) {

    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

    function appendBasePath(url, isHtml5, absolute) {
      if (baseHref === &#39;/&#39;) return url;
      if (isHtml5) return baseHref.slice(0, -1) + url;
      if (absolute) return baseHref.slice(1) + url;
      return url;
    }

    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
    function update(evt) {
      if (evt &amp;&amp; evt.defaultPrevented) return;
      var ignoreUpdate = lastPushedUrl &amp;&amp; $location.url() === lastPushedUrl;
      lastPushedUrl = undefined;
      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
      //if (ignoreUpdate) return true;

      function check(rule) {
        var handled = rule($injector, $location);

        if (!handled) return false;
        if (isString(handled)) $location.replace().url(handled);
        return true;
      }
      var n = rules.length, i;

      for (i = 0; i &lt; n; i++) {
        if (check(rules[i])) return;
      }
      // always check otherwise last to allow dynamic updates to the set of rules
      if (otherwise) check(otherwise);
    }

    function listen() {
      listener = listener || $rootScope.$on(&#39;$locationChangeSuccess&#39;, update);
      return listener;
    }

    if (!interceptDeferred) listen();

    return {
      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#sync
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
       * with the transition by calling `$urlRouter.sync()`.
       *
       * @example
       * &lt;pre&gt;
       * angular.module(&#39;app&#39;, [&#39;ui.router&#39;])
       *   .run(function($rootScope, $urlRouter) {
       *     $rootScope.$on(&#39;$locationChangeSuccess&#39;, function(evt) {
       *       // Halt state change from even starting
       *       evt.preventDefault();
       *       // Perform custom logic
       *       var meetsRequirement = ...
       *       // Continue with the update and state transition if logic allows
       *       if (meetsRequirement) $urlRouter.sync();
       *     });
       * });
       * &lt;/pre&gt;
       */
      sync: function() {
        update();
      },

      listen: function() {
        return listen();
      },

      update: function(read) {
        if (read) {
          location = $location.url();
          return;
        }
        if ($location.url() === location) return;

        $location.url(location);
        $location.replace();
      },

      push: function(urlMatcher, params, options) {
         var url = urlMatcher.format(params || {});

        // Handle the special hash param, if needed
        if (url !== null &amp;&amp; params &amp;&amp; params[&#39;#&#39;]) {
            url += &#39;#&#39; + params[&#39;#&#39;];
        }

        $location.url(url);
        lastPushedUrl = options &amp;&amp; options.$$avoidResync ? $location.url() : undefined;
        if (options &amp;&amp; options.replace) $location.replace();
      },

      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#href
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * A URL generation method that returns the compiled URL for a given
       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
       *
       * @example
       * &lt;pre&gt;
       * $bob = $urlRouter.href(new UrlMatcher(&quot;/about/:person&quot;), {
       *   person: &quot;bob&quot;
       * });
       * // $bob == &quot;/about/bob&quot;;
       * &lt;/pre&gt;
       *
       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
       * @param {object=} params An object of parameter values to fill the matcher&#39;s required parameters.
       * @param {object=} options Options object. The options are:
       *
       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. &quot;http://www.example.com/fullurl&quot;.
       *
       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
       */
      href: function(urlMatcher, params, options) {
        if (!urlMatcher.validates(params)) return null;

        var isHtml5 = $locationProvider.html5Mode();
        if (angular.isObject(isHtml5)) {
          isHtml5 = isHtml5.enabled;
        }
        
        var url = urlMatcher.format(params);
        options = options || {};

        if (!isHtml5 &amp;&amp; url !== null) {
          url = &quot;#&quot; + $locationProvider.hashPrefix() + url;
        }

        // Handle special hash param, if needed
        if (url !== null &amp;&amp; params &amp;&amp; params[&#39;#&#39;]) {
          url += &#39;#&#39; + params[&#39;#&#39;];
        }

        url = appendBasePath(url, isHtml5, options.absolute);

        if (!options.absolute || !url) {
          return url;
        }

        var slash = (!isHtml5 &amp;&amp; url ? &#39;/&#39; : &#39;&#39;), port = $location.port();
        port = (port === 80 || port === 443 ? &#39;&#39; : &#39;:&#39; + port);

        return [$location.protocol(), &#39;://&#39;, $location.host(), port, slash, url].join(&#39;&#39;);
      }
    };
  }
}

angular.module(&#39;ui.router.router&#39;).provider(&#39;$urlRouter&#39;, $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular&#39;s v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a &quot;place&quot; in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = [&#39;$urlRouterProvider&#39;, &#39;$urlMatcherFactoryProvider&#39;];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

  var root, states = {}, $state, queue = {}, abstractKey = &#39;abstract&#39;;

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if &#39;parent&#39; is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) &amp;&amp; state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match &quot;contact.list&quot; but not &quot;contacts&quot;
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit &#39;data&#39; from parent and override by own values (if any)
    data: function(state) {
      if (state.parent &amp;&amp; state.parent.data) {
        state.data = state.self.data = extend({}, state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url, config = { params: state.params || {} };

      if (isString(url)) {
        if (url.charAt(0) == &#39;^&#39;) return $urlMatcherFactory.compile(url.substring(1), config);
        return (state.parent.navigable || root).url.concat(url, config);
      }

      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
      throw new Error(&quot;Invalid url &#39;&quot; + url + &quot;&#39; in state &#39;&quot; + state + &quot;&#39;&quot;);
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
    ownParams: function(state) {
      var params = state.url &amp;&amp; state.url.params || new $$UMFP.ParamSet();
      forEach(state.params || {}, function(config, id) {
        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, &quot;config&quot;);
      });
      return params;
    },

    // Derive parameters for this state and ensure they&#39;re a super-set of parent&#39;s parameters
    params: function(state) {
      return state.parent &amp;&amp; state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
    },

    // If there is no explicit multi-view configuration, make one up so we don&#39;t have
    // to handle both cases in the view directive later. Note that having an explicit
    // &#39;views&#39; property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { &#39;&#39;: state }, function (view, name) {
        if (name.indexOf(&#39;@&#39;) &lt; 0) name += &#39;@&#39; + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it&#39;s used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(&quot;.&quot;) === 0 || stateName.indexOf(&quot;^&quot;) === 0;
  }

  function findState(stateOrName, base) {
    if (!stateOrName) return undefined;

    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error(&quot;No reference point given for path &#39;&quot;  + name + &quot;&#39;&quot;);
      base = findState(base);
      
      var rel = name.split(&quot;.&quot;), i = 0, pathLength = rel.length, current = base;

      for (; i &lt; pathLength; i++) {
        if (rel[i] === &quot;&quot; &amp;&amp; i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === &quot;^&quot;) {
          if (!current.parent) throw new Error(&quot;Path &#39;&quot; + name + &quot;&#39; not valid for state &#39;&quot; + base.name + &quot;&#39;&quot;);
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(&quot;.&quot;);
      name = current.name + (current.name &amp;&amp; rel ? &quot;.&quot; : &quot;&quot;) + rel;
    }
    var state = states[name];

    if (state &amp;&amp; (isStr || (!isStr &amp;&amp; (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function flushQueuedChildren(parentName) {
    var queued = queue[parentName] || [];
    while(queued.length) {
      registerState(queued.shift());
    }
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf(&#39;@&#39;) &gt;= 0) throw new Error(&quot;State must have a valid name&quot;);
    if (states.hasOwnProperty(name)) throw new Error(&quot;State &#39;&quot; + name + &quot;&#39;&#39; is already defined&quot;);

    // Get parent name
    var parentName = (name.indexOf(&#39;.&#39;) !== -1) ? name.substring(0, name.lastIndexOf(&#39;.&#39;))
        : (isString(state.parent)) ? state.parent
        : (isObject(state.parent) &amp;&amp; isString(state.parent.name)) ? state.parent.name
        : &#39;&#39;;

    // If parent is not registered yet, add state to queue and register later
    if (parentName &amp;&amp; !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] &amp;&amp; state.url) {
      $urlRouterProvider.when(state.url, [&#39;$match&#39;, &#39;$stateParams&#39;, function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { inherit: true, location: false });
        }
      }]);
    }

    // Register any queued children
    flushQueuedChildren(name);

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf(&#39;*&#39;) &gt; -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split(&#39;.&#39;),
        segments = $state.$current.name.split(&#39;.&#39;);

    //match single stars
    for (var i = 0, l = globSegments.length; i &lt; l; i++) {
      if (globSegments[i] === &#39;*&#39;) {
        segments[i] = &#39;*&#39;;
      }
    }

    //match greedy starts
    if (globSegments[0] === &#39;**&#39;) {
       segments = segments.slice(indexOf(segments, globSegments[1]));
       segments.unshift(&#39;**&#39;);
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === &#39;**&#39;) {
       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push(&#39;**&#39;);
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    return segments.join(&#39;&#39;) === globSegments.join(&#39;&#39;);
  }


  // Implicit root state that is always active
  root = registerState({
    name: &#39;&#39;,
    url: &#39;^&#39;,
    views: null,
    &#39;abstract&#39;: true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state&#39;s internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
   *   or `null`.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent&#39;s params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. &quot;viewName@stateName&quot;) and each value is the config object 
   *   (template, controller) for the view. Even when you don&#39;t use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a `$state.includes()` test.
   *
   * @example
   * &lt;pre&gt;
   * // Override the internal &#39;views&#39; builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator(&#39;views&#39;, function (state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(views, function (config, name) {
   *     var autoName = (state.name + &#39;.&#39; + name).replace(&#39;.&#39;, &#39;/&#39;);
   *     config.templateUrl = config.templateUrl || &#39;/partials/&#39; + autoName + &#39;.html&#39;;
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state(&#39;home&#39;, {
   *   views: {
   *     &#39;contact.list&#39;: { controller: &#39;ListController&#39; },
   *     &#39;contact.item&#39;: { controller: &#39;ItemController&#39; }
   *   }
   * });
   *
   * // ...
   *
   * $state.go(&#39;home&#39;);
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * &lt;/pre&gt;
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) &amp;&amp; !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] &amp;&amp; !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * @param {string} name A unique state name, e.g. &quot;home&quot;, &quot;about&quot;, &quot;contacts&quot;.
   * To create a parent/child state use a dot, e.g. &quot;about.sales&quot;, &quot;home.newest&quot;.
   * @param {object} stateConfig State configuration object.
   * @param {string|function=} stateConfig.template
   * &lt;a id=&#39;template&#39;&gt;&lt;/a&gt;
   *   html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&amp;lt;object&amp;gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * &lt;pre&gt;template:
   *   &quot;&lt;h1&gt;inline template definition&lt;/h1&gt;&quot; +
   *   &quot;&lt;div ui-view&gt;&lt;/div&gt;&quot;&lt;/pre&gt;
   * &lt;pre&gt;template: function(params) {
   *       return &quot;&lt;h1&gt;generated template&lt;/h1&gt;&quot;; }&lt;/pre&gt;
   * &lt;/div&gt;
   *
   * @param {string|function=} stateConfig.templateUrl
   * &lt;a id=&#39;templateUrl&#39;&gt;&lt;/a&gt;
   *
   *   path or function that returns a path to an html
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&amp;lt;object&amp;gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * &lt;pre&gt;templateUrl: &quot;home.html&quot;&lt;/pre&gt;
   * &lt;pre&gt;templateUrl: function(params) {
   *     return myTemplates[params.pageId]; }&lt;/pre&gt;
   *
   * @param {function=} stateConfig.templateProvider
   * &lt;a id=&#39;templateProvider&#39;&gt;&lt;/a&gt;
   *    Provider function that returns HTML content string.
   * &lt;pre&gt; templateProvider:
   *       function(MyTemplateService, params) {
   *         return MyTemplateService.getTemplate(params.pageId);
   *       }&lt;/pre&gt;
   *
   * @param {string|function=} stateConfig.controller
   * &lt;a id=&#39;controller&#39;&gt;&lt;/a&gt;
   *
   *  Controller fn that should be associated with newly
   *   related scope or the name of a registered controller if passed as a string.
   *   Optionally, the ControllerAs may be declared here.
   * &lt;pre&gt;controller: &quot;MyRegisteredController&quot;&lt;/pre&gt;
   * &lt;pre&gt;controller:
   *     &quot;MyRegisteredController as fooCtrl&quot;}&lt;/pre&gt;
   * &lt;pre&gt;controller: function($scope, MyService) {
   *     $scope.data = MyService.getData(); }&lt;/pre&gt;
   *
   * @param {function=} stateConfig.controllerProvider
   * &lt;a id=&#39;controllerProvider&#39;&gt;&lt;/a&gt;
   *
   * Injectable provider function that returns the actual controller or string.
   * &lt;pre&gt;controllerProvider:
   *   function(MyResolveData) {
   *     if (MyResolveData.foo)
   *       return &quot;FooCtrl&quot;
   *     else if (MyResolveData.bar)
   *       return &quot;BarCtrl&quot;;
   *     else return function($scope) {
   *       $scope.baz = &quot;Qux&quot;;
   *     }
   *   }&lt;/pre&gt;
   *
   * @param {string=} stateConfig.controllerAs
   * &lt;a id=&#39;controllerAs&#39;&gt;&lt;/a&gt;
   * 
   * A controller alias name. If present the controller will be
   *   published to scope under the controllerAs name.
   * &lt;pre&gt;controllerAs: &quot;myCtrl&quot;&lt;/pre&gt;
   *
   * @param {string|object=} stateConfig.parent
   * &lt;a id=&#39;parent&#39;&gt;&lt;/a&gt;
   * Optionally specifies the parent state of this state.
   *
   * &lt;pre&gt;parent: &#39;parentState&#39;&lt;/pre&gt;
   * &lt;pre&gt;parent: parentState // JS variable&lt;/pre&gt;
   *
   * @param {object=} stateConfig.resolve
   * &lt;a id=&#39;resolve&#39;&gt;&lt;/a&gt;
   *
   * An optional map&amp;lt;string, function&amp;gt; of dependencies which
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved before the controller is instantiated.
   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
   *   and the values of the resolved promises are injected into any controllers that reference them.
   *   If any  of the promises are rejected the $stateChangeError event is fired.
   *
   *   The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * &lt;pre&gt;resolve: {
   *     myResolve1:
   *       function($http, $stateParams) {
   *         return $http.get(&quot;/api/foos/&quot;+stateParams.fooID);
   *       }
   *     }&lt;/pre&gt;
   *
   * @param {string=} stateConfig.url
   * &lt;a id=&#39;url&#39;&gt;&lt;/a&gt;
   *
   *   A url fragment with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
   *   more details on acceptable patterns )
   *
   * examples:
   * &lt;pre&gt;url: &quot;/home&quot;
   * url: &quot;/users/:userid&quot;
   * url: &quot;/books/{bookid:[a-zA-Z_-]}&quot;
   * url: &quot;/books/{categoryid:int}&quot;
   * url: &quot;/books/{publishername:string}/{categoryid:int}&quot;
   * url: &quot;/messages?before&amp;after&quot;
   * url: &quot;/messages?{before:date}&amp;{after:date}&quot;
   * url: &quot;/messages/:mailboxid?{before:date}&amp;{after:date}&quot;
   * &lt;/pre&gt;
   *
   * @param {object=} stateConfig.views
   * &lt;a id=&#39;views&#39;&gt;&lt;/a&gt;
   * an optional map&amp;lt;string, object&amp;gt; which defined multiple views, or targets views
   * manually/explicitly.
   *
   * Examples:
   *
   * Targets three named `ui-view`s in the parent state&#39;s template
   * &lt;pre&gt;views: {
   *     header: {
   *       controller: &quot;headerCtrl&quot;,
   *       templateUrl: &quot;header.html&quot;
   *     }, body: {
   *       controller: &quot;bodyCtrl&quot;,
   *       templateUrl: &quot;body.html&quot;
   *     }, footer: {
   *       controller: &quot;footCtrl&quot;,
   *       templateUrl: &quot;footer.html&quot;
   *     }
   *   }&lt;/pre&gt;
   *
   * Targets named `ui-view=&quot;header&quot;` from grandparent state &#39;top&#39;&#39;s template, and named `ui-view=&quot;body&quot; from parent state&#39;s template.
   * &lt;pre&gt;views: {
   *     &#39;header@top&#39;: {
   *       controller: &quot;msgHeaderCtrl&quot;,
   *       templateUrl: &quot;msgHeader.html&quot;
   *     }, &#39;body&#39;: {
   *       controller: &quot;messagesCtrl&quot;,
   *       templateUrl: &quot;messages.html&quot;
   *     }
   *   }&lt;/pre&gt;
   *
   * @param {boolean=} [stateConfig.abstract=false]
   * &lt;a id=&#39;abstract&#39;&gt;&lt;/a&gt;
   * An abstract state will never be directly activated,
   *   but can provide inherited properties to its common children states.
   * &lt;pre&gt;abstract: true&lt;/pre&gt;
   *
   * @param {function=} stateConfig.onEnter
   * &lt;a id=&#39;onEnter&#39;&gt;&lt;/a&gt;
   *
   * Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explictly annotate this function,
   * because it won&#39;t be automatically annotated by your build tools.
   *
   * &lt;pre&gt;onEnter: function(MyService, $stateParams) {
   *     MyService.foo($stateParams.myParam);
   * }&lt;/pre&gt;
   *
   * @param {function=} stateConfig.onExit
   * &lt;a id=&#39;onExit&#39;&gt;&lt;/a&gt;
   *
   * Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explictly annotate this function,
   * because it won&#39;t be automatically annotated by your build tools.
   *
   * &lt;pre&gt;onExit: function(MyService, $stateParams) {
   *     MyService.cleanup($stateParams.myParam);
   * }&lt;/pre&gt;
   *
   * @param {boolean=} [stateConfig.reloadOnSearch=true]
   * &lt;a id=&#39;reloadOnSearch&#39;&gt;&lt;/a&gt;
   *
   * If `false`, will not retrigger the same state
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you&#39;d like to modify $location.search() without triggering a reload.
   * &lt;pre&gt;reloadOnSearch: false&lt;/pre&gt;
   *
   * @param {object=} stateConfig.data
   * &lt;a id=&#39;data&#39;&gt;&lt;/a&gt;
   *
   * Arbitrary data object, useful for custom configuration.  The parent state&#39;s `data` is
   *   prototypally inherited.  In other words, adding a data property to a state adds it to
   *   the entire subtree via prototypal inheritance.
   *
   * &lt;pre&gt;data: {
   *     requiredRole: &#39;foo&#39;
   * } &lt;/pre&gt;
   *
   * @param {object=} stateConfig.params
   * &lt;a id=&#39;params&#39;&gt;&lt;/a&gt;
   *
   * A map which optionally configures parameters declared in the `url`, or
   *   defines additional non-url parameters.  For each parameter being
   *   configured, add a configuration object keyed to the name of the parameter.
   *
   *   Each parameter configuration object may contain the following properties:
   *
   *   - ** value ** - {object|function=}: specifies the default value for this
   *     parameter.  This implicitly sets this parameter as optional.
   *
   *     When UI-Router routes to a state and no value is
   *     specified for this parameter in the URL or transition, the
   *     default value will be used instead.  If `value` is a function,
   *     it will be injected and invoked, and the return value used.
   *
   *     *Note*: `undefined` is treated as &quot;no default value&quot; while `null`
   *     is treated as &quot;the default value is `null`&quot;.
   *
   *     *Shorthand*: If you only need to configure the default value of the
   *     parameter, you may use a shorthand syntax.   In the **`params`**
   *     map, instead mapping the param name to a full parameter configuration
   *     object, simply set map it to the default parameter value, e.g.:
   *
   * &lt;pre&gt;// define a parameter&#39;s default value
   * params: {
   *     param1: { value: &quot;defaultValue&quot; }
   * }
   * // shorthand default values
   * params: {
   *     param1: &quot;defaultValue&quot;,
   *     param2: &quot;param2Default&quot;
   * }&lt;/pre&gt;
   *
   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
   *     treated as an array of values.  If you specified a Type, the value will be
   *     treated as an array of the specified Type.  Note: query parameter values
   *     default to a special `&quot;auto&quot;` mode.
   *
   *     For query parameters in `&quot;auto&quot;` mode, if multiple  values for a single parameter
   *     are present in the URL (e.g.: `/foo?bar=1&amp;bar=2&amp;bar=3`) then the values
   *     are mapped to an array (e.g.: `{ foo: [ &#39;1&#39;, &#39;2&#39;, &#39;3&#39; ] }`).  However, if
   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
   *     value (e.g.: `{ foo: &#39;1&#39; }`).
   *
   * &lt;pre&gt;params: {
   *     param1: { array: true }
   * }&lt;/pre&gt;
   *
   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
   *     configured default squash policy.
   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
   *
   *   There are three squash settings:
   *
   *     - false: The parameter&#39;s default value is not squashed.  It is encoded and included in the URL
   *     - true: The parameter&#39;s default value is omitted from the URL.  If the parameter is preceeded and followed
   *       by slashes in the state&#39;s `url` declaration, then one of those slashes are omitted.
   *       This can allow for cleaner looking URLs.
   *     - `&quot;&lt;arbitrary string&gt;&quot;`: The parameter&#39;s default value is replaced with an arbitrary placeholder of  your choice.
   *
   * &lt;pre&gt;params: {
   *     param1: {
   *       value: &quot;defaultId&quot;,
   *       squash: true
   * } }
   * // squash &quot;defaultValue&quot; to &quot;~&quot;
   * params: {
   *     param1: {
   *       value: &quot;defaultValue&quot;,
   *       squash: &quot;~&quot;
   * } }
   * &lt;/pre&gt;
   *
   *
   * @example
   * &lt;pre&gt;
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state(&quot;home&quot;, {});
   *
   * // Or it can be a nested state name. This state is a child of the
   * // above &quot;home&quot; state.
   * $stateProvider.state(&quot;home.newest&quot;, {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state(&quot;home.newest.abc.xyz.inception&quot;, {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state(&quot;home&quot;, {})
   *   .state(&quot;about&quot;, {})
   *   .state(&quot;contacts&quot;, {});
   * &lt;/pre&gt;
   *
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   * @requires ui.router.router.$urlRouter
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you&#39;d like to test against the current active state.
   * @property {object} current A reference to the state&#39;s config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that&#39;ll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you&#39;re coming from.
   */
  this.$get = $get;
  $get.$inject = [&#39;$rootScope&#39;, &#39;$q&#39;, &#39;$view&#39;, &#39;$injector&#39;, &#39;$resolve&#39;, &#39;$stateParams&#39;, &#39;$urlRouter&#39;, &#39;$location&#39;, &#39;$urlMatcherFactory&#39;];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

    var TransitionSuperseded = $q.reject(new Error(&#39;transition superseded&#39;));
    var TransitionPrevented = $q.reject(new Error(&#39;transition prevented&#39;));
    var TransitionAborted = $q.reject(new Error(&#39;transition aborted&#39;));
    var TransitionFailed = $q.reject(new Error(&#39;transition failed&#39;));

    // Handles the case where a state which is the target of a transition is not found, and the user
    // can optionally retry or defer the transition
    function handleRedirect(redirect, state, params, options) {
      /**
       * @ngdoc event
       * @name ui.router.state.$state#$stateNotFound
       * @eventOf ui.router.state.$state
       * @eventType broadcast on root scope
       * @description
       * Fired when a requested state **cannot be found** using the provided state name during transition.
       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
       * transition and the promise returned from `go` will be rejected with a `&#39;transition aborted&#39;` value.
       *
       * @param {Object} event Event object.
       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
       * @param {State} fromState Current state object.
       * @param {Object} fromParams Current state params.
       *
       * @example
       *
       * &lt;pre&gt;
       * // somewhere, assume lazy.state has not been defined
       * $state.go(&quot;lazy.state&quot;, {a:1, b:2}, {inherit:false});
       *
       * // somewhere else
       * $scope.$on(&#39;$stateNotFound&#39;,
       * function(event, unfoundState, fromState, fromParams){
       *     console.log(unfoundState.to); // &quot;lazy.state&quot;
       *     console.log(unfoundState.toParams); // {a:1, b:2}
       *     console.log(unfoundState.options); // {inherit:false} + default options
       * })
       * &lt;/pre&gt;
       */
      var evt = $rootScope.$broadcast(&#39;$stateNotFound&#39;, redirect, state, params);

      if (evt.defaultPrevented) {
        $urlRouter.update();
        return TransitionAborted;
      }

      if (!evt.retry) {
        return null;
      }

      // Allow the handler to return a promise to defer state lookup retry
      if (options.$retry) {
        $urlRouter.update();
        return TransitionFailed;
      }
      var retryTransition = $state.transition = $q.when(evt.retry);

      retryTransition.then(function() {
        if (retryTransition !== $state.transition) return TransitionSuperseded;
        redirect.options.$retry = true;
        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
      }, function() {
        return TransitionAborted;
      });
      $urlRouter.update();

      return retryTransition;
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };

    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved,
     * controllers reinstantiated, and events re-fired.
     *
     * @example
     * &lt;pre&gt;
     * var app angular.module(&#39;app&#39;, [&#39;ui.router&#39;]);
     *
     * app.controller(&#39;ctrl&#39;, function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * &lt;/pre&gt;
     *
     * `reload()` is just an alias for:
     * &lt;pre&gt;
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * &lt;/pre&gt;
     *
     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
     * @example
     * &lt;pre&gt;
     * //assuming app application consists of 3 states: &#39;contacts&#39;, &#39;contacts.detail&#39;, &#39;contacts.detail.item&#39; 
     * //and current state is &#39;contacts.detail.item&#39;
     * var app angular.module(&#39;app&#39;, [&#39;ui.router&#39;]);
     *
     * app.controller(&#39;ctrl&#39;, function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload &#39;contact.detail&#39; and &#39;contact.detail.item&#39; states
     *     $state.reload(&#39;contact.detail&#39;);
     *   }
     * });
     * &lt;/pre&gt;
     *
     * `reload()` is just an alias for:
     * &lt;pre&gt;
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * &lt;/pre&gt;

     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.reload = function reload(state) {
      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you&#39;d like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * &lt;pre&gt;
     * var app = angular.module(&#39;app&#39;, [&#39;ui.router&#39;]);
     *
     * app.controller(&#39;ctrl&#39;, function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go(&#39;contact.detail&#39;);
     *   };
     * });
     * &lt;/pre&gt;
     * &lt;img src=&#39;../ngdoc_assets/StateGoExamples.png&#39;/&gt;
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go(&#39;contact.detail&#39;)` - will go to the `contact.detail` state
     * - `$state.go(&#39;^&#39;)` - will go to a parent state
     * - `$state.go(&#39;^.sibling&#39;)` - will go to a sibling state
     * - `$state.go(&#39;.child.grandchild&#39;)` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `&quot;replace&quot;`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g &#39;^&#39;), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you&#39;d
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * &lt;br/&gt;Possible rejection values:
     *
     * - &#39;transition superseded&#39; - when a newer transition has been started after this one
     * - &#39;transition prevented&#39; - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - &#39;transition aborted&#39; - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - &#39;transition failed&#39; - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * &lt;pre&gt;
     * var app = angular.module(&#39;app&#39;, [&#39;ui.router&#39;]);
     *
     * app.controller(&#39;ctrl&#39;, function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo(&#39;contact.detail&#39;);
     *   };
     * });
     * &lt;/pre&gt;
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `&quot;replace&quot;`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g &#39;^&#39;), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you&#39;d
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *    if String, then will reload the state with the name given in reload, and any children.
     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      // Store the hash param for later (since it will be stripped out by various methods)
      var hash = toParams[&#39;#&#39;];

      if (!isDefined(toState)) {
        var redirect = { to: to, toParams: toParams, options: options };
        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

        if (redirectResult) {
          return redirectResult;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);

        if (!isDefined(toState)) {
          if (!options.relative) throw new Error(&quot;No such state &#39;&quot; + to + &quot;&#39;&quot;);
          throw new Error(&quot;Could not resolve &#39;&quot; + to + &quot;&#39; from state &#39;&quot; + options.relative + &quot;&#39;&quot;);
        }
      }
      if (toState[abstractKey]) throw new Error(&quot;Cannot transition to abstract state &#39;&quot; + to + &quot;&#39;&quot;);
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      if (!toState.params.$$validates(toParams)) return TransitionFailed;

      toParams = toState.params.$$values(toParams);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven&#39;t changed
      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

      if (!options.reload) {
        while (state &amp;&amp; state === fromPath[keep] &amp;&amp; state.ownParams.$$equals(toParams, fromParams)) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      } else if (isString(options.reload) || isObject(options.reload)) {
        if (isObject(options.reload) &amp;&amp; !options.reload.name) {
          throw new Error(&#39;Invalid reload state object&#39;);
        }
        
        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
        if (options.reload &amp;&amp; !reloadState) {
          throw new Error(&quot;No such reload state &#39;&quot; + (isString(options.reload) ? options.reload : options.reload.name) + &quot;&#39;&quot;);
        }

        while (state &amp;&amp; state === fromPath[keep] &amp;&amp; state !== reloadState) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      }

      // If we&#39;re going to the same state and all locals are kept, we&#39;ve got nothing to do.
      // But clear &#39;transition&#39;, as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump &#39;transition&#39; if we&#39;re called from a location change
      // that we&#39;ve initiated ourselves, because we might accidentally abort a legitimate
      // transition initiated from code?
      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
        if (hash) toParams[&#39;#&#39;] = hash;
        $state.params = toParams;
        copy($state.params, $stateParams);
        if (options.location &amp;&amp; to.navigable &amp;&amp; to.navigable.url) {
          $urlRouter.push(to.navigable.url, toParams, {
            $$avoidResync: true, replace: options.location === &#39;replace&#39;
          });
          $urlRouter.update(true);
        }
        $state.transition = null;
        return $q.when($state.current);
      }

      // Filter parameters before we pass them to event handlers etc.
      toParams = filterByKeys(to.params.$$keys(), toParams || {});

      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `&#39;transition prevented&#39;` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * &lt;pre&gt;
         * $rootScope.$on(&#39;$stateChangeStart&#39;,
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a &#39;transition prevented&#39; error
         * })
         * &lt;/pre&gt;
         */
        if ($rootScope.$broadcast(&#39;$stateChangeStart&#39;, to.self, toParams, from.self, fromParams).defaultPrevented) {
          $rootScope.$broadcast(&#39;$stateChangeCancel&#39;, to.self, toParams, from.self, fromParams);
          $urlRouter.update();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don&#39;t update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);

      for (var l = keep; l &lt; toPath.length; l++, state = toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit &#39;from&#39; states not kept
        for (l = fromPath.length - 1; l &gt;= keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter &#39;to&#39; states not kept
        for (l = keep; l &lt; toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Re-add the saved hash before we start returning things
        if (hash) toParams[&#39;#&#39;] = hash;

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        if (options.location &amp;&amp; to.navigable) {
          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
            $$avoidResync: true, replace: options.location === &#39;replace&#39;
          });
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast(&#39;$stateChangeSuccess&#39;, to.self, toParams, from.self, fromParams);
        }
        $urlRouter.update(true);

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It&#39;s important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        evt = $rootScope.$broadcast(&#39;$stateChangeError&#39;, to.self, toParams, from.self, fromParams, error);

        if (!evt.defaultPrevented) {
            $urlRouter.update();
        }

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be
     * tested for strict equality against the current active params object, so all params
     * must match with none missing and no extras.
     *
     * @example
     * &lt;pre&gt;
     * $state.$current.name = &#39;contacts.details.item&#39;;
     *
     * // absolute name
     * $state.is(&#39;contact.details.item&#39;); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the &#39;contacts.details&#39; template
     * &lt;div ng-class=&quot;{highlighted: $state.is(&#39;.item&#39;)}&quot;&gt;Item&lt;/div&gt;
     * &lt;/pre&gt;
     *
     * @param {string|object} stateOrName The state name (absolute or relative) or state object you&#39;d like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you&#39;d like
     * to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
     * test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) { return undefined; }
      if ($state.$current !== state) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you&#39;d like to test for equality.
     *
     * @example
     * Partial and relative names
     * &lt;pre&gt;
     * $state.$current.name = &#39;contacts.details.item&#39;;
     *
     * // Using partial names
     * $state.includes(&quot;contacts&quot;); // returns true
     * $state.includes(&quot;contacts.details&quot;); // returns true
     * $state.includes(&quot;contacts.details.item&quot;); // returns true
     * $state.includes(&quot;contacts.list&quot;); // returns false
     * $state.includes(&quot;about&quot;); // returns false
     *
     * // Using relative names (. and ^), typically from a template
     * // E.g. from the &#39;contacts.details&#39; template
     * &lt;div ng-class=&quot;{highlighted: $state.includes(&#39;.item&#39;)}&quot;&gt;Item&lt;/div&gt;
     * &lt;/pre&gt;
     *
     * Basic globbing patterns
     * &lt;pre&gt;
     * $state.$current.name = &#39;contacts.details.item.url&#39;;
     *
     * $state.includes(&quot;*.details.*.*&quot;); // returns true
     * $state.includes(&quot;*.details.**&quot;); // returns true
     * $state.includes(&quot;**.item.**&quot;); // returns true
     * $state.includes(&quot;*.details.item.url&quot;); // returns true
     * $state.includes(&quot;*.details.*.url&quot;); // returns true
     * $state.includes(&quot;*.details.*&quot;); // returns false
     * $state.includes(&quot;item.**&quot;); // returns false
     * &lt;/pre&gt;
     *
     * @param {string} stateOrName A partial name, relative name, or glob pattern
     * to be searched for within the current state name.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
     * that you&#39;d like to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
     * .includes will test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    $state.includes = function includes(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      if (isString(stateOrName) &amp;&amp; isGlob(stateOrName)) {
        if (!doesStateMatchGlob(stateOrName)) {
          return false;
        }
        stateOrName = $state.$current.name;
      }

      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) { return undefined; }
      if (!isDefined($state.$current.includes[state.name])) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * &lt;pre&gt;
     * expect($state.href(&quot;about.person&quot;, { person: &quot;bob&quot; })).toEqual(&quot;/about/bob&quot;);
     * &lt;/pre&gt;
     *
     * @param {string|object} stateOrName The state name or state object you&#39;d like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state&#39;s required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g &#39;^&#39;), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. &quot;http://www.example.com/fullurl&quot;.
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({
        lossy:    true,
        inherit:  true,
        absolute: false,
        relative: $state.$current
      }, options || {});

      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) return null;
      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
      
      var nav = (state &amp;&amp; options.lossy) ? state.navigable : state;

      if (!nav || nav.url === undefined || nav.url === null) {
        return null;
      }
      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat(&#39;#&#39;), params || {}), {
        absolute: options.absolute
      });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
     * @returns {Object|Array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
      var state = findState(stateOrName, context || $state.$current);
      return (state &amp;&amp; state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
      var locals = { $stateParams: $stateParams };

      // Resolve &#39;global&#39; dependencies for the state, i.e. those not specific to a view.
      // We&#39;re also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [dst.resolve.then(function (globals) {
        dst.globals = globals;
      })];
      if (inherited) promises.push(inherited);

      function resolveViews() {
        var viewsPromises = [];

        // Resolve template and dependencies for all views.
        forEach(state.views, function (view, name) {
          var injectables = (view.resolve &amp;&amp; view.resolve !== state.resolve ? view.resolve : {});
          injectables.$template = [ function () {
            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || &#39;&#39;;
          }];

          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
            // References to the controller (only instantiated at link time)
            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
              var injectLocals = angular.extend({}, injectables, dst.globals);
              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
            } else {
              result.$$controller = view.controller;
            }
            // Provide access to the state itself for internal use
            result.$$state = state;
            result.$$controllerAs = view.controllerAs;
            dst[name] = result;
          }));
        });

        return $q.all(viewsPromises).then(function(){
          return dst.globals;
        });
      }

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(resolveViews).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
    // Return true if there are no differences in non-search (path/object) params, false if there are differences
    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
      function notSearchParam(key) {
        return fromAndToState.params[key].location != &quot;search&quot;;
      }
      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
      return nonQueryParamSet.$$equals(fromParams, toParams);
    }

    // If reload was not explicitly requested
    // and we&#39;re transitioning to the same state we&#39;re already in
    // and    the locals didn&#39;t change
    //     or they changed in a way that doesn&#39;t merit reloading
    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
    // Then return true.
    if (!options.reload &amp;&amp; to === from &amp;&amp;
      (locals === from.locals || (to.self.reloadOnSearch === false &amp;&amp; nonSearchParamsEqual(from, fromParams, toParams)))) {
      return true;
    }
  }
}

angular.module(&#39;ui.router.state&#39;)
  .value(&#39;$stateParams&#39;, {})
  .provider(&#39;$state&#39;, $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = [&#39;$rootScope&#39;, &#39;$templateFactory&#39;];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load(&#39;full.viewName&#39;, { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        if (result &amp;&amp; options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$viewContentLoading
         * @eventOf ui.router.state.$view
         * @eventType broadcast on root scope
         * @description
         *
         * Fired once the view **begins loading**, *before* the DOM is rendered.
         *
         * @param {Object} event Event object.
         * @param {Object} viewConfig The view config properties (template, controller, etc).
         *
         * @example
         *
         * &lt;pre&gt;
         * $scope.$on(&#39;$viewContentLoading&#39;,
         * function(event, viewConfig){
         *     // Access to all the view config properties.
         *     // and one special property &#39;targetView&#39;
         *     // viewConfig.targetView
         * });
         * &lt;/pre&gt;
         */
          $rootScope.$broadcast(&#39;$viewContentLoading&#39;, options);
        }
        return result;
      }
    };
  }
}

angular.module(&#39;ui.router.state&#39;).provider(&#39;$view&#39;, $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = [&#39;$anchorScroll&#39;, &#39;$timeout&#39;, function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      return $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module(&#39;ui.router.state&#39;).provider(&#39;$uiViewScroll&#39;, $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} name A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router&#39;s custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let&#39;s you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * &lt;pre&gt;
 * &lt;!-- Unnamed --&gt;
 * &lt;div ui-view&gt;&lt;/div&gt; 
 * 
 * &lt;!-- Named --&gt;
 * &lt;div ui-view=&quot;viewName&quot;&gt;&lt;/div&gt;
 * &lt;/pre&gt;
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * &lt;pre&gt;
 * &lt;div ui-view&gt;&lt;/div&gt; 
 * $stateProvider.state(&quot;home&quot;, {
 *   template: &quot;&lt;h1&gt;HELLO!&lt;/h1&gt;&quot;
 * })
 * &lt;/pre&gt;
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * &lt;pre&gt;
 * $stateProvider.state(&quot;home&quot;, {
 *   views: {
 *     &quot;&quot;: {
 *       template: &quot;&lt;h1&gt;HELLO!&lt;/h1&gt;&quot;
 *     }
 *   }    
 * })
 * &lt;/pre&gt;
 * 
 * But typically you&#39;ll only use the views property if you name your view or have more than one view 
 * in the same template. There&#39;s not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * &lt;pre&gt;
 * &lt;div ui-view=&quot;main&quot;&gt;&lt;/div&gt;
 * &lt;/pre&gt; 
 * &lt;pre&gt;
 * $stateProvider.state(&quot;home&quot;, {
 *   views: {
 *     &quot;main&quot;: {
 *       template: &quot;&lt;h1&gt;HELLO!&lt;/h1&gt;&quot;
 *     }
 *   }    
 * })
 * &lt;/pre&gt;
 * 
 * Really though, you&#39;ll use views to set up multiple views:
 * &lt;pre&gt;
 * &lt;div ui-view&gt;&lt;/div&gt;
 * &lt;div ui-view=&quot;chart&quot;&gt;&lt;/div&gt; 
 * &lt;div ui-view=&quot;data&quot;&gt;&lt;/div&gt; 
 * &lt;/pre&gt;
 * 
 * &lt;pre&gt;
 * $stateProvider.state(&quot;home&quot;, {
 *   views: {
 *     &quot;&quot;: {
 *       template: &quot;&lt;h1&gt;HELLO!&lt;/h1&gt;&quot;
 *     },
 *     &quot;chart&quot;: {
 *       template: &quot;&lt;chart_thing/&gt;&quot;
 *     },
 *     &quot;data&quot;: {
 *       template: &quot;&lt;data_thing/&gt;&quot;
 *     }
 *   }    
 * })
 * &lt;/pre&gt;
 *
 * Examples for `autoscroll`:
 *
 * &lt;pre&gt;
 * &lt;!-- If autoscroll present with no expression,
 *      then scroll ui-view into view --&gt;
 * &lt;ui-view autoscroll/&gt;
 *
 * &lt;!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true --&gt;
 * &lt;ui-view autoscroll=&#39;true&#39;/&gt;
 * &lt;ui-view autoscroll=&#39;false&#39;/&gt;
 * &lt;ui-view autoscroll=&#39;scopeVariable&#39;/&gt;
 * &lt;/pre&gt;
 */
$ViewDirective.$inject = [&#39;$state&#39;, &#39;$injector&#39;, &#39;$uiViewScroll&#39;, &#39;$interpolate&#39;];
function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service(&#39;$animator&#39;),
      $animate = service(&#39;$animate&#39;);

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = function() {
      return {
        enter: function (element, target, cb) { target.after(element); cb(); },
        leave: function (element, cb) { element.remove(); cb(); }
      };
    };

    if ($animate) {
      return {
        enter: function(element, target, cb) {
          var promise = $animate.enter(element, null, target, cb);
          if (promise &amp;&amp; promise.then) promise.then(cb);
        },
        leave: function(element, cb) {
          var promise = $animate.leave(element, cb);
          if (promise &amp;&amp; promise.then) promise.then(cb);
        }
      };
    }

    if ($animator) {
      var animate = $animator &amp;&amp; $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics();
  }

  var directive = {
    restrict: &#39;ECA&#39;,
    terminal: true,
    priority: 400,
    transclude: &#39;element&#39;,
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || &#39;&#39;,
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope);

        scope.$on(&#39;$stateChangeSuccess&#39;, function() {
          updateView(false);
        });
        scope.$on(&#39;$viewContentLoading&#39;, function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          if (previousEl) {
            previousEl.remove();
            previousEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }

          if (currentEl) {
            renderer.leave(currentEl, function() {
              previousEl = null;
            });

            previousEl = currentEl;
            currentEl = null;
          }
        }

        function updateView(firstTime) {
          var newScope,
              name            = getUiViewName(scope, attrs, $element, $interpolate),
              previousLocals  = name &amp;&amp; $state.$current &amp;&amp; $state.$current.locals[name];

          if (!firstTime &amp;&amp; previousLocals === latestLocals) return; // nothing to do
          newScope = scope.$new();
          latestLocals = $state.$current.locals[name];

          var clone = $transclude(newScope, function(clone) {
            renderer.enter(clone, $element, function onUiViewEnter() {
              if(currentScope) {
                currentScope.$emit(&#39;$viewContentAnimationEnded&#39;);
              }

              if (angular.isDefined(autoScrollExp) &amp;&amp; !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description           *
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           */
          currentScope.$emit(&#39;$viewContentLoaded&#39;);
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = [&#39;$compile&#39;, &#39;$controller&#39;, &#39;$state&#39;, &#39;$interpolate&#39;];
function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
  return {
    restrict: &#39;ECA&#39;,
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var current = $state.$current,
            name = getUiViewName(scope, attrs, $element, $interpolate),
            locals  = current &amp;&amp; current.locals[name];

        if (! locals) {
          return;
        }

        $element.data(&#39;$uiView&#39;, { name: name, state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          locals.$element = $element;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
          }
          $element.data(&#39;$ngControllerController&#39;, controller);
          $element.children().data(&#39;$ngControllerController&#39;, controller);
        }

        link(scope);
      };
    }
  };
}

/**
 * Shared ui-view code for both directives:
 * Given scope, element, and its attributes, return the view&#39;s name
 */
function getUiViewName(scope, attrs, element, $interpolate) {
  var name = $interpolate(attrs.uiView || attrs.name || &#39;&#39;)(scope);
  var inherited = element.inheritedData(&#39;$uiView&#39;);
  return name.indexOf(&#39;@&#39;) &gt;= 0 ?  name :  (name + &#39;@&#39; + (inherited ? inherited.state.name : &#39;&#39;));
}

angular.module(&#39;ui.router.state&#39;).directive(&#39;uiView&#39;, $ViewDirective);
angular.module(&#39;ui.router.state&#39;).directive(&#39;uiView&#39;, $ViewDirectiveFill);

function parseStateRef(ref, current) {
  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
  if (preparsed) ref = current + &#39;(&#39; + preparsed[1] + &#39;)&#39;;
  parsed = ref.replace(/\n/g, &quot; &quot;).match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error(&quot;Invalid state ref &#39;&quot; + ref + &quot;&#39;&quot;);
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData(&#39;$uiView&#39;);

  if (stateData &amp;&amp; stateData.state &amp;&amp; stateData.state.name) {
    return stateData.state;
  }
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`&lt;a&gt;` tag) to a state. If the state has an associated 
 * URL, the directive will automatically generate &amp; update the `href` attribute via 
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
 * the link will trigger a state transition with optional parameters. 
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative 
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the 
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here&#39;s an example of how you&#39;d use ui-sref and how it would compile. If you have the 
 * following template:
 * &lt;pre&gt;
 * &lt;a ui-sref=&quot;home&quot;&gt;Home&lt;/a&gt; | &lt;a ui-sref=&quot;about&quot;&gt;About&lt;/a&gt; | &lt;a ui-sref=&quot;{page: 2}&quot;&gt;Next page&lt;/a&gt;
 * 
 * &lt;ul&gt;
 *     &lt;li ng-repeat=&quot;contact in contacts&quot;&gt;
 *         &lt;a ui-sref=&quot;contacts.detail({ id: contact.id })&quot;&gt;{{ contact.name }}&lt;/a&gt;
 *     &lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;/pre&gt;
 * 
 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
 * &lt;pre&gt;
 * &lt;a href=&quot;#/home&quot; ui-sref=&quot;home&quot;&gt;Home&lt;/a&gt; | &lt;a href=&quot;#/about&quot; ui-sref=&quot;about&quot;&gt;About&lt;/a&gt; | &lt;a href=&quot;#/contacts?page=2&quot; ui-sref=&quot;{page: 2}&quot;&gt;Next page&lt;/a&gt;
 * 
 * &lt;ul&gt;
 *     &lt;li ng-repeat=&quot;contact in contacts&quot;&gt;
 *         &lt;a href=&quot;#/contacts/1&quot; ui-sref=&quot;contacts.detail({ id: contact.id })&quot;&gt;Joe&lt;/a&gt;
 *     &lt;/li&gt;
 *     &lt;li ng-repeat=&quot;contact in contacts&quot;&gt;
 *         &lt;a href=&quot;#/contacts/2&quot; ui-sref=&quot;contacts.detail({ id: contact.id })&quot;&gt;Alice&lt;/a&gt;
 *     &lt;/li&gt;
 *     &lt;li ng-repeat=&quot;contact in contacts&quot;&gt;
 *         &lt;a href=&quot;#/contacts/3&quot; ui-sref=&quot;contacts.detail({ id: contact.id })&quot;&gt;Bob&lt;/a&gt;
 *     &lt;/li&gt;
 * &lt;/ul&gt;
 *
 * &lt;a ui-sref=&quot;home&quot; ui-sref-opts=&quot;{reload: true}&quot;&gt;Home&lt;/a&gt;
 * &lt;/pre&gt;
 *
 * @param {string} ui-sref &#39;stateName&#39; can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDirective.$inject = [&#39;$state&#39;, &#39;$timeout&#39;];
function $StateRefDirective($state, $timeout) {
  var allowedOptions = [&#39;location&#39;, &#39;inherit&#39;, &#39;reload&#39;, &#39;absolute&#39;];

  return {
    restrict: &#39;A&#39;,
    require: [&#39;?^uiSrefActive&#39;, &#39;?^uiSrefActiveEq&#39;],
    link: function(scope, element, attrs, uiSrefActive) {
      var ref = parseStateRef(attrs.uiSref, $state.current.name);
      var params = null, url = null, base = stateContext(element) || $state.$current;
      // SVGAElement does not use the href attribute, but rather the &#39;xlinkHref&#39; attribute.
      var hrefKind = Object.prototype.toString.call(element.prop(&#39;href&#39;)) === &#39;[object SVGAnimatedString]&#39; ?
                 &#39;xlink:href&#39; : &#39;href&#39;;
      var newHref = null, isAnchor = element.prop(&quot;tagName&quot;).toUpperCase() === &quot;A&quot;;
      var isForm = element[0].nodeName === &quot;FORM&quot;;
      var attr = isForm ? &quot;action&quot; : hrefKind, nav = true;

      var options = { relative: base, inherit: true };
      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

      angular.forEach(allowedOptions, function(option) {
        if (option in optionsOverride) {
          options[option] = optionsOverride[option];
        }
      });

      var update = function(newVal) {
        if (newVal) params = angular.copy(newVal);
        if (!nav) return;

        newHref = $state.href(ref.state, params, options);

        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
        if (activeDirective) {
          activeDirective.$$addStateInfo(ref.state, params);
        }
        if (newHref === null) {
          nav = false;
          return false;
        }
        attrs.$set(attr, newHref);
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
          if (newVal !== params) update(newVal);
        }, true);
        params = angular.copy(scope.$eval(ref.paramExpr));
      }
      update();

      if (isForm) return;

      element.bind(&quot;click&quot;, function(e) {
        var button = e.which || e.button;
        if ( !(button &gt; 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr(&#39;target&#39;)) ) {
          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
          var transition = $timeout(function() {
            $state.go(ref.state, params, options);
          });
          e.preventDefault();

          // if the state has no URL, ignore one preventDefault from the &lt;a&gt; directive.
          var ignorePreventDefaultCount = isAnchor &amp;&amp; !newHref ? 1: 0;
          e.preventDefault = function() {
            if (ignorePreventDefaultCount-- &lt;= 0)
              $timeout.cancel(transition);
          };
        }
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the
 * related ui-sref directive&#39;s state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus
 * relying on `ui-sref`, by having the &quot;active&quot; state&#39;s menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
 * ui-sref-active found at the same level or above the ui-sref will be used.
 *
 * Will activate when the ui-sref&#39;s target state or any child state is active. If you
 * need to activate only when the ui-sref target state is active and *not* any of
 * it&#39;s children, then you will use
 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
 *
 * @example
 * Given the following template:
 * &lt;pre&gt;
 * &lt;ul&gt;
 *   &lt;li ui-sref-active=&quot;active&quot; class=&quot;item&quot;&gt;
 *     &lt;a href ui-sref=&quot;app.user({user: &#39;bilbobaggins&#39;})&quot;&gt;@bilbobaggins&lt;/a&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;/pre&gt;
 *
 *
 * When the app state is &quot;app.user&quot; (or any children states), and contains the state parameter &quot;user&quot; with value &quot;bilbobaggins&quot;,
 * the resulting HTML will appear as (note the &#39;active&#39; class):
 * &lt;pre&gt;
 * &lt;ul&gt;
 *   &lt;li ui-sref-active=&quot;active&quot; class=&quot;item active&quot;&gt;
 *     &lt;a ui-sref=&quot;app.user({user: &#39;bilbobaggins&#39;})&quot; href=&quot;/users/bilbobaggins&quot;&gt;@bilbobaggins&lt;/a&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;/pre&gt;
 *
 * The class name is interpolated **once** during the directives link time (any further changes to the
 * interpolated value are ignored).
 *
 * Multiple classes may be specified in a space-separated format:
 * &lt;pre&gt;
 * &lt;ul&gt;
 *   &lt;li ui-sref-active=&#39;class1 class2 class3&#39;&gt;
 *     &lt;a ui-sref=&quot;app.user&quot;&gt;link&lt;/a&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;/pre&gt;
 */

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active-eq
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
 * when the exact target state used in the `ui-sref` is active; no child states.
 *
 */
$StateRefActiveDirective.$inject = [&#39;$state&#39;, &#39;$stateParams&#39;, &#39;$interpolate&#39;];
function $StateRefActiveDirective($state, $stateParams, $interpolate) {
  return  {
    restrict: &quot;A&quot;,
    controller: [&#39;$scope&#39;, &#39;$element&#39;, &#39;$attrs&#39;, function ($scope, $element, $attrs) {
      var states = [], activeClass;

      // There probably isn&#39;t much point in $observing this
      // uiSrefActive and uiSrefActiveEq share the same directive object with some
      // slight difference in logic routing
      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || &#39;&#39;, false)($scope);

      // Allow uiSref to communicate with uiSrefActive[Equals]
      this.$$addStateInfo = function (newState, newParams) {
        var state = $state.get(newState, stateContext($element));

        states.push({
          state: state || { name: newState },
          params: newParams
        });

        update();
      };

      $scope.$on(&#39;$stateChangeSuccess&#39;, update);

      // Update route state
      function update() {
        if (anyMatch()) {
          $element.addClass(activeClass);
        } else {
          $element.removeClass(activeClass);
        }
      }

      function anyMatch() {
        for (var i = 0; i &lt; states.length; i++) {
          if (isMatch(states[i].state, states[i].params)) {
            return true;
          }
        }
        return false;
      }

      function isMatch(state, params) {
        if (typeof $attrs.uiSrefActiveEq !== &#39;undefined&#39;) {
          return $state.is(state.name, params);
        } else {
          return $state.includes(state.name, params);
        }
      }
    }]
  };
}

angular.module(&#39;ui.router.state&#39;)
  .directive(&#39;uiSref&#39;, $StateRefDirective)
  .directive(&#39;uiSrefActive&#39;, $StateRefActiveDirective)
  .directive(&#39;uiSrefActiveEq&#39;, $StateRefActiveDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is(&quot;stateName&quot;)}.
 */
$IsStateFilter.$inject = [&#39;$state&#39;];
function $IsStateFilter($state) {
  var isFilter = function (state) {
    return $state.is(state);
  };
  isFilter.$stateful = true;
  return isFilter;
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes(&#39;fullOrPartialStateName&#39;)}.
 */
$IncludedByStateFilter.$inject = [&#39;$state&#39;];
function $IncludedByStateFilter($state) {
  var includesFilter = function (state) {
    return $state.includes(state);
  };
  includesFilter.$stateful = true;
  return  includesFilter;
}

angular.module(&#39;ui.router.state&#39;)
  .filter(&#39;isState&#39;, $IsStateFilter)
  .filter(&#39;includedByState&#39;, $IncludedByStateFilter);
})(window, window.angular);</pre>
</div>



  <footer class="clearfix">
    <div class="container">
      <a href="#"><span class="mega-octicon octicon-mark-github"></span></a>

      <ul class="clearfix">
        <li>
          <form accept-charset="UTF-8" action="/site/mobile_preference" class="js-mobile-preference-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tFQY2+t0pjO/Fwy8snA93yOWgaJBpoNZ2QdwAWO1WTpkYTH8KmRaI4u4up3BkxnlKL3uGDfEievGh4e/EQQa3Q==" /></div>
            <input type="hidden" name="mobile" value="false">
            <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

            <button type="submit" class="switch-to-desktop" data-ga-click="Mobile, switch to desktop, switch button">
              Desktop version
            </button>
</form>        </li>

      </ul>
    </div>
  </footer>
  
</body>
</html>

