/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ContactIndexImport } from './routes/contact/index'
import { Route as AboutIndexImport } from './routes/about/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ContactIndexRoute = ContactIndexImport.update({
  path: '/contact/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/contact/': {
      preLoaderRoute: typeof ContactIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutIndexRoute,
  ContactIndexRoute,
])

/* prettier-ignore-end */
