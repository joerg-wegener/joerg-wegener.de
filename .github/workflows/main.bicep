param name string = 'SWeb-JoergwegenerWeb-PROD'
param location string = 'West Europe'
param domain string = 'joerg-wegener.de'

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

resource zone 'Microsoft.Network/dnsZones@2018-05-01' = {
  name: domain
  location: 'global'
}
