// ==UserScript==
// @name         Refarm
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Completes search rewards automatically.
// @author       newguy
// @match        https://www.bing.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

const FSearchList = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "C#", "Ruby", "PHP", "Swift", "Kotlin", "TypeScript", "SQL", "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "SQLite", "OracleDatabase", "MariaDB", "Firebase", "GraphQL", "RESTfulAPIs", "SOAP", "gRPC", "AJAX", "JSON", "XML", "YAML", "React", "Angular", "Vue.js", "Svelte", "Ember.js", "Backbone.js", "Bootstrap", "Foundation", "TailwindCSS", "Bulma", "Materialize", "jQuery", "D3.js", "Three.js", "Next.js", "Nuxt.js", "Gatsby", "Blazor", "ASP.NET", "Django", "Flask", "RubyonRails", "SpringBoot", "Express.js", "Koa.js", "NestJS", "Laravel", "Symfony", "CodeIgniter", "CakePHP", "WordPress", "Joomla", "Drupal", "Magento", "Shopify", "WooCommerce", "BigCommerce", "Git", "GitHub", "GitLab", "Bitbucket", "SVN", "Mercurial", "CI/CD", "Jenkins", "TravisCI", "CircleCI", "GitHubActions", "AzureDevOps", "Docker", "Kubernetes", "OpenShift", "Terraform", "Ansible", "Puppet", "Chef", "Vagrant", "AWS", "Azure", "GoogleCloudPlatform", "IBMCloud", "OracleCloud", "Heroku", "Netlify", "Vercel", "FirebaseHosting", "DigitalOcean", "Linode", "VPS", "Serverless", "Microservices", "MonolithicArchitecture", "SOA", "Event-DrivenArchitecture", "CQRS", "EventSourcing", "MessageQueues", "RabbitMQ", "Kafka", "ActiveMQ", "ZeroMQ", "Redis", "Memcached", "Elasticsearch", "Solr", "Lucene", "Jest", "Mocha", "Chai", "Jasmine", "Karma", "Selenium", "Cypress", "Puppeteer", "Playwright", "JUnit", "TestNG", "Mockito", "RSpec", "Cucumber", "Protractor", "QUnit", "AVA", "Tape", "Jest", "Enzyme", "ReactTestingLibrary", "ChakraUI", "AntDesign", "Material-UI", "SemanticUI", "Vuetify", "Quasar", "ElementUI", "PrimeNG", "PrimeReact", "PrimeVue", "Redux", "MobX", "NgRx", "RxJS", "Immutable.js", "XState", "Recoil", "Zustand", "SWR", "ReactQuery", "ApolloClient", "Relay", "Formik", "ReactHookForm", "AngularForms", "Vuex", "Pinia", "Storybook", "Lerna", "Nx", "Micro-Frontends", "WebComponents", "Stencil", "LitElement", "Polymer", "Scully", "StaticSiteGenerators", "Eleventy", "Hugo", "Jekyll", "Hexo", "Gulp", "Grunt", "Webpack", "Rollup", "Parcel", "Snowpack", "Vite", "Babel", "ESLint", "Prettier", "TSLint", "JSHint", "Stylelint", "PostCSS", "Sass", "Less", "Stylus", "CSS-in-JS", "StyledComponents", "Emotion", "Radium", "Aphrodite", "JavaScriptEngines", "V8", "SpiderMonkey", "JavaScriptCore", "ChakraCore", "Node.js", "Deno", "NPM", "Yarn", "PNPM", "JSPM", "Bower", "Parcel", "Rome", "Rust", "Go", "Scala", "Haskell", "Elixir", "Erlang", "Clojure", "F#", "OCaml", "Lua", "Perl", "R", "MATLAB", "SAS", "SPSS", "Stata", "Julia", "Ada", "VHDL", "Verilog", "Assembly", "Fortran", "COBOL", "Pascal", "D", "Nim", "Crystal", "Zig", "Elm", "PureScript", "ReasonML", "OCaml", "WebAssembly", "RaspberryPi", "Arduino", "IoT", "WearableTechnology", "SmartHome", "Blockchain", "SmartContracts", "Ethereum", "Solidity", "Bitcoin", "Hyperledger", "EOSIO", "Tron", "Polkadot", "BinanceSmartChain", "NFT", "IPFS", "DistributedLedger", "Cryptography", "EllipticCurveCryptography", "HashFunctions", "PublicKeyInfrastructure", "TLS/SSL", "OAuth", "OpenIDConnect", "JWT", "SAML", "LDAP", "OAuth2", "IdentityManagement", "SingleSign-On", "BiometricAuthentication", "Multi-FactorAuthentication", "ThreatModeling", "PenetrationTesting", "VulnerabilityScanning", "SecurityInformationandEventManagement", "EndpointSecurity", "NetworkSecurity", "Firewalls", "IntrusionDetectionSystems", "IntrusionPreventionSystems", "ZeroTrustSecurity", "DevSecOps", "SecurityasCode", "ComplianceasCode", "SOC2", "ISO27001", "GDPR", "HIPAA", "PCIDSS", "CMMI", "ITIL", "COBIT", "Lean", "SixSigma", "Agile", "Scrum", "Kanban", "XP", "Crystal", "FDD", "DSDM", "SAFe", "LeSS", "SpotifyModel", "Nexus", "Scrum@Scale", "DevOps", "DevSecOps", "SRE", "ContinuousIntegration", "ContinuousDelivery", "ContinuousDeployment", "InfrastructureasCode", "ConfigurationManagement", "ReleaseManagement", "ChangeManagement", "IncidentManagement", "ProblemManagement", "ITServiceManagement", "BusinessContinuityPlanning", "DisasterRecovery", "DataBackup", "DataArchiving", "DataPrivacy", "DataGovernance", "DataLineage", "DataQuality", "DataCleansing", "DataEnrichment", "DataIntegration", "DataWarehousing", "DataLakes", "BigData", "Hadoop", "Spark", "Flink", "KafkaStreams", "Storm", "Samza", "Beam", "Airflow", "NiFi", "Azkaban", "Oozie", "Hue", "DataAnalytics", "BusinessIntelligence", "DataVisualization", "PowerBI", "Tableau", "Qlik", "Looker", "GoogleDataStudio", "Grafana", "Kibana", "Splunk", "Logstash", "ELKStack", "TICKStack", "Prometheus", "Thanos", "Cortex", "OpenTelemetry", "Jaeger", "Zipkin", "Tracing", "Logging", "Monitoring", "Alerting", "IncidentResponse", "ChaosEngineering", "ResilienceEngineering", "SiteReliabilityEngineering", "Scalability", "PerformanceTuning", "LoadTesting", "StressTesting", "CapacityPlanning", "Auto-Scaling", "ServerlessComputing", "FunctionasaService", "BackendasaService", "PlatformasaService", "SoftwareasaService", "InfrastructureasaService", "EverythingasaService", "APIGateway", "ServiceMesh", "APIManagement", "OAuth2", "OpenIDConnect", "JWT", "SAML", "LDAP", "IdentityManagement", "SingleSign-On", "BiometricAuthentication", "Multi-FactorAuthentication", "ThreatModeling", "PenetrationTesting", "VulnerabilityScanning", "SecurityInformationandEventManagement", "EndpointSecurity", "NetworkSecurity", "Firewalls", "IntrusionDetectionSystems", "IntrusionPreventionSystems", "ZeroTrustSecurity", "DevSecOps", "SecurityasCode", "ComplianceasCode", "SOC2", "ISO27001", "GDPR", "HIPAA", "PCIDSS", "CMMI", "ITIL", "COBIT", "Lean", "SixSigma", "Agile", "Scrum", "Kanban", "XP", "Crystal", "FDD", "DSDM", "SAFe", "LeSS", "SpotifyModel", "Nexus", "Scrum@Scale"];
const FSearchInterval = [2000, 3000];
var speed = "default" // ['default', 'fast', 'slow']; default is recommended!


function RSearch() {
    const listLength = (() => {
        const calculateLength = (list) => list.length;
        return calculateLength(FSearchList);
    })();
    const randomFloat = (() => {
        const generateRandomFloat = () => Math.random();
        return generateRandomFloat();
    })();
    const scaledFloat = (() => {
        const scaleFloat = (float, scale) => float * scale;
        return scaleFloat(randomFloat, listLength);
    })();
    const randomIndex = (() => {
        const floorValue = (value) => Math.floor(value);
        return floorValue(scaledFloat);
    })();
    
    const selectedElement = (() => {
        const getElement = (list, index) => list[index];
        return getElement(FSearchList, randomIndex);
    })();
    
    return selectedElement;
}


function RInterval() {
    var x = 0;
    if (speed == "default") {
        x = 1800
    }
    if (speed == "slow") {
        x = 4500
    }
    if (speed == "fast") {
        x = 1000
    }
    return x;
}



(async function () {
    'use strict';
    const showThemeSelector = () => {
        let existingDropdown = document.getElementById('theme-selector-dropdown');
        if (existingDropdown) {
            for (let i = 0; i <= 300; i++) {
                existingDropdown.remove();
            }
            
            return;
        }
        
        let dropdownContainer = document.createElement('div');
        dropdownContainer.id = 'theme-selector-dropdown';
        dropdownContainer.style.position = 'fixed';
        dropdownContainer.style.top = '50%';
        dropdownContainer.style.left = '50%';
        dropdownContainer.style.transform = 'translate(-50%, -50%)';
        dropdownContainer.style.padding = '10px';
        dropdownContainer.style.background = '#1f1f1f';
        dropdownContainer.style.zIndex = '9999';
        dropdownContainer.style.borderRadius = '10px'; // Rounded corners
        dropdownContainer.style.zIndex = '9999';
        dropdownContainer.style.maxHeight = '800px';
        dropdownContainer.style.overflowY = 'auto';
        
        // Add fancy purple glow, yes!
        dropdownContainer.style.boxShadow = '0 0 10px 5px rgba(128, 0, 128, 0.7)';
        
        let themeSelect = document.createElement('select');
        // populate
        let option = document.createElement('option');
        option.value = "Currently farming at " + speed + " pace.";
        option.textContent = "Currently farming at " + speed + " pace."; // Use textContent instead of text
        
        themeSelect.appendChild(option);
        themeSelect.value = "Currently farming at " + speed + " pace.";
        
        
        
        
        dropdownContainer.appendChild(themeSelect);
        document.body.appendChild(dropdownContainer);
    };
    showThemeSelector();
    
    
    
    
    const randomInterval = RInterval();
    console.log(`%c[Refarm] Next in: ${randomInterval}ms`, 'font-size: 20px; color: red; font-weight: bold;');
    
    await new Promise(resolve => setTimeout(resolve, randomInterval))
    
    document.getElementById("sb_form_q")
        .value = RSearch();
    document.getElementById("sb_form_go")
        .click();
    
    
})();
