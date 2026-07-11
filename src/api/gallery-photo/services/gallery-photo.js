'use strict';

/**
 * gallery-photo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gallery-photo.gallery-photo');
