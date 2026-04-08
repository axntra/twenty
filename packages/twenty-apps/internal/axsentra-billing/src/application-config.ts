import { defineApplication } from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineApplication({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.application.universalIdentifier,
  displayName: 'Axsentra Billing',
  description:
    'Internal invoicing and contract management for Axsentra customer billing',
  defaultRoleUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.roles.defaultRole.universalIdentifier,
});
