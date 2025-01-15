'use client';

import {HoneycombWebSDK} from "@honeycombio/opentelemetry-web";
import {getWebAutoInstrumentations} from "@opentelemetry/auto-instrumentations-web";

const apiKey = process.env.NEXT_PUBLIC_HONEYCOMB_API_KEY;

// we need to only run this on the client
// otherwise when rendering the top-level
const componentType = typeof window === 'undefined' ? 'server' : 'client';

const configDefaults = {
    ignoreNetworkEvents: true,
    propagateTraceHeaderCorsUrls: [
        /.localhost:3000+/g, // Regex to match your backend URLs. Update to the domains you wish to include.
    ]
}

export function BrowserTelemetry() {
    // only run on client, not on server. Get out if it tries to SSR this.
    if (componentType === 'server') {
       return null;
    }

    // if we have an API key we can send to Honeycomb
    if (apiKey) {
        try {
            // doesn't specify SDK endpoint, defaults to us v1/traces endpoint
            const sdk = new HoneycombWebSDK({
                apiKey: apiKey,
                endpoint: process.env.NEXT_PUBLIC_HONEYCOMB_URL,
                serviceName: 'nextjs-client',
                instrumentations: [
                    getWebAutoInstrumentations({
                        // Loads custom configuration for xml-http-request instrumentation.
                        '@opentelemetry/instrumentation-xml-http-request': configDefaults,
                        '@opentelemetry/instrumentation-fetch': configDefaults,
                        '@opentelemetry/instrumentation-document-load': configDefaults,
                        '@opentelemetry/instrumentation-user-interaction': { enabled: true }
                    }),
                ],
            });
            sdk.start();
        } catch (e) {
            console.log(`rendering... ${new Date().toISOString()}`);
            console.error(e);
            return null;
        }
        // render nothing
        return null;
    }
}