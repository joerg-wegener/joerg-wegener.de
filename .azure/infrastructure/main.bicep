param name string = 'SWeb-JoergWegenerWeb-PROD'
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

resource dnsZone 'Microsoft.Network/dnsZones@2018-05-01' = {
  name: domain
  location: 'global'
  tags: resourceGroup().tags
}

resource cnameRecord 'Microsoft.Network/dnsZones/CNAME@2018-05-01' = {
  name: 'www'
  parent: dnsZone
  properties: {
    TTL: 3600
    CNAMERecord: {
      cname: staticWebApplication.properties.defaultHostname
    }
  }
}

resource staticwebApplicationDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  name: 'www.${domain}'
  parent: staticWebApplication
}
