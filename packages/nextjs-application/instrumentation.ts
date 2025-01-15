export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const os = await import('os');
        console.log('I am running server side. ' + os.hostname());
        const { NodeSDK } = await import ('@opentelemetry/sdk-node');
        const { getNodeAutoInstrumentations } = await import ('@opentelemetry/auto-instrumentations-node');
        console.log('Registering OpenTelemetry Node SDK');
        // Uses OTEL environment variables defined in .env for this demo. See .env-sample
        // for setting up your own instance.

        const sdk = new NodeSDK({
            serviceName: 'nextjs-server',
            instrumentations: [getNodeAutoInstrumentations()]
        });
        try {
            //console.log('Starting OpenTelemetry Node SDK');
            sdk.start();
        } catch (e) {
            console.error(e);
        }
    }
}

  // if (process.env.NEXT_RUNTIME === "nodejs") {
  //   process.on('SIGTERM', () => {
  //     // console.log(`Shutting down`);
  //     sdk
  //         .shutdown()
  //         .finally(() => process.exit(0));
  //   });
  // }
// make sure we flush last logs if terminating


