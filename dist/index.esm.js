/**
 * cypress-keycloak-idp-hint v1.4.0
 *
 * Copyright (c) 2019 babangsund
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function e(){for(var e=[],r=0;r<36;r++)e[r]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&parseInt(e[19])|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}Cypress.Commands.add("login",(function(r){var t=r.root,o=r.realm,n=r.username,a=r.password,s=r.client_id,c=r.redirect_uri,d=r.idp_hint;return cy.request({url:t+"/auth/realms/"+o+"/protocol/openid-connect/auth",qs:{client_id:s,redirect_uri:c,scope:"openid",state:e(),nonce:e(),response_type:"code",response_mode:"fragment",kc_idp_hint:d}}).then((function(e){var r=document.createElement("html");r.innerHTML=e.body;var t=r.getElementsByTagName("form");if(!!t.length)return cy.request({form:!0,method:"POST",url:t[0].action,followRedirect:!1,body:{username:n,password:a}})}))})),Cypress.Commands.add("logout",(function(e){var r=e.root,t=e.realm,o=e.redirect_uri;return cy.request({qs:{redirect_uri:o},url:r+"/auth/realms/"+t+"/protocol/openid-connect/logout"})}));
