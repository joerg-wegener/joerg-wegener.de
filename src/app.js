import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      'InstrumentationKey=9bc4af61-3d7d-4e0a-9102-956b8855da42;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=062d1d58-4d68-4a30-b15e-9fbc363e0f81',
  },
})
appInsights.loadAppInsights()
appInsights.trackPageView()

throw new Error('Test')
