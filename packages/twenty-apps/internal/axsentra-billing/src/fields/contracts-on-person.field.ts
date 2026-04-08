import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { UNIVERSAL_IDENTIFIERS } from 'src/constants/universal-identifiers.constant';

export default defineField({
  universalIdentifier:
    UNIVERSAL_IDENTIFIERS.fields.contractsOnPerson.universalIdentifier,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'contracts',
  label: 'Contracts',
  description: 'Contracts where this person is the primary contact',
  icon: 'IconFileDescription',
  relationTargetObjectMetadataUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.objects.contract.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    UNIVERSAL_IDENTIFIERS.objects.contract.fields.contact.universalIdentifier,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
