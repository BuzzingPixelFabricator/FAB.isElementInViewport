/*----------------------------------------------------------------------------*\
 # Copyright 2018, BuzzingPixel, LLC
 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the Apache License 2.0.
 # http://www.apache.org/licenses/LICENSE-2.0
 \*----------------------------------------------------------------------------*/

// Make sure FAB is defined
window.FAB = window.FAB || {};

(function(F, W, D) {
    'use strict';

    F.isElementInViewport = function(el) {
        // Check if we're being given a jQuery element
        if (typeof W.jQuery === 'function' && el instanceof W.jQuery) {
            el = el.get(0);
        }

        var rect = el.getBoundingClientRect();
        var vWidth = W.innerWidth || D.documentElement.clientWidth;
        var vHeight = W.innerHeight || D.documentElement.clientHeight;
        var efp = function(x, y) {
            return document.elementFromPoint(x, y);
        };

        // Return false if it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 ||
            rect.left > vWidth || rect.top > vHeight
        ) {
            return false;
        }

        // Return true if any of its four corners are visible
        return (
            el.contains(efp(rect.left, rect.top)) ||
            el.contains(efp(rect.right, rect.top)) ||
            el.contains(efp(rect.right, rect.bottom)) ||
            el.contains(efp(rect.left, rect.bottom))
        );
    };
})(window.FAB, window, window.document);
