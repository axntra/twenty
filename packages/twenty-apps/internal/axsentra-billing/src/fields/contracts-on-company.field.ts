import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineField({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.fields.contractsOnCompany.universalIdentifier,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'contracts',
  label: 'Contracts',
  description: 'Contracts linked to this company',
  icon: 'IconFileDescription',
  relationTargetObjectMetadataUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.objects.contract.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.objects.contract.fields.company.universalIdentifier,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
