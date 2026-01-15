/**
 * CMS Adapter Pattern
 * 
 * This file demonstrates how to migrate from static config to a CMS
 * Simply replace the implementations with API calls when ready
 */

import type {
  NavigationConfig,
  HeroConfig,
  ProjectsConfig,
  AboutConfig,
  ContactConfig,
  SiteMetadata,
} from '../types';

// Static imports (current implementation)
import { navigationConfig } from './navigation';
import { heroConfig } from './hero';
import { projectsConfig } from './projects';
import { aboutConfig } from './about';
import { contactConfig } from './contact';
import { siteMetadata } from './metadata';

/**
 * Content fetchers - swap these implementations when migrating to CMS
 * 
 * Example CMS implementation:
 * 
 * export async function getNavigationConfig(): Promise<NavigationConfig> {
 *   const response = await fetch('/api/content/navigation');
 *   return response.json();
 * }
 */

export async function getNavigationConfig(): Promise<NavigationConfig> {
  // TODO: Replace with CMS API call
  // return await cmsClient.getEntry('navigation');
  return Promise.resolve(navigationConfig);
}

export async function getHeroConfig(): Promise<HeroConfig> {
  // TODO: Replace with CMS API call
  // return await cmsClient.getEntry('hero');
  return Promise.resolve(heroConfig);
}

export async function getProjectsConfig(): Promise<ProjectsConfig> {
  // TODO: Replace with CMS API call
  // return await cmsClient.getCollection('projects');
  return Promise.resolve(projectsConfig);
}

export async function getAboutConfig(): Promise<AboutConfig> {
  // TODO: Replace with CMS API call
  // return await cmsClient.getEntry('about');
  return Promise.resolve(aboutConfig);
}

export async function getContactConfig(): Promise<ContactConfig> {
  // TODO: Replace with CMS API call
  // return await cmsClient.getEntry('contact');
  return Promise.resolve(contactConfig);
}

export async function getSiteMetadata(): Promise<SiteMetadata> {
  // TODO: Replace with CMS API call
  // return await cmsClient.getEntry('metadata');
  return Promise.resolve(siteMetadata);
}

/**
 * Example CMS client interface
 * 
 * type CMSClient = {
 *   getEntry: <T>(contentType: string) => Promise<T>;
 *   getCollection: <T>(contentType: string) => Promise<T>;
 *   getAsset: (assetId: string) => Promise<string>;
 * };
 * 
 * Popular CMS options:
 * - Contentful
 * - Sanity
 * - Strapi
 * - WordPress (Headless)
 * - DatoCMS
 */
