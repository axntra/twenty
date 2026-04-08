import { defineRole } from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineRole({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.roles.defaultRole.universalIdentifier,
  label: 'Axsentra Billing default role',
  description:
    'Default role for the Axsentra Billing app with full CRUD on billing objects',
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: true,
  canSoftDeleteAllObjectRecords: true,
  canDestroyAllObjectRecords: false,
});
