param(
    [string]$ComponentName,
    [string]$Namespace = "GVV",
    [string]$Version = "1.0.0",
    [string]$FieldType = "Whole.None",
    [string]$PropertyName,
    [string]$PropertyType,
    [string]$ComponentRoot
)

# Build the solution zip for a PCF component without dotnet/msbuild
# Usage: .\Build-Solution.ps1 -ComponentName StarRating -PropertyName rating -PropertyType "Whole.None" -ComponentRoot "C:\...\StarRating"

$packFolder = Join-Path $ComponentRoot "SolutionPack"
$controlsFolder = Join-Path $packFolder "Controls"
$controlFolder = Join-Path $controlsFolder "$Namespace.$ComponentName"
$outControlFolder = Join-Path $ComponentRoot "out\controls\$ComponentName"
$solutionUniqueName = "${Namespace}${ComponentName}"
$zipOutput = Join-Path $ComponentRoot "Solution\bin\Debug"
$zipFile = Join-Path $zipOutput "${solutionUniqueName}_1_0_0_0.zip"

Write-Host "Building solution package for: $Namespace.$ComponentName" -ForegroundColor Cyan

# Create folders
New-Item -ItemType Directory -Path $packFolder -Force | Out-Null
New-Item -ItemType Directory -Path $controlsFolder -Force | Out-Null
New-Item -ItemType Directory -Path $controlFolder -Force | Out-Null
New-Item -ItemType Directory -Path $zipOutput -Force | Out-Null

# Copy PCF build output
Copy-Item "$outControlFolder\bundle.js" $controlFolder -Force
Copy-Item "$outControlFolder\ControlManifest.xml" $controlFolder -Force

# Create [Content_Types].xml
@'
<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="xml" ContentType="application/octet-stream" />
  <Default Extension="js" ContentType="application/octet-stream" />
  <Default Extension="png" ContentType="application/octet-stream" />
</Types>
'@ | Set-Content (Join-Path $packFolder "[Content_Types].xml") -Encoding UTF8

# Create solution.xml
@"
<?xml version="1.0" encoding="utf-8"?>
<ImportExportXml version="9.1.0.643" SolutionPackageVersion="9.1" languagecode="1033" generatedBy="CrmLive" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SolutionManifest>
    <UniqueName>$solutionUniqueName</UniqueName>
    <LocalizedNames>
      <LocalizedName description="$Namespace $ComponentName" languagecode="1033" />
    </LocalizedNames>
    <Descriptions>
      <Description description="GVV PCF Component: $ComponentName" languagecode="1033" />
    </Descriptions>
    <Version>1.0.0.0</Version>
    <Managed>0</Managed>
    <Publisher>
      <UniqueName>Vishnu</UniqueName>
      <LocalizedNames>
        <LocalizedName description="Vishnu" languagecode="1033" />
      </LocalizedNames>
      <Descriptions>
        <Description description="Vishnu" languagecode="1033" />
      </Descriptions>
      <EMailAddress xsi:nil="true"></EMailAddress>
      <SupportingWebsiteUrl xsi:nil="true"></SupportingWebsiteUrl>
      <CustomizationPrefix>gvv</CustomizationPrefix>
      <CustomizationOptionValuePrefix>59851</CustomizationOptionValuePrefix>
      <Addresses>
        <Address>
          <AddressNumber>1</AddressNumber>
          <AddressTypeCode>1</AddressTypeCode>
          <City xsi:nil="true"></City>
          <County xsi:nil="true"></County>
          <Country xsi:nil="true"></Country>
          <Fax xsi:nil="true"></Fax>
          <FreightTermsCode xsi:nil="true"></FreightTermsCode>
          <ImportSequenceNumber xsi:nil="true"></ImportSequenceNumber>
          <Latitude xsi:nil="true"></Latitude>
          <Line1 xsi:nil="true"></Line1>
          <Line2 xsi:nil="true"></Line2>
          <Line3 xsi:nil="true"></Line3>
          <Longitude xsi:nil="true"></Longitude>
          <Name xsi:nil="true"></Name>
          <PostalCode xsi:nil="true"></PostalCode>
          <PostOfficeBox xsi:nil="true"></PostOfficeBox>
          <PrimaryContactName xsi:nil="true"></PrimaryContactName>
          <ShippingMethodCode>1</ShippingMethodCode>
          <StateOrProvince xsi:nil="true"></StateOrProvince>
          <Telephone1 xsi:nil="true"></Telephone1>
          <Telephone2 xsi:nil="true"></Telephone2>
          <Telephone3 xsi:nil="true"></Telephone3>
          <TimeZoneRuleVersionNumber xsi:nil="true"></TimeZoneRuleVersionNumber>
          <UPSZone xsi:nil="true"></UPSZone>
          <UTCOffset xsi:nil="true"></UTCOffset>
          <UTCConversionTimeZoneCode xsi:nil="true"></UTCConversionTimeZoneCode>
        </Address>
        <Address>
          <AddressNumber>2</AddressNumber>
          <AddressTypeCode>1</AddressTypeCode>
          <City xsi:nil="true"></City>
          <County xsi:nil="true"></County>
          <Country xsi:nil="true"></Country>
          <Fax xsi:nil="true"></Fax>
          <FreightTermsCode xsi:nil="true"></FreightTermsCode>
          <ImportSequenceNumber xsi:nil="true"></ImportSequenceNumber>
          <Latitude xsi:nil="true"></Latitude>
          <Line1 xsi:nil="true"></Line1>
          <Line2 xsi:nil="true"></Line2>
          <Line3 xsi:nil="true"></Line3>
          <Longitude xsi:nil="true"></Longitude>
          <Name xsi:nil="true"></Name>
          <PostalCode xsi:nil="true"></PostalCode>
          <PostOfficeBox xsi:nil="true"></PostOfficeBox>
          <PrimaryContactName xsi:nil="true"></PrimaryContactName>
          <ShippingMethodCode>1</ShippingMethodCode>
          <StateOrProvince xsi:nil="true"></StateOrProvince>
          <Telephone1 xsi:nil="true"></Telephone1>
          <Telephone2 xsi:nil="true"></Telephone2>
          <Telephone3 xsi:nil="true"></Telephone3>
          <TimeZoneRuleVersionNumber xsi:nil="true"></TimeZoneRuleVersionNumber>
          <UPSZone xsi:nil="true"></UPSZone>
          <UTCOffset xsi:nil="true"></UTCOffset>
          <UTCConversionTimeZoneCode xsi:nil="true"></UTCConversionTimeZoneCode>
        </Address>
      </Addresses>
    </Publisher>
    <RootComponents>
      <RootComponent type="66" schemaName="$Namespace.$ComponentName" behavior="0" />
    </RootComponents>
    <MissingDependencies />
  </SolutionManifest>
</ImportExportXml>
"@ | Set-Content (Join-Path $packFolder "solution.xml") -Encoding UTF8

# Create customizations.xml with PCF control registration
@"
<?xml version="1.0" encoding="utf-8"?>
<ImportExportXml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Entities />
  <Roles />
  <Workflows />
  <FieldSecurityProfiles />
  <Templates />
  <EntityMaps />
  <EntityRelationships />
  <OrganizationSettings />
  <optionsets />
  <CustomControls>
    <CustomControl Name="$Namespace.$ComponentName" Version="$Version" AllowGridPreview="0" ExcludeFromRecordSummary="0">
      <parameters>
        <$PropertyName type="$PropertyType" primary="1" />
      </parameters>
      <resources>
        <code path="bundle.js" order="1" />
      </resources>
    </CustomControl>
  </CustomControls>
  <SolutionPluginAssemblies />
  <EntityDataProviders />
  <Languages>
    <Language>1033</Language>
  </Languages>
</ImportExportXml>
"@ | Set-Content (Join-Path $packFolder "customizations.xml") -Encoding UTF8

# Create the zip
if (Test-Path $zipFile) { Remove-Item $zipFile -Force }
$filesToZip = @(
    (Join-Path $packFolder "[Content_Types].xml"),
    (Join-Path $packFolder "customizations.xml"),
    (Join-Path $packFolder "solution.xml")
)

# Use System.IO.Compression for proper zip creation
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($packFolder, $zipFile)

Write-Host "Solution zip created: $zipFile" -ForegroundColor Green
Write-Host "Size: $([math]::Round((Get-Item $zipFile).Length / 1KB, 1)) KB" -ForegroundColor Green
