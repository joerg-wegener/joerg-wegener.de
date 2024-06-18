# Schritte

1. Ressource Group erstellen

   ```bash
   $ az group create -n RG-JoergWegenerWeb-PROD -l westeurope
   ```

1. Service Principal erstellen

   ```bash
   $ az ad sp create-for-rbac --name GitHub-JoergWegenerWeb-Deploy-PROD --role contributor --scopes /subscriptions/4f240f99-f963-4a1f-8d36-9631baca7f49/resourceGroups/RG-JoergWegenerWeb-PROD --json-auth
   ```

1. Login überprüfen

   ```bash
   $ az login --service-principal -u GitHub-JoergWegenerWeb-Deploy-PROD -p CLIENT_SECRET --tenant TENANT_ID
   $ az account list-locations -o table
   $ az logout
   ```

1. Secret in GitHub eintragen (gesamtes JSON aus erstem Schritt)
