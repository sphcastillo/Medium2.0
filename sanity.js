import {
    createClient,
    createImageUrlBuilder,
    createCurrentUserHook,
} from "next-sanity"; 
import imageUrlBuilder from "@sanity/image-url";

export const config = {

    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered "public", but you can use environment variables
     * if you want differ between local dev and  production.
     * 
     * 
     * https://next.js.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVerson: "2022-09-07",
    /**
     * Set  useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will  always bypass the CDN
    **/
    useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions

export const sanityClient = createClient(config); 

/** 
 * Set up a helper function for generating Image URLS with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
**/
export const urlFor = (source) => imageUrlBuilder(config).image(source);

//Helper function for using the current logged in user account

// We are not using this function yet, but it is useful to have it ready for when we do.
export const useCurrentUser = createCurrentUserHook(config);