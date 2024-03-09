param name string = 'sweb-joergwegener-prod'
param location string = 'West Europe'

resource staticWebApplication 'Microsoft.Web/staticSites@2022-09-01' = {
  name: name
  location: location
  properties:{
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
  }
  sku: {
    tier: 'Free'
    name: 'Free'
  }

  tags: resourceGroup().tags
}

// resource staticwebApplicationDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
//   name: 'joerg-wegener.de'
//   parent: staticwebApplication
// }
